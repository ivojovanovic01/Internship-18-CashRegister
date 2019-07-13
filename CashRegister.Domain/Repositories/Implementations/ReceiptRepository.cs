using System;
using System.Collections.Generic;
using System.Linq;
using CashRegister.Data.DTOs;
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
        public Guid AddReceipt(AddReceiptDto addReceiptDto)
        {
            if (IsReceiptNonValid(addReceiptDto))
                return Guid.Empty;

            var cashRegister = _context.CashRegisters.Find(addReceiptDto.CashRegisterId);
            if (cashRegister == null)
                return Guid.Empty;

            var cashier = _context.Cashiers.Find(addReceiptDto.CashierId);
            if (cashier == null)
                return Guid.Empty;

            var receiptToAdd = new Receipt(
                DateTime.Now, 
                addReceiptDto.TaxFreePrice, 
                addReceiptDto.TotalExciseTax,
                addReceiptDto.TotalDirectTax,
                addReceiptDto.TotalPrice, 
                cashRegister, 
                cashier);

            _context.Receipts.Add(receiptToAdd);

            AddProductsOnReceiptAndChangeAq(receiptToAdd.Id, addReceiptDto);

            _context.SaveChanges();
            return receiptToAdd.Id;
        }
        public GetReceiptDto GetReceiptById(Guid id)
        {
            var receiptWithThatId = _context
                .Receipts
                .Include(r => r.Cashier)
                .Include(r => r.ReceiptProducts)
                .ThenInclude(rp => rp.Product)
                .FirstOrDefault(r => r.Id == id);

            return receiptWithThatId == null ? null : new GetReceiptDto(receiptWithThatId);
        }
        public List<Receipt> GetReceipts(int cashRegisterId, int pageNumber, DateTime? filterDate)
        {
            var receipts = _context.Receipts.Where(receipt => receipt.CashRegister.Id == cashRegisterId);

            if(!receipts.Any())
                return new List<Receipt>();

            if (filterDate != null)
                receipts = receipts.Where(r => r.CreatedTime.Date == filterDate.Value.Date);

            return !receipts.Any() ? 
                new List<Receipt>() : 
                receipts.OrderBy(receipt => receipt.CreatedTime).Skip(pageNumber * 5).Take(5).ToList();
        }
        private static bool IsReceiptNonValid(AddReceiptDto receipt)
        {
            return (receipt.TaxFreePrice < 0 || 
                    receipt.TotalExciseTax < 0 || 
                    receipt.TotalDirectTax < 0 || 
                    receipt.TotalPrice < 0 || 
                    receipt.Products.Count <= 0 || 
                    !receipt.Products.All(p => p.Quantity <= p.AvailableQuantity && p.Price > 0) || 
                    receipt.CashRegisterId == 0 || 
                    receipt.CashierId == 0);
        }
        private void AddProductsOnReceiptAndChangeAq(Guid receiptId, AddReceiptDto addReceiptDto)
        {
            foreach (var product in addReceiptDto.Products)
            {
                _context.ReceiptProducts
                    .Add(new ReceiptProduct(
                        receiptId,
                        product.Id,
                        product.Quantity,
                        product.Price,
                        product.TaxType));

                var addedProduct = _context.Products.Find(product.Id);
                addedProduct.AvailableQuantity -= product.Quantity;
            }
        }
    }
}