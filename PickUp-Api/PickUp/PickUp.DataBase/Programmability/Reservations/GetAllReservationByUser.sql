CREATE PROCEDURE [dbo].[GetAllReservationByUser]
@ProUserId int 
AS
BEGIN
	SELECT  R.ReservationId,R.UserId, R.DateRes, R.HeureDeb, R.HeureFin, R.NombrePlaceAvalaible, R.NombrePlaceReserved
    FROM Reservation R 
    WHERE R.UserId = @ProUserId
    AND R.DateRes BETWEEN GETDATE() -1
    AND DATEADD(wk, DATEDIFF(wk, 0, GETDATE()) +2, +5)
    AND R.NombrePlaceAvalaible > R.NombrePlaceReserved
    EXCEPT 
    SELECT R.ReservationId, R.UserId, R.DateRes, R.HeureDeb, R.HeureFin, R.NombrePlaceAvalaible, R.NombrePlaceReserved
    FROM Reservation R
    WHERE R.UserId = @ProUserId
    AND CONVERT(varchar, HeureFin, 8) < CONVERT(varchar,GETDATE(), 8) 
    AND CONVERT(varchar,DateRes, 101) = CONVERT(varchar, GETDATE(), 101)
    ORDER BY R.DateRes,R.HeureDeb,R.HeureFin
END