using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCrm.ViewModels
{
    public class SalesRepActivityViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string ActivityType { get; set; }
        public string Status { get; set; }
        public DateTime LastModified { get; set; }

    }
}
