﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCrm.Models
{
    public class Activity
    {
        public int id { get; set; }
        public int contactid { get; set; }
        public int repid { get; set; }
        public string   ActivityType {get;set;}
        public string   Status {get;set;}
        public DateTime LastModified { get; set; }
    }
}
