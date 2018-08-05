using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCrm.Models
{
    public class Lead
    {
        public int id { get; set; }
        public string contactid { get; set; }
        public string lastrepid { get; set; }
        public string LastContact {get; set;}
        public string   Status {get;set;}

    }
}
