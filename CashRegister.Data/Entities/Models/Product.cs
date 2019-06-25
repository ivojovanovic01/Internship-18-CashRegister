using System.Collections.Generic;
using CashRegister.Data.Enums;

namespace CashRegister.Data.Entities.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Barcode { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int AvailableQuantity { get; set; }
        public TaxType TaxType { get; set; }

        public ICollection<ReceiptProduct> ReceiptProducts { get; set; }
    }
}