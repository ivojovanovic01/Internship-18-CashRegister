using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CashRegister.Data.Entities.Models
{
    public class Receipt
    {
        public Receipt()
        {
        }

        public Receipt(DateTime createdTime, double taxFreePrice, double totalExciseTax, double totalDirectTax, double totalPrice, CashRegister cashRegister, Cashier cashier)
        {
            Id = Guid.NewGuid();
            CreatedTime = createdTime;
            TaxFreePrice = taxFreePrice;
            TotalExciseTax = totalExciseTax;
            TotalDirectTax = totalDirectTax;
            TotalPrice = totalPrice;
            CashRegister = cashRegister;
            Cashier = cashier;
        }
        public Guid Id { get; set; }

        public DateTime CreatedTime { get; set; }
        [Range(double.Epsilon, double.MaxValue)]
        public double TaxFreePrice { get; set; }
        [Range(double.Epsilon, double.MaxValue)]
        public double TotalExciseTax { get; set; }
        [Range(double.Epsilon, double.MaxValue)]
        public double TotalDirectTax { get; set; }
        [Range(double.Epsilon, double.MaxValue)]
        public double TotalPrice { get; set; }

        public CashRegister CashRegister { get; set; }
        public Cashier Cashier { get; set; }
        public ICollection<ReceiptProduct> ReceiptProducts { get; set; }
    }
}