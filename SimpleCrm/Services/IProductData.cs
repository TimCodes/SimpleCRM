using SimpleCrm.Models;
using System.Collections.Generic;

namespace SimpleCrm.Services
{
    public interface IProductData
    {
        IEnumerable<Product> GetAll();
    }
}
