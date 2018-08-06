using Microsoft.AspNetCore.Mvc;
using System.Linq;
using SimpleCrm.Models;
using SimpleCrm.Services;
using System.Collections.Generic;
using System;
using SimpleCrm.ViewModels;

namespace SimpleCrm.Controllers
{
    public class SalesRepController : Controller
    {
        private  IActivityData _activitytData;
        private  IContactData _contactData;
        private ILeadData _leadData;
        private IOpportunityData _opportunityData;

        public SalesRepController(IActivityData activitytData, IContactData contactData, ILeadData leadData, IOpportunityData opportunityData)
        {
            _activitytData = activitytData;
            _contactData = contactData;
            _leadData = leadData;
            _opportunityData = opportunityData;
        }
        public IActionResult Index()
        {
            var model = _activitytData.GetAll();
            return View(model);
        }
        public IActionResult Contacts()
        {
            var model = _contactData.GetAll();
            return View(model);
        }
        public IActionResult Opportunities()
        {
            IEnumerable<Opportunity> opportunities = _opportunityData.GetAll();
            IEnumerable<Contact> contacts = _contactData.GetAll();
           
            var model = opportunities.Join(
              contacts,
              o =>  o.contactid,
              c => c.id,
              (opportunity, contact) => new SalesRepOpportunityViewModel
              {
                  FirstName = contact.FirstName,
                  LastName = contact.LastName,
                  Phone = contact.Phone,
                  Email = contact.Email,
                  Status = opportunity.Status,
                  LastContact = opportunity.LastContact
              }
           ).ToList();
           return View(model);
        }
        public IActionResult Leads()
        {
            IEnumerable<Lead> leads = _leadData.GetAll();
            IEnumerable<Contact> contacts = _contactData.GetAll();

            var model = leads.Join(
              contacts,
              a =>  Int32.Parse(a.contactid),
              c => c.id,
              (lead, contact) => new SalesRepLeadViewModel
              {
                  FirstName = contact.FirstName,
                  LastName = contact.LastName,
                  Phone = contact.Phone,
                  Email = contact.Email,
                  ReferralSource = contact.ReferralSource,
                  Status = lead.Status,
                  LastContact = lead.LastContact
              }
           ).ToList();
            return View(model);
        }
        public IActionResult Activities()
        {
            IEnumerable<Activity> activities = _activitytData.GetAll();
            IEnumerable<Contact> contacts = _contactData.GetAll();

            var model = activities.Join(
             contacts,
             a => a.contactid,
             c => c.id,
             (activity, contact) => new SalesRepActivityViewModel
             {
                 FirstName = contact.FirstName,
                 LastName = contact.LastName,
                 Phone = contact.Phone,
                 ActivityType = activity.ActivityType,
                 Status = activity.Status,
                 LastModified = activity.LastModified
             }
          ).ToList();

            return View(model);
        }
    }
}
