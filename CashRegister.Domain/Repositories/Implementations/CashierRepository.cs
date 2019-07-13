using System.Linq;
using CashRegister.Data.DTOs;
using CashRegister.Data.Entities;
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
        public GetCashierDto GetCashierById(int id)
        {
            var cashierWithThatId = _context
                .Cashiers
                .Include(c => c.CashRegisterCashiers)
                .ThenInclude(c => c.CashRegister)
                .FirstOrDefault(c => c.Id == id);

            return cashierWithThatId == null ? null : new GetCashierDto(cashierWithThatId);
        }
        public GetCashierDto GetCashierByUsernameAndPassword(string username, string password)
        {
            var cashierWithThatUsernameAndPassword = _context
                    .Cashiers
                    .Include(c => c.CashRegisterCashiers)
                    .ThenInclude(c => c.CashRegister)
                    .FirstOrDefault(c => username == c.Username && password == c.Password);

            return cashierWithThatUsernameAndPassword == null ? null : new GetCashierDto(cashierWithThatUsernameAndPassword);
        }
    }
}