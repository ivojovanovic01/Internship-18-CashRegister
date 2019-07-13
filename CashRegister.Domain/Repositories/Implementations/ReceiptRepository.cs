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
                return cashier.Receipts.OrderBy(r => r.TaxFreePrice).Skip(pageNumber * 5).Take(5).ToList();

            return cashier.Receipts.Where(r => r.CreatedTime.Date == filterDate.Value.Date).OrderBy(r => r.CreatedTime).Skip(pageNumber * 5).Take(5).ToList();
        }

        public Guid AddReceipt(AddReceiptDto addReceiptDto)
        {
            if (
                addReceiptDto.TaxFreePrice < 0 ||
                addReceiptDto.TotalExciseTax < 0 ||
                addReceiptDto.TotalDirectTax < 0 || 
                addReceiptDto.TotalPrice < 0 ||
                addReceiptDto.Products.Count <= 0 ||
                !addReceiptDto.Products.All(p => p.Quantity <= p.AvailableQuantity && p.Price > 0) ||
                addReceiptDto.CashRegisterId == 0 ||
                addReceiptDto.CashierId == 0)
                return Guid.Empty;

            var cashRegister = _context.CashRegisters.FirstOrDefault(cr => cr.Id == addReceiptDto.CashRegisterId);
            if (cashRegister == null)
                return Guid.Empty;
            var cashier = _context.Cashiers.FirstOrDefault(c => c.Id == addReceiptDto.CashierId);
            if (cashier == null)
                return Guid.Empty;

            var receiptToAdd = new Receipt(DateTime.Now, addReceiptDto.TaxFreePrice, addReceiptDto.TotalExciseTax,
                addReceiptDto.TotalDirectTax,
                addReceiptDto.TotalPrice, cashRegister, cashier);
            _context.Receipts.Add(receiptToAdd);
            addReceiptDto.Products.ForEach(p => _context.ReceiptProducts.Add(new ReceiptProduct(receiptToAdd.Id, p.Id, p.Quantity, p.Price, p.TaxType)));
            _context.SaveChanges();
            return receiptToAdd.Id;
        }

        public Receipt GetReceiptById(Guid id)
        {
            var receiptWithThatId = _context.Receipts.Include(r => r.ReceiptProducts).ThenInclude(rp => rp.Product)
                .FirstOrDefault(r => r.Id == id);
            return receiptWithThatId;
        }

        public class AddReceiptDto
        {
            public double TaxFreePrice { get; set; }
            public double TotalExciseTax { get; set; }
            public double TotalDirectTax { get; set; }
            public double TotalPrice { get; set; }
            public int CashRegisterId { get; set; }
            public int CashierId { get; set; }
            public List<AddReceiptProductDto> Products { get; set; }
        }

        public class AddReceiptProductDto : Product
        {
            public int Quantity { get; set; }
        }
    }
}