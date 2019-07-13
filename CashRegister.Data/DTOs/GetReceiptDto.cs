using System;
using System.Collections.Generic;
using System.Linq;
using CashRegister.Data.Entities.Models;

namespace CashRegister.Data.DTOs
{
    public class GetReceiptDto
    {
        public GetReceiptDto(Receipt receipt)
        {
            Id = receipt.Id;
            CreatedTime = receipt.CreatedTime;
            TaxFreePrice = receipt.TaxFreePrice;
            TotalExciseTax = receipt.TotalExciseTax;
            TotalDirectTax = receipt.TotalDirectTax;
            TotalPrice = receipt.TotalPrice;
            Cashier = receipt.Cashier;

            if (receipt.ReceiptProducts.Any())
            {
                ReceiptProducts = receipt.ReceiptProducts.ToList();
                foreach (var receiptProduct in ReceiptProducts)
                {
                    receiptProduct.Receipt = null;
                    receiptProduct.Product.ReceiptProducts = null;
                }
            }
        }
        public Guid Id { get; set; }
        public DateTime CreatedTime { get; set; }
        public double TaxFreePrice { get; set; }
        public double TotalExciseTax { get; set; }
        public double TotalDirectTax { get; set; }
        public double TotalPrice { get; set; }
        public Cashier Cashier { get; set; }
        public ICollection<ReceiptProduct> ReceiptProducts { get; set; }
    }
}
