using System;
using System.ComponentModel.DataAnnotations;
using CashRegister.Data.Enums;

namespace CashRegister.Data.Entities.Models
{
    public class ReceiptProduct
    {
        public ReceiptProduct()
        {
        }

        public ReceiptProduct(Guid receiptId, int productId, int productQuantity, double productUnitPrice, TaxType productTaxType)
        {
            ReceiptId = receiptId;
            ProductId = productId;
            ProductQuantity = productQuantity;
            ProductUnitPrice = productUnitPrice;
            ProductTaxType = productTaxType;
        }
        public Guid ReceiptId { get; set; }
        public Receipt Receipt { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        [Range(1, int.MaxValue)]
        public int ProductQuantity { get; set; }
        [Range(double.Epsilon, double.MaxValue)]
        public double ProductUnitPrice { get; set; }
        public TaxType ProductTaxType { get; set; }
    }
}