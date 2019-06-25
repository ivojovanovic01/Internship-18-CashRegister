using System.Collections.Generic;

namespace CashRegister.Data.Entities.Models
{
    public class Cashier
    {
        public int Id { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public ICollection<CashRegisterCashier> CashRegisterCashiers { get; set; }
        public ICollection<Receipt> Receipts { get; set; }
    }
}