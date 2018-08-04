using SimpleCrm.Models;
using System.Collections.Generic;

namespace SimpleCrm.Services
{
    public interface ILeadData
    {
        Lead Create(Lead lead);
        IEnumerable<Lead> GetAll();
        Lead Get(int id);
        Lead Update(Lead lead);
        Lead Delete(int id);

    }
}
