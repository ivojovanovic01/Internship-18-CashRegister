using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CashRegister.Data.Entities.Models
{
    public class CashRegister
    {
        public int Id { get; set; }

        [StringLength(20, MinimumLength = 3)]
        [Required]
        public string Name { get; set; }

        public ICollection<CashRegisterCashier> CashRegisterCashiers { get; set; }
        public ICollection<Receipt> Receipts { get; set; }
    }
}