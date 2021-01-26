using AdoLibrary;
using PickUp.Dal.Interfaces;
using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace PickUp.Dal.Services
{
   public class ReservationsServices:IReservationsServices<ReservationsCustomer,ReservationUser>

    {
        private readonly IConnection connection;

        public ReservationsServices(IConnection con)
        {
            connection = con;
        }
        private ReservationUser Converter(SqlDataReader reader)
        {
            return new ReservationUser(
                (int)reader["ReservationId"],
                (DateTime)reader["DateRes"],
                (DateTime)reader["HeureDeb"],
                (DateTime)reader["HeureFin"],
                (int)reader["NombrePlaceAvalaible"],
                (int)reader["NombrePlaceReserved"]
                );
        }
        private ReservationsCustomer Converter1(SqlDataReader reader)
        {
                return new ReservationsCustomer(
                reader["LastName"].ToString(),
                reader["FirstName"].ToString(),
                reader["Email"].ToString(),
                (long)reader["PhoneNumber"],
                (DateTime)reader["DateRes"],
                (DateTime)reader["HeureDeb"],
                (DateTime)reader["HeureFin"],
                (int)reader["NumPersonne"],
                (DateTime)reader["DateInput"]
                );
        }
        private ReservationsCustomer CustomerConvert(SqlDataReader sr)
        {
            return new ReservationsCustomer(
                
               (int)sr["userId"],
               sr["Name"].ToString(),
               (DateTime)sr["DateRes"],
               (DateTime)sr["HeureFin"],
               (DateTime)sr["HeureFin"],
               (int)sr["NumPersonne"],
               (int)sr["ReservationId"]
               );
        }
        public IEnumerable<ReservationUser> GetAllByUser(int proUser)
        {
            Command cmd = new Command("GetAllReservationByUser", true);
            cmd.AddParameter("ProUserId", proUser);
            return connection.ExecuteReader<ReservationUser>(cmd, Converter);
        }
        

        public IEnumerable<ReservationsCustomer> GetByCustomerId(int key)
        {
            Command cmd = new Command("GetReservationByCustomer", true);
            cmd.AddParameter("CustomerId", key);
            return connection.ExecuteReader<ReservationsCustomer>(cmd, CustomerConvert);
        }


        public IEnumerable<ReservationsCustomer> GetByUser(int ProUserId)
        {
            Command cmd = new Command("GetReservationByUser", true);
            cmd.AddParameter("User", ProUserId);
            return connection.ExecuteReader<ReservationsCustomer>(cmd, Converter1);
        }

        public int Insert(ReservationUser entity)
        {
            Command cmd = new Command("PostReservations", true);
            cmd.AddParameter("UserId", entity.UserId);
            cmd.AddParameter("DateRes", entity.DateRes);
            cmd.AddParameter("HeureDeb", entity.HeureDeb);
            cmd.AddParameter("HeureFin", entity.HeureFin);
            cmd.AddParameter("NumPersonne", entity.NombrePlaceAvalaible);
            cmd.AddParameter("NombrePlace", entity.NombrePlaceReserved);
            
            return connection.ExecuteNonQuery(cmd);
        }

        public int InsertPick(ReservationsCustomer entity1)
        {//A changer par un reservation customer et verifier les modeles de ceux ci !!!!! Tant que c'est pas supprimé c'est valide
            Command cmd = new Command("PostPickReservations", true);
            cmd.AddParameter("ReservationId", entity1.ReservationId);
            cmd.AddParameter("CustomerId", entity1.CustomerId);
            cmd.AddParameter("DateInput", entity1.DateInput);
            cmd.AddParameter("NumPersonne", entity1.NumPersonne);
            return connection.ExecuteNonQuery(cmd);
        }

        public int Delete (int reservationId,int customerId)
        {
            Command cmd = new Command("DeletePickReservation", true);
            cmd.AddParameter("ReservationId",reservationId);
            cmd.AddParameter("CustomerId", customerId);
            return connection.ExecuteNonQuery(cmd);
        }

    }
}
