using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal.Interfaces
{
    public interface ICustomerServices<TEntity>
    {
        void Register(TEntity entity);
        TEntity Login(string email, string password);
        bool Update(TEntity entity);

    }
}
