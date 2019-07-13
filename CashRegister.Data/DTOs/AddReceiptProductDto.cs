using System;
using CashRegister.Data.Entities.Models;

namespace CashRegister.Data.DTOs
{
    public class AddReceiptProductDto : Product
    {
        public int Quantity { get; set; }
    }
}
