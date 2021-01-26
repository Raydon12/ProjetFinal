using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal.Models
{
    public class User
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

        public User(int id, string name, string description, long phoneNumber, string adressStreet, int adressNum, string adressCity, int adresseZip, string logo, decimal latitude, decimal longitude, decimal rating)
        {
            UserId = id;
            UserName = name;
            Description = description;
            AdressStreet = adressStreet;
            AdressNum = adressNum;
            AdressCity = adressCity;
            AdresseZip = adresseZip;
            PhoneNumber = phoneNumber;
            Logo = logo;
            Latitude = latitude;
            Longitude = longitude;
            Rating = rating;
        }

        public User(string name, string email, string password, string description, string adressStreet, int adressNum, string adressCity, int adresseZip, long phoneNumber, string logo, decimal latitude, decimal longitude)
        {
            UserName = name;
            Email = email;
            Password = password;
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
        internal User(int id,string name, string email, string description, string adressStreet, int adressNum, string adressCity, int adresseZip, long phoneNumber, string logo, decimal latitude, decimal longitude)
            :this(name,email,null,description,adressStreet,adressNum,adressCity,adresseZip,phoneNumber,logo, latitude,longitude)
        {
            UserId = id;
        }
    }
}
