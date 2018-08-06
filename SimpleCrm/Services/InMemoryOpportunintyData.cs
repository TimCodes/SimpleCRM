using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SimpleCrm.Models;

namespace SimpleCrm.Services
{
    public class InMemoryOpportunityData : IOpportunityData
    {
        List<Opportunity> _Opportunitys;

        public InMemoryOpportunityData()
        {
            _Opportunitys = new List<Opportunity> {
                new Opportunity {id = 1, contactid = 1, lastrepid = 1, LastContact = DateTime.Now, Status = "Finalizing Sale"},
                new Opportunity {id = 2, contactid = 2, lastrepid = 2, LastContact = DateTime.Now, Status = "Requesting Meeting"}
            };
        }

        public Opportunity Create(Opportunity Opportunity)
        {
            _Opportunitys.Add(Opportunity);
            return Opportunity;
        }

        public void Delete(int id)
        {
            var OpportunityIndex = _Opportunitys.FindIndex(l => l.id == id);
            _Opportunitys.RemoveAt(OpportunityIndex);
        }

        public Opportunity Get(int id)
        {
            return _Opportunitys.Where(l => l.id == id).FirstOrDefault();
        }

        public IEnumerable<Opportunity> GetAll()
        {
            return _Opportunitys.OrderBy( l=> l.Status).ToList();
        }

        public Opportunity Update(Opportunity Opportunity)
        {
            var OpportunityIndex = _Opportunitys.FindIndex(l => l.id == Opportunity.id);
            _Opportunitys.RemoveAt(OpportunityIndex);
            _Opportunitys.Insert(OpportunityIndex, Opportunity);
            return Opportunity;

        }
    }
}
