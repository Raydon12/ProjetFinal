using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Models
{
    public class RegisterUserForm
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Description { get; set; }
        public string AdressStreet { get; set; }
        public int AdressNum { get; set; }
        public string AdressCity { get; set; }
        public int AdresseZip { get; set; }
        public long PhoneNumber { get; set; }
        public string Logo { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public decimal Rating { get; set; }
        public string[] Category { get; set; }
        public string Token { get; set; }
    }
}
