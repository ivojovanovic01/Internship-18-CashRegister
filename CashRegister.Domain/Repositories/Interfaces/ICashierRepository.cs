using CashRegister.Data.Entities.Models;

namespace CashRegister.Domain.Repositories.Interfaces
{
    public interface ICashierRepository
    {
        Cashier GetCashierById(int id);
    }
}