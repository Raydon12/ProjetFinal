CREATE PROCEDURE [dbo].[GetAllUserNow]
AS
BEGIN
	SELECT P.UserId, P.[Name], P.[Description], 
    P.PhoneNum, P.AdressStreet, P.AdressNum,
    P.AdressCity, P.AdresseZip, P.[Logo], 
    P.Latitude, P.Longitude, P.Rating
    FROM [User] P
    WHERE P.UserId in ( SELECT R.UserId
                            FROM Reservation R
                            WHERE  CONVERT(varchar,GETDATE(), 8)
                            BETWEEN CONVERT(varchar, HeureDeb, 8) AND CONVERT(varchar, HeureFin, 8) 
                            AND CONVERT(varchar,DateRes, 101) = CONVERT(varchar, GETDATE(), 101))
END