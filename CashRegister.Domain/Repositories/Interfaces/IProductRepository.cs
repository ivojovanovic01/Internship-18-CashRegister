using System.Collections.Generic;
using CashRegister.Data.Entities.Models;

namespace CashRegister.Domain.Repositories.Interfaces
{
    public interface IProductRepository
    {
        List<Product> GetAllProducts();
        bool AddProduct(Product productToAdd);
        bool EditProduct(Product editedProduct);
        Product GetProductById(int id);
        List<Product> GetSearchedProducts(string search);
        bool IncreaseProductAvailableQuantity(Product editedProduct);
        List<string> GetProductTaxTypeEnumValues();
    }
}
