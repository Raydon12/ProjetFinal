using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Image { get; set; }
        public string PushNotificationsToken { get; set; }

        public Customer(string firstName, string lastName, long phoneNumber, string email, string password, string image,string pushNotificationsToken)
        {
            FirstName = firstName;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            Email = email;
            Password = password;
            Image = image;
            PushNotificationsToken = pushNotificationsToken;
        }
        internal Customer(int customerId, string firstName, string lastName, long phoneNumber, string email, string image,string pushNotificationsToken) :this( firstName,lastName,phoneNumber,email,null,image,pushNotificationsToken)
        {
            CustomerId = customerId;
        }
    }
}
