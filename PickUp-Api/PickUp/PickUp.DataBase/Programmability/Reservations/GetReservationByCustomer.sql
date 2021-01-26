CREATE PROCEDURE [dbo].[GetReservationByCustomer]
	@CustomerId int 

AS	
BEGIN
	SELECT PU.UserId, PU.[Name],R.DateRes,R.HeureDeb,R.HeureFin,PR.NumPersonne, R.ReservationId FROM Reservation R , PickReservation PR, [User] PU
	WHERE R.UserId = PU.UserId and 
		R.ReservationId = PR.ReservationId and 
		PR.CustomerId = @CustomerId
		ORDER BY R.DateRes,R.HeureDeb,R.HeureFin
END