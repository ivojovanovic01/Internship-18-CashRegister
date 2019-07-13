using System.Collections.Generic;

namespace CashRegister.Data.DTOs
{
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
}
