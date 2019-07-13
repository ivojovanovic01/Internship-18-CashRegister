using System;
using System.Collections.Generic;
using CashRegister.Data.Entities.Models;
using CashRegister.Domain.Repositories.Implementations;

namespace CashRegister.Domain.Repositories.Interfaces
{
    public interface IReceiptRepository
    {
        List<Receipt> GetAllReceipts();
        List<Receipt> GetReceipts(int cashierId, int cashRegisterId, int pageNumber, DateTime? filterDate);
        Guid AddReceipt(ReceiptRepository.AddReceiptDto addReceiptDto);
        Receipt GetReceiptById(Guid id);
    }
}