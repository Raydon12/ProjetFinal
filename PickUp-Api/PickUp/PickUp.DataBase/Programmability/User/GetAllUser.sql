CREATE PROCEDURE [dbo].[GetAllUser]
AS
BEGIN
	SELECT R.UserId, R.[Name], R.[Description],R.PhoneNum, R.AdressStreet, R.AdressNum,R.AdressCity,R.AdresseZip,R.[Logo],R.Latitude,R.Longitude,R.Rating
	FROM [User] R 
END

