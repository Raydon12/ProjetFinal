using PickUp.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Models
{
    public class ApiCustomer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string Image { get; set; }

        public ApiCustomer(int customerId,string firstName, string lastName, long phoneNumber, string email, string image)
        {
            CustomerId = customerId;
            FirstName = firstName;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            Email = email;
            Image = image;
        }
       public ApiCustomer(Customer customer)
        {
            CustomerId = customer.CustomerId;
            LastName = customer.LastName;
            FirstName = customer.FirstName;
            PhoneNumber = customer.PhoneNumber;
            Email = customer.Email;
            Image = customer.Image;

        }
    }
}
