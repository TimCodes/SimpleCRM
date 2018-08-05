using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SimpleCrm.Models;

namespace SimpleCrm.Services
{
    public class InMemoryProductData : IProductData
    {
        List<Product> _products;

        public InMemoryProductData()
        {
            _products = new List<Product> {
                new Product {id = 1, ProductName = "Echo Teleporter"},
                new Product {id = 2, ProductName = "Echo Teleporter Pro"},
                new Product {id = 3, ProductName = "Ehco Thermal Monitor"}
            };
        }

        public Product Create(Product product)
        {
            _products.Add(product);
            return product;
        }

        public void Delete(int id)
        {
            var productIndex = _products.FindIndex(p => p.id == id);
            _products.RemoveAt(productIndex);
        }

        public Product Get(int id)
        {
            return _products.Where(p => p.id == id).FirstOrDefault();
        }

        public IEnumerable<Product> GetAll()
        {
            return _products.OrderBy(p => p.ProductName);
        }

        public Product Update(Product product)
        {
            var productIndex = _products.FindIndex(p => p.id == product.id);
            _products.RemoveAt(productIndex);
            _products.Insert(productIndex, product);
            return product;

        }
    }
}
