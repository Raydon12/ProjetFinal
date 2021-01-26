CREATE PROCEDURE [dbo].[PostReservations]
	@UserId int,
	@DateRes DateTime,
	@HeureDeb DATETIME,
	@HeureFin DATETIME,
	@NumPersonne int,
	@NombrePlace int 
AS

BEGIN
	Insert INTO Reservation
	Values (@UserId,@DateRes,@HeureDeb,@HeureFin,@NumPersonne,0)


END