using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PickUp.Api.Infrastructure.Attributes;
using PickUp.Api.Models;
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
    public class ReservationsController : ControllerBase
    {
        private IReservationsServices<ReservationsCustomer,ReservationUser> reservationsService;

        public ReservationsController(IReservationsServices<ReservationsCustomer,ReservationUser> res)
        {
            reservationsService = res;
        }
        [HttpGet("User/{id}")]

        public IActionResult GetReservation(int id)
        {
            try
            {
                return Ok(reservationsService.GetByCustomerId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("Pro/{id}")]

        public IActionResult GetReservationPro(int id)
        {
            try
            {
                return Ok(reservationsService.GetByUser(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("All/Pro/{id}")]

        public IActionResult GetAllByPro(int id)
        {
            try
            {
                return Ok(reservationsService.GetAllByUser(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpPost]
        [Route("PostReservation")]

        public IActionResult PostReservation([FromBody]ReservationsForm res)
        {
           if(ModelState.IsValid)
            {
                reservationsService.Insert(new ReservationUser(res.UserId, res.DateRes, res.HeureDeb, res.HeureFin, res.NumPersonne));
                return Ok();
                 
            }
            return BadRequest();
        }
        [AuthRequired]
        [HttpPost]
        [Route("PickReservation")]

        public IActionResult PostUserReservation([FromBody]PickReservationsForm res)
        {
            if (ModelState.IsValid)
            {
                reservationsService.InsertPick(new ReservationsCustomer(res.ReservationId, res.UserId, res.DateInput, res.NumPersonne));
                return Ok();
            }
            return BadRequest();
        }
        [AuthRequired]
        [HttpDelete]
        [Route("DeleteReservation")]

        public  IActionResult Delete ([FromBody]DeleteReservation d)
        {
            try
            {
              return Ok(reservationsService.Delete(d.reservationId,d.customerId));
            }catch (Exception e )
            {
                return BadRequest(e.Message);
            }
        }




    }
}
