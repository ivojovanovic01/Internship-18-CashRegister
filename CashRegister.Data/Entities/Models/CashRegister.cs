using System.Collections.Generic;

namespace CashRegister.Data.Entities.Models
{
    public class CashRegister
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<CashRegisterCashier> CashRegisterCashiers { get; set; }
        public ICollection<Receipt> Receipts { get; set; }
    }
}