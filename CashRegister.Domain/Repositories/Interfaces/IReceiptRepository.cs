using System;
using System.Collections.Generic;
using CashRegister.Data.DTOs;
using CashRegister.Data.Entities.Models;

namespace CashRegister.Domain.Repositories.Interfaces
{
    public interface IReceiptRepository
    {
        Guid AddReceipt(AddReceiptDto addReceiptDto);
        GetReceiptDto GetReceiptById(Guid id);
        List<Receipt> GetReceipts(int cashRegisterId, int pageNumber, DateTime? filterDate);
    }
}