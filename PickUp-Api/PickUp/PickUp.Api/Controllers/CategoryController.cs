using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PickUp.Dal.Interfaces;
using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Mypolicy")]
    public class CategoryController : ControllerBase
    {
        private ICategoryServices<Category> _category;

        public CategoryController(ICategoryServices<Category> category)
        {
            _category = category;
        }
        [HttpGet]

        public IActionResult GetAll()
        {
            try
            {
                return Ok(_category.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
