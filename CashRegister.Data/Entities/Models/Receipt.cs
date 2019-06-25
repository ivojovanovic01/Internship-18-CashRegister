using System;
using System.Collections.Generic;

namespace CashRegister.Data.Entities.Models
{
    public class Receipt
    {
        public Guid Id { get; set; }

        public DateTime CreatedTime { get; set; }
        public double TaxFreePrice { get; set; }
        public double TotalExciseTax { get; set; }
        public double TotalDirectTax { get; set; }
        public double TotalPrice { get; set; }

        public CashRegister CashRegister { get; set; }
        public ICollection<ReceiptProduct> ReceiptProducts { get; set; }
    }
}