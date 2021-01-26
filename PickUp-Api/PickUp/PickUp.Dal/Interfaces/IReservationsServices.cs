using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal.Interfaces
{
    public interface IReservationsServices<TEntity,Tentity1>
    {
        
        IEnumerable<TEntity> GetByCustomerId(int key);
        IEnumerable<TEntity> GetByUser(int ProUserId);
        int Insert(Tentity1 entity);
        IEnumerable<Tentity1> GetAllByUser(int proUser);
        int InsertPick(TEntity entity1);

        int Delete(int reservationId,int customerId);
   

    }
}
