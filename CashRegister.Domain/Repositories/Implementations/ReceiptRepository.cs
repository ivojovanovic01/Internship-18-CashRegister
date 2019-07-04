using System;
using System.Collections.Generic;
using System.Linq;
using CashRegister.Data.Entities;
using CashRegister.Data.Entities.Models;
using CashRegister.Domain.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CashRegister.Domain.Repositories.Implementations
{
    public class ReceiptRepository : IReceiptRepository
    {
        public ReceiptRepository(CashRegisterContext context)
        {
            _context = context;
        }
        private readonly CashRegisterContext _context;

        public List<Receipt> GetAllReceipts()
        {
            return _context.Receipts.ToList();
        }

        public List<Receipt> GetReceipts(int cashierId, int cashRegisterId, int pageNumber, DateTime? filterDate)
        {
            var cashier = _context.Cashiers.Include(c => c.Receipts).ThenInclude(r => r.CashRegister).FirstOrDefault(c => c.Id == cashierId);
            if(cashier == null)
                return new List<Receipt>();

            if (filterDate == null)
                return cashier.Receipts.OrderBy(r => r.CreatedTime).Skip(pageNumber * 5).Take(5).ToList();

            return cashier.Receipts.Where(r => r.CreatedTime.Date.Equals(filterDate)).OrderBy(r => r.CreatedTime).Skip(pageNumber * 5).Take(5).ToList();
        }

        public bool AddReceipt(Receipt receiptToAdd)
        {
            var doesReceiptExist = _context.Receipts.Any(receipt => receipt.Id == receiptToAdd.Id);

            if (doesReceiptExist || receiptToAdd.CashRegister != null 
                                 || receiptToAdd.CreatedTime > DateTime.Now 
                                 || receiptToAdd.ReceiptProducts.Count != 0 
                                 || receiptToAdd.TotalPrice <= 0.0
                                 || receiptToAdd.ReceiptProducts.All(receiptProduct => receiptProduct.Product != null 
                                                                                       || receiptProduct.ProductQuantity > 0 
                                                                                       || receiptProduct.ProductUnitPrice > 0.0))
                return false;
            //provjera jeli ima previse proizvoda na racunu a nema u stvr
            _context.Receipts.Add(receiptToAdd);
            _context.SaveChanges();

            return true;
        }

        public Receipt GetReceiptById(Guid id)
        {
            var receiptWithThatId = _context.Receipts.Include(r => r.ReceiptProducts).ThenInclude(rp => rp.Product)
                .FirstOrDefault(r => r.Id == id);
            return receiptWithThatId;
        }
    }
}