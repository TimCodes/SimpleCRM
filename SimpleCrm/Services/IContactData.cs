using SimpleCrm.Models;
using System.Collections.Generic;

namespace SimpleCrm.Services
{
    public interface IContactData
    {
        Contact Create(Contact contact);
        IEnumerable<Contact> GetAll();
        Contact Get(int id);
        Contact Update(Contact contact);
        Contact Delete(int id);

    }
}
