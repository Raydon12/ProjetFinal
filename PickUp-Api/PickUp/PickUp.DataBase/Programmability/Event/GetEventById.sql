CREATE PROCEDURE [dbo].[GetEventById]
	@EventId int 

AS
BEGIN
	SELECT ED.EventId,ED.[Name],ED.[Description] FROM EvenementDetail ED 
	WHERE EventId = @EventId
	END