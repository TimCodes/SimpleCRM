﻿using System;
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
            throw new NotImplementedException();
        }

        public Product Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Product Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetAll()
        {
            return _products.OrderBy(p => p.ProductName);
        }

        public Product Update(Product product)
        {
            throw new NotImplementedException();
        }
    }
}
