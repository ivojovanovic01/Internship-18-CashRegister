
namespace CashRegister.Data.Entities.Models
{
    public class CashRegisterCashier
    {
        public CashRegisterCashier()
        {
        }

        public CashRegisterCashier(int cashRegisterId, int cashierId)
        {
            CashRegisterId = cashRegisterId;
            CashierId = cashierId;
        }
        public int CashRegisterId { get; set; }
        public CashRegister CashRegister { get; set; }

        public int CashierId { get; set; }
        public Cashier Cashier { get; set; }
    }
}