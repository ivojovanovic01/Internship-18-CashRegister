using System.Collections.Generic;
using System.Linq;
using CashRegister.Data.Entities.Models;

namespace CashRegister.Data.DTOs
{
    public class GetCashierDto
    {
        public GetCashierDto()
        {
        }
        public GetCashierDto(Cashier cashier)
        {
            Id = cashier.Id;
            FirstName = cashier.FirstName;
            LastName = cashier.LastName;
            if (cashier.CashRegisterCashiers.Any())
            {
                CashRegisters = cashier.CashRegisterCashiers.Select(crs => crs.CashRegister).ToList();
                foreach (var cashRegister in CashRegisters)
                {
                    cashRegister.Receipts = null;
                    cashRegister.CashRegisterCashiers = null;
                }
            }
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Entities.Models.CashRegister> CashRegisters { get; set; }
    }
}
