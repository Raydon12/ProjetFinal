CREATE PROCEDURE [dbo].[GetAllEvent]
AS
BEGIN
	SELECT ED.EventId,R.UserId,R.[Name], ED.[Description],R.Logo,R.Rating FROM [Event] E , [User] R,EvenementDetail ED
	WHERE R.UserId = E.UserId AND
	ED.EventId = E.EventId 
END