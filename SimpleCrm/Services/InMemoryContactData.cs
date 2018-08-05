using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SimpleCrm.Models;

namespace SimpleCrm.Services
{
    public class InMemoryContactData : IContactData
    {
        List<Contact> _contacts;

        public InMemoryContactData()
        {
            _contacts = new List<Contact> {
               new Contact {
                   id = 1,
                   Title = "Honorable",
                   FirstName = "Shep",
                   LastName = "Boyall",
                   Address = "2 Erie Road",
                   City  = "Irvine",
                   State = "California",
                   ZipCode=  "85401",
                   Phone = "714-239-3305",
                   Email = "sboyall0@ibm.com",
                   ReferralSource = "Meembee"
                },
                 new Contact {
                  id = 2,
                 Title = "Ms",
                 FirstName = "Taddeo",
                 LastName = "Emmer",
                 Address = "5515 Farmco Road",
                 City  = "Oxnard",
                 State = "California",
                 ZipCode = "84021",
                 Phone = "805-797-3736",
                 Email = "temmer1@baidu.com",
                 ReferralSource = "Kwilith",
                },
                 new Contact
                 {
                    id = 3,
                    Title = "Rev",
                    FirstName = "Hermy",
                    LastName = "Orneblow",
                    Address = "047 Crownhardt Court",
                    City = "Columbus",
                    State = "Ohio",
                    ZipCode = "84021",
                    Phone = "513-118-7772",
                    Email = "horneblow2@posterous.com",
                    ReferralSource = "Kazu"

                 },
                 new Contact {
                    id = 4,
                    Title = "Mr",
                    FirstName = "Magdalen",
                    LastName = "Pee",
                    Address = "1 Eliot Point",
                    City = "Charleston",
                    State = "West Virginia",
                    ZipCode = "45212",
                    Phone = "304-867-2200",
                    Email = "mpee3@addtoany.com",
                    ReferralSource = "Twitternation"

                 },
                 new Contact {
                     id = 5,
                    Title = "Ms",
                    FirstName = "Hamlen",
                    LastName = "Rolfs",
                    Address = "03 Barby Park",
                    City = "Tacoma",
                    State = "Washington",
                    ZipCode = "84012",
                    Phone = "253-339-9879",
                    Email = "hrolfs4@discovery.com",
                    ReferralSource = "Dazzlesphere",

                 }


            };
        }

        public Contact Create(Contact contact)
        {
            _contacts.Add(contact);
            return contact;
        }

        public void Delete(int id)
        {
            var ContactIndex = _contacts.FindIndex(a => a.id == id);
            _contacts.RemoveAt(ContactIndex);
        }

        public Contact Get(int id)
        {
            return _contacts.Where(c => c.id == id).FirstOrDefault();
        }

        public IEnumerable<Contact> GetAll()
        {
            return _contacts.OrderBy(c => c.FirstName);
        }

        public Contact Update(Contact contact)
        {
            var ContactIndex = _contacts.FindIndex(c => c.id == contact.id);
            _contacts.RemoveAt(ContactIndex);
            _contacts.Insert(ContactIndex, contact);
            return contact;

        }
    }
}

