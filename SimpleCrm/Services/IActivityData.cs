using SimpleCrm.Models;
using System.Collections.Generic;

namespace SimpleCrm.Services
{
    public interface IActivityData
    {
        Activity Create(Activity activity);
        IEnumerable<Activity> GetAll();
        Activity Get(int id);
        Activity Update(Activity activity);
        Activity Delete(int id);

    }
}
