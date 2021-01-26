CREATE PROCEDURE [dbo].[GetUserById]
	@RestoId int 
AS
	BEGIN
	SELECT R.UserId, R.[Name], R.[Description],R.PhoneNum, R.AdressStreet, R.AdressNum,R.AdressCity,R.AdresseZip,R.[Logo],R.Latitude,R.Longitude,R.Rating
	FROM [User] R 
	WHERE  R.UserId = @RestoId
	END

