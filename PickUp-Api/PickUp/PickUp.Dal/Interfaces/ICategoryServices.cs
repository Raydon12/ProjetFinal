using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal.Interfaces
{
   public interface ICategoryServices<Category>
    {
        IEnumerable<Category> GetAll();


    }
}
