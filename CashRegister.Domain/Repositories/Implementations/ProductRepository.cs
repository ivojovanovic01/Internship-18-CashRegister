using System;
using System.Collections.Generic;
using System.Linq;
using CashRegister.Data.Entities;
using CashRegister.Data.Entities.Models;
using CashRegister.Data.Enums;
using CashRegister.Domain.Repositories.Interfaces;
using static System.String;

namespace CashRegister.Domain.Repositories.Implementations
{
    public class ProductRepository : IProductRepository
    {
        public ProductRepository(CashRegisterContext context)
        {
            _context = context;
        }
        private readonly CashRegisterContext _context;
        public bool AddProduct(Product productToAdd)
        {
            if (!IsProductToAddValid(productToAdd))
                return false;

            _context.Products.Add(productToAdd);
            _context.SaveChanges();
            return true;
        }
        public Product GetProductById(int id)
        {
            return _context.Products.Find(id);
        }
        public List<Product> GetAllProducts()
        {
            return _context.Products.ToList();
        }
        public List<Product> GetSearchedProducts(string search)
        {
            if (!IsSearchValid(search))
                return new List<Product>();

            return _context.Products.Where(product =>
                    product.Name.Contains(search, StringComparison.OrdinalIgnoreCase) || 
                    product.Barcode.Contains(search))
                .ToList();
        }
        public bool EditProduct(Product editedProduct)
        {

            if (!IsEditedProductValid(editedProduct))
                return false;

            var productToEdit = GetProductById(editedProduct.Id);
            if (productToEdit == null)
                return false;

            productToEdit.Barcode = editedProduct.Barcode;
            productToEdit.Price = editedProduct.Price;
            productToEdit.TaxType = editedProduct.TaxType;

            _context.SaveChanges();
            return true;
        }
        public bool IncreaseProductAvailableQuantity(Product editedProduct)
        {
            if (editedProduct.AvailableQuantity < 1)
                return false;

            var productToEdit = GetProductById(editedProduct.Id);
            if (productToEdit == null)
                return false;

            productToEdit.AvailableQuantity = editedProduct.AvailableQuantity;
            _context.SaveChanges();
            return true;
        }
        public List<string> GetProductTaxTypeEnumValues()
        {
            return Enum.GetNames(typeof(TaxType)).ToList();
        }
        private bool IsProductToAddValid(Product productToAdd)
        {
            return !DoesProductWithSameNameExist(productToAdd) && 
                   IsProductNameValid(productToAdd) &&
                   !DoesProductWithSameBarcodeExist(productToAdd) &&
                   IsProductBarcodeValid(productToAdd) &&
                   productToAdd.Price > 0 &&
                   productToAdd.AvailableQuantity >= 1;
        }
        private bool IsEditedProductValid(Product editedProduct)
        {
            return !DoesProductWithSameBarcodeExist(editedProduct) &&
                   IsProductBarcodeValid(editedProduct) &&
                   editedProduct.Price > 0;
        }
        private bool DoesProductWithSameNameExist(Product product)
        {
            return _context.Products.Any(p =>
                string.Equals(p.Name, product.Name, StringComparison.CurrentCultureIgnoreCase));
        }
        private bool DoesProductWithSameBarcodeExist(Product product)
        {
            return _context.Products.Any(p =>
                Equals(p.Barcode, product.Barcode) && p.Id != product.Id);
        }
        private static bool IsProductBarcodeValid(Product product)
        {
            return product.Barcode.All(char.IsDigit) && product.Barcode.Length == 13;
        }
        private static bool IsProductNameValid(Product product)
        {
            return !IsNullOrEmpty(product.Name) && product.Name.Length >= 3;
        }
        private static bool IsSearchValid(string search)
        {
            return !IsNullOrEmpty(search) && search.Length >= 3;
        }
    }
}
