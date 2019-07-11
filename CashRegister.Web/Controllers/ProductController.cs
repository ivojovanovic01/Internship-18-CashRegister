using CashRegister.Data.Entities.Models;
using CashRegister.Domain.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CashRegister.Web.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        private readonly IProductRepository _productRepository;

        [HttpPost("add")]
        public IActionResult AddProduct(Product productToAdd)
        {
            var wasAddSuccessful = _productRepository.AddProduct(productToAdd);

            if (wasAddSuccessful)
                return Ok();
            return Forbid();
        }

        [HttpGet("get-by-id")]
        public IActionResult GetProductById(int id)
        {
            var product = _productRepository.GetProductById(id);
            if (product != null)
                return Ok(product);
            return NotFound();
        }

        [HttpGet("all")]
        public IActionResult GetAllProducts()
        {
            return Ok(_productRepository.GetAllProducts());
        }

        [HttpGet("search")]
        public IActionResult GetSearchedProducts(string search)
        {
            return Ok(_productRepository.GetSearchedProducts(search));
        }

        [HttpPost("edit")]
        public IActionResult EditProduct(Product editedProduct)
        {
            var wasEditSuccessful = _productRepository.EditProduct(editedProduct);
            if (wasEditSuccessful)
                return Ok();
            return NotFound();
        }

        [HttpPost("increase-available-quantity")]
        public IActionResult IncreaseProductAvailableQuantity(Product editedProduct)
        {
            var wasProductIncreaseAvailableQuantitySuccessful = _productRepository.IncreaseProductAvailableQuantity(editedProduct);
            if (wasProductIncreaseAvailableQuantitySuccessful)
                return Ok();
            return NotFound();
        }

        [HttpGet("all-tax-types")]
        public IActionResult GetProductTaxTypeEnumValues()
        {
            return Ok(_productRepository.GetProductTaxTypeEnumValues());
        }
    }
}