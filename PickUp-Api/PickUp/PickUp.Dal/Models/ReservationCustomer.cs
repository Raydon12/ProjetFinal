using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal.Models
{
    public class ReservationsCustomer
    {
        public int ReservationId { get; set; }
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        public long PhoneNumber { get; set; }
        public DateTime HeureDeb { get; set; }
        public DateTime HeureFin { get; set; }
        public DateTime DateInput { get; set; }
        public DateTime DateRes { get; set; }
        public int NumPersonne { get; set; }

        public ReservationsCustomer(int reservationId, int userId, DateTime dateInput, int numPersonne)
        {
            ReservationId = reservationId;
            CustomerId = userId;
            DateInput = dateInput;
            NumPersonne = numPersonne;
        }

        public ReservationsCustomer( int customerId, string name, DateTime heureDeb, DateTime heureFin, DateTime dateRes, int numPersonne,int reservationId)
        {
          
            CustomerId = customerId;
            Name = name;
            DateRes = dateRes;
            HeureDeb = heureDeb;
            HeureFin = heureFin;
            ReservationId = reservationId;
            
            NumPersonne = numPersonne;
        }

        public ReservationsCustomer(string lastName, string firstName, string email, long phoneNumber,DateTime dateRes, DateTime heureDeb, DateTime heureFin,int numPersonne, DateTime dateInput  )
        {
            LastName = lastName;
            FirstName = firstName;
            Email = email;
            PhoneNumber = phoneNumber;
            HeureDeb = heureDeb;
            HeureFin = heureFin;
            DateInput = dateInput;
            DateRes = dateRes;
            NumPersonne = numPersonne;
        }
    }
}
