using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Models
{
    public class ApiUser
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
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

        public ApiUser(User user)
        {
            UserId = user.UserId;
            UserName = user.UserName;
            Description = user.Description;
            AdressStreet = user.AdressStreet;
            AdressNum = user.AdressNum;
            AdressCity = user.AdressCity;
            AdresseZip = user.AdresseZip;
            PhoneNumber = user.PhoneNumber;
            Logo = user.Logo;
            Latitude = user.Latitude;
            Longitude = user.Longitude;
           
        }
        public ApiUser(int id, string name, string email, string description, string adressStreet, int adressNum, string adressCity, int adresseZip,  long phoneNumber,string logo, decimal latitude, decimal longitude)
        {
            UserId = id;
            UserName = name;
            Email = email;
            Description = description;
            AdressStreet = adressStreet;
            AdressNum = adressNum;
            AdressCity = adressCity;
            AdresseZip = adresseZip;
            PhoneNumber = phoneNumber;
            Logo = logo;
            Latitude = latitude;
            Longitude = longitude;
      
        }
    }
}
