using System.Collections.Generic;
using CashRegister.Data.Entities.Models;

namespace CashRegister.Domain.Repositories.Interfaces
{
    public interface IProductRepository
    {
        bool AddProduct(Product productToAdd);
        Product GetProductById(int id);
        List<Product> GetAllProducts();
        List<Product> GetSearchedProducts(string search);
        bool EditProduct(Product editedProduct);
        bool IncreaseProductAvailableQuantity(Product editedProduct);
        List<string> GetProductTaxTypeEnumValues();
    }
}
