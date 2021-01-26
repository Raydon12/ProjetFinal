CREATE PROCEDURE [dbo].[GetReservationByUser]
@User int
AS
BEGIN
	SELECT U.LastName,U.FirstName,U.Email,U.PhoneNumber, R.DateRes, R.HeureDeb,R.HeureFin,PR.NumPersonne,PR.DateInput
	FROM Reservation R, PickReservation PR , [Customer] U
	WHERE R.ReservationId = PR.ReservationId
	and U.CustomerId = PR.CustomerId
	and R.UserId = @User
	ORDER BY R.DateRes,R.HeureDeb,R.HeureFin
END