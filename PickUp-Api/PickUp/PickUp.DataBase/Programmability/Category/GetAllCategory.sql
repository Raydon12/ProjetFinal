CREATE PROCEDURE [dbo].[GetAllCategory]
	
AS
BEGIN
	SELECT CategoryDetailId, CategoryName FROM CategoryDetail
END
