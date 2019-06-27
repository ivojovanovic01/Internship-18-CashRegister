using System.Linq;
using CashRegister.Data.Entities;
using CashRegister.Data.Entities.Models;
using CashRegister.Domain.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CashRegister.Domain.Repositories.Implementations
{
    public class CashierRepository : ICashierRepository
    {
        public CashierRepository(CashRegisterContext context)
        {
            _context = context;
        }
        private readonly CashRegisterContext _context;

        public Cashier GetCashierById(int id)
        {
            var cashierWithThatId = _context.Cashiers.Include(c => c.CashRegisterCashiers).ThenInclude(c => c.CashRegister).FirstOrDefault(c => c.Id == id);
            return cashierWithThatId;
        }
    }
}