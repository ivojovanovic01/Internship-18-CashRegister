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
        public List<Product> GetAllProducts()
        {
            return _context.Products.ToList();
        }

        public bool AddProduct(Product productToAdd)
        {
            var doesProductWithSameNameExist = _context.Products.Any(product =>
                String.Equals(product.Name, productToAdd.Name, StringComparison.CurrentCultureIgnoreCase));

            var doesProductWithSameBarcodeExist = _context.Products.Any(product =>
                String.Equals(product.Barcode, productToAdd.Barcode));

            if (doesProductWithSameNameExist || productToAdd.Name.Length < 3 || productToAdd.AvailableQuantity < 1 || doesProductWithSameBarcodeExist || productToAdd.Barcode.Length != 13 || productToAdd.Price <= 0.0 || productToAdd.AvailableQuantity < 1)
                return false;

            _context.Products.Add(productToAdd);
            _context.SaveChanges();

            return true;
        }

        public bool EditProduct(Product editedProduct)
        {
            var doesProductWithSameBarcodeExist = _context.Products.Any(product =>
                Equals(product.Barcode, editedProduct.Barcode) && editedProduct.Id != product.Id);

            if (editedProduct.Barcode.Length != 13 && doesProductWithSameBarcodeExist || editedProduct.AvailableQuantity < 1)
                return false;

            var productToEdit = _context.Products.Find(editedProduct.Id);
            if (productToEdit == null)
                return false;

            productToEdit.Price = editedProduct.Price;
            productToEdit.TaxType = editedProduct.TaxType;
            productToEdit.Barcode = editedProduct.Barcode;

            _context.SaveChanges();

            return true;
        }

        public Product GetProductById(int id)
        {
            var productWithThatId = _context.Products.Find(id);
            return productWithThatId;
        }

        public List<Product> GetSearchedProducts(string search)
        {
            if(IsNullOrEmpty(search))
                return new List<Product>();

            return _context.Products.Where(product =>
                product.Name
                    .Contains(search, StringComparison.OrdinalIgnoreCase) || product.Barcode.Contains(search))
                .ToList();
        }
    }
}
