using Microsoft.AspNetCore.Mvc;
using SimpleCrm.Models;
using SimpleCrm.Services;

namespace SimpleCrm.Controllers
{
    public class SalesManagerController : Controller
    {
        private IProductData _productData;

        public SalesManagerController(IProductData productData)
        {
            _productData = productData;
        }
        public IActionResult Index()
        {
            var model = _productData.GetAll();
            //new Product { id = 1, ProductName = "Cheese" };
            //new ObjectResult(model);
            return View(model);
        }
        public IActionResult Test()
        {
            var model = _productData.GetAll();
            //new Product { id = 1, ProductName = "Cheese" };
            //new ObjectResult(model);
            return View(model);
        }
    }
}
