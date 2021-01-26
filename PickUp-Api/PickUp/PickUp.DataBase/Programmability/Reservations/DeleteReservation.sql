CREATE PROCEDURE [dbo].[DeleteReservation]
	@ReservationId int 
AS
	BEGIN 
	DElete FROM Reservation
	where ReservationId = @ReservationId
	END
