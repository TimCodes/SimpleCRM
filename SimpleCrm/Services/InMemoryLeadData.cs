using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SimpleCrm.Models;

namespace SimpleCrm.Services
{
    public class InMemoryLeadData : ILeadData
    {
        List<Lead> _Leads;

        public InMemoryLeadData()
        {
            _Leads = new List<Lead> {
                new Lead {id = 1, contactid = "1", lastrepid = "1", LastContact = "8/18/2017", Status = "Initial Call"},
                new Lead {id = 2, contactid = "2", lastrepid = "2", LastContact = "7/23/2018", Status = "Follow Up Call"},
                new Lead {id = 3, contactid = "3", lastrepid = "1", LastContact = "5/12/2018", Status = "Initial Call"},
                new Lead {id = 4, contactid = "4", lastrepid = "1", LastContact = "5/12/2018", Status = "Initial Call"},
                new Lead {id = 5, contactid = "5", lastrepid = "1", LastContact = "3/2/2018", Status = "Converting To Opportunity"}
            };
        }

        public Lead Create(Lead lead)
        {
            _Leads.Add(lead);
            return lead;
        }

        public void Delete(int id)
        {
            var LeadIndex = _Leads.FindIndex(l => l.id == id);
            _Leads.RemoveAt(LeadIndex);
        }

        public Lead Get(int id)
        {
            return _Leads.Where(l => l.id == id).FirstOrDefault();
        }

        public IEnumerable<Lead> GetAll()
        {
            return _Leads.OrderBy( l=> l.Status).ToList();
        }

        public Lead Update(Lead Lead)
        {
            var LeadIndex = _Leads.FindIndex(l => l.id == Lead.id);
            _Leads.RemoveAt(LeadIndex);
            _Leads.Insert(LeadIndex, Lead);
            return Lead;

        }
    }
}
