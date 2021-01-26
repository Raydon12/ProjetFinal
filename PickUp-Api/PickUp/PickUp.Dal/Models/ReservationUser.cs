using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal.Models
{
    public class ReservationUser
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public DateTime DateRes { get; set; }
        public DateTime HeureDeb { get; set; }
        public DateTime HeureFin { get; set; }
        public int NombrePlaceAvalaible { get; set; }
        public int NombrePlaceReserved { get; set; }

        public ReservationUser(int id, DateTime dateRes, DateTime heureDeb, DateTime heureFin, int NombrePlaceAvalaibl, int nombrePlaceReserve)
        {
            Id = id;
    
            DateRes = dateRes;
            HeureDeb = heureDeb;
            HeureFin = heureFin;
            NombrePlaceAvalaible = NombrePlaceAvalaibl;
            NombrePlaceReserved = nombrePlaceReserve;
        }

        public ReservationUser(int userId, DateTime dateRes, DateTime heureDeb, DateTime heureFin, int NombrePlaceAvalaibl)
        {
            UserId = userId;
            DateRes = dateRes;
            HeureDeb = heureDeb;
            HeureFin = heureFin;
            NombrePlaceAvalaible = NombrePlaceAvalaibl;
        }
        public ReservationUser(int userId,string name,DateTime dateRes,DateTime heureDeb,DateTime heureFin,int numPersonne)
        {
            UserId = userId;
            name = Name;
            dateRes = DateRes;
            heureDeb = HeureDeb;
            heureFin = HeureFin;
            numPersonne = NombrePlaceReserved;
        }
            
    }
}
