using System;
using System.Collections.Generic;
using CashRegister.Data.Entities.Models;

namespace CashRegister.Domain.Repositories.Interfaces
{
    public interface IReceiptRepository
    {
        List<Receipt> GetAllReceipts();
        List<Receipt> GetReceipts(int cashierId, int cashRegisterId, int pageNumber);
        bool AddReceipt(Receipt receiptToAdd);
        Receipt GetReceiptById(Guid id);
    }
}