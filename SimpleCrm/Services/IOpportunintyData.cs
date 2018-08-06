using SimpleCrm.Models;
using System.Collections.Generic;

namespace SimpleCrm.Services
{
    public interface IOpportunityData
    {
        Opportunity Create(Opportunity opportunity);
        IEnumerable<Opportunity> GetAll();
        Opportunity Get(int id);
        Opportunity Update(Opportunity opportunity);
        void Delete(int id);

    }
}
