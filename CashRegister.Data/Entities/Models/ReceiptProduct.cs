using System;

namespace CashRegister.Data.Entities.Models
{
    public class ReceiptProduct
    {
        public Guid ReceiptId { get; set; }
        public Receipt Receipt { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int ProductQuantity { get; set; }
        public double ProductUnitPrice { get; set; }
    }
}