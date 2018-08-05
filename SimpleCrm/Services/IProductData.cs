using SimpleCrm.Models;
using System.Collections.Generic;

namespace SimpleCrm.Services
{
    public interface IProductData
    {
        Product Create(Product product);
        IEnumerable<Product> GetAll();
        Product Get(int id);
        Product Update(Product product);
        void Delete(int id);

    }
}
