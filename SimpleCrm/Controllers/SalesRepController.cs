using Microsoft.AspNetCore.Mvc;
using SimpleCrm.Models;
using SimpleCrm.Services;

namespace SimpleCrm.Controllers
{
    public class SalesRepController : Controller
    {
        private IProductData _productData;

        public SalesRepController(IProductData productData)
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
        public IActionResult Contacts()
        {
            var model = _productData.GetAll();
            //new Product { id = 1, ProductName = "Cheese" };
            //new ObjectResult(model);
            return View(model);
        }
        public IActionResult Leads()
        {
            var model = _productData.GetAll();
            //new Product { id = 1, ProductName = "Cheese" };
            //new ObjectResult(model);
            return View(model);
        }
        public IActionResult Opportunities()
        {
            var model = _productData.GetAll();
            //new Product { id = 1, ProductName = "Cheese" };
            //new ObjectResult(model);
            return View(model);
        }
        public IActionResult Activities()
        {
            var model = _productData.GetAll();
            //new Product { id = 1, ProductName = "Cheese" };
            //new ObjectResult(model);
            return View(model);
        }
    }
}
