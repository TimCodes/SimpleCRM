using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCrm.Models
{
    public class Opportunity
    {
        public int id { get; set; }
        public int contactid { get; set; }
        public int lastrepid { get; set; }
        public DateTime LastContact {get; set;}
        public string   Status {get;set;}
    }
}
