CREATE PROCEDURE [dbo].[GetUserByCategory]
	@idCategory int

	AS
	BEGIN

	SELECT R.UserId, R.[Name], R.[Description],R.PhoneNum, R.AdressStreet, R.AdressNum,R.AdressCity,R.AdresseZip,R.[Logo],R.Latitude,R.Longitude,R.Rating FROM [User] R , Category C , CategoryDetail CD  
	WHERE R.UserId = C.UserId and
	c.CategoryDetailId = cd.CategoryDetailId
	and CD.CategoryDetailId = @idCategory

	END