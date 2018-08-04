using SimpleCrm.Models;
using System.Collections.Generic;

namespace SimpleCrm.Services
{
    public interface IUserData
    {
        User Create(User user);
        IEnumerable<User> GetAll();
        User Get(int id);
        User Update(User user);
        User Delete(int id);

    }
}
