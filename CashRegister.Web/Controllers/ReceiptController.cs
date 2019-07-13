using System;
using CashRegister.Data.DTOs;
using CashRegister.Domain.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CashRegister.Web.Controllers
{
    [Route("api/receipts")]
    [ApiController]
    public class ReceiptController : ControllerBase
    {
        public ReceiptController(IReceiptRepository receiptRepository)
        {
            _receiptRepository = receiptRepository;
        }
        private readonly IReceiptRepository _receiptRepository;

        [HttpPost("add")]
        public IActionResult AddReceipt(AddReceiptDto addReceiptDto)
        {
            var createdReceiptId = _receiptRepository.AddReceipt(addReceiptDto);

            if (createdReceiptId != Guid.Empty)
                return Ok(createdReceiptId);
            return Forbid();
        }

        [HttpGet("get-by-id")]
        public IActionResult GetReceiptById(Guid id)
        {
            var receipt = _receiptRepository.GetReceiptById(id);
            if (receipt != null)
                return Ok(receipt);
            return NotFound();
        }

        [HttpGet("filtered")]
        public IActionResult GetReceipts(int cashRegisterId, int pageNumber, DateTime? filterDate)
        {
            return Ok(_receiptRepository.GetReceipts(cashRegisterId, pageNumber, filterDate));
        }
    }
}