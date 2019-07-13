using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CashRegister.Data.Enums;

namespace CashRegister.Data.Entities.Models
{
    public class Product
    {
        public int Id { get; set; }

        [StringLength(13, MinimumLength = 13)]
        [Required]
        public string Barcode { get; set; }
        [StringLength(50, MinimumLength = 3)]
        [Required]
        public string Name { get; set; }
        [Range(double.Epsilon, double.MaxValue)]
        public double Price { get; set; }
        [Range(1, int.MaxValue)]
        public int AvailableQuantity { get; set; }
        public TaxType TaxType { get; set; }

        public ICollection<ReceiptProduct> ReceiptProducts { get; set; }
    }
}