using System;
using System.Collections.Generic;
using System.Linq;
using CashRegister.Data.Entities;
using CashRegister.Data.Entities.Models;
using CashRegister.Domain.Repositories.Interfaces;

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
            var receiptWithThatId = _context.Receipts.Find(id);
            return receiptWithThatId;
        }
    }
}