using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CashRegister.Data.Entities.Models;
using CashRegister.Domain.Repositories.Implementations;
using CashRegister.Domain.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
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

        [HttpGet("all")]
        public IActionResult GetAllReceipts()
        {
            return Ok(_receiptRepository.GetAllReceipts());
        }

        [HttpGet("filtered")]
        public IActionResult GetReceipts(int cashierId, int cashRegisterId, int pageNumber, DateTime? filterDate)
        {
            return Ok(_receiptRepository.GetReceipts(cashierId, cashRegisterId, pageNumber, filterDate));
        }


        [HttpPost("add")]
        public IActionResult AddReceipt(ReceiptRepository.AddReceiptDto addReceiptDto)
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
    }
}