using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal.Interfaces
{
   public interface IUserServices<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity GetById(int key);
        IEnumerable<TEntity> GetByCategoryId(int key);
        IEnumerable<TEntity> GetAllProNow();
        void Register(TEntity entity);
        TEntity Login(string email, string password);
    }
}
