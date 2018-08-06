using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SimpleCrm.Models;

namespace SimpleCrm.Services
{
    public class InMemoryActivityData : IActivityData
    {
        List<Activity> _activities;

        public InMemoryActivityData()
        {
            _activities = new List<Activity> {
               new Activity {id = 1, ActivityType = "Call", contactid = 1, repid = 1, LastModified =  DateTime.Now, Status = "Completed"},
               new Activity {id = 2, ActivityType = "Call", contactid = 2, repid = 1, LastModified =  DateTime.Now, Status = "Not Started"},
               new Activity {id = 3, ActivityType = "Call", contactid = 3, repid = 1, LastModified =  DateTime.Now, Status = "In Progress"},
               new Activity {id = 4, ActivityType = "Call", contactid = 4, repid = 1, LastModified =  DateTime.Now, Status = "Completed"},
               new Activity {id = 5, ActivityType = "Call", contactid = 5, repid = 1, LastModified =  DateTime.Now, Status = "Not Started"},
            };
        }

        public Activity Create(Activity activity)
        {
            _activities.Add(activity);
            return activity;
        }

        public void Delete(int id)
        {
            var activityIndex = _activities.FindIndex(a => a.id == id);
            _activities.RemoveAt(activityIndex);
        }

        public Activity Get(int id)
        {
            return _activities.Where(p => p.id == id).FirstOrDefault();
        }

        public IEnumerable<Activity> GetAll()
        {
            return _activities.OrderBy(a => a.ActivityType).ToList();
        }

        public Activity Update(Activity activity)
        {
            var activityIndex = _activities.FindIndex(p => p.id == activity.id);
            _activities.RemoveAt(activityIndex);
            _activities.Insert(activityIndex, activity);
            return activity;

        }
    }
}
