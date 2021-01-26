CREATE PROCEDURE [dbo].[DeletePickReservation]
	@ReservationId int ,
	@CustomerId int
AS
BEGIN
  DECLARE  @ResDate Date , @heureDeb DateTime
	Select @ResDate = DateRes , @heureDeb = HeureDeb from Reservation 
	where ReservationId = @ReservationId
	BEGIN
	if (GETDATE()+1 < @heureDeb  )
	DELETE FROM PickReservation 
	WHERE ReservationId = @ReservationId
	and CustomerId = @CustomerId
END
END
	

