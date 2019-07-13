using CashRegister.Data.DTOs;

namespace CashRegister.Domain.Repositories.Interfaces
{
    public interface ICashierRepository
    {
        GetCashierDto GetCashierById(int id);
        GetCashierDto GetCashierByUsernameAndPassword(string username, string password);
    }
}