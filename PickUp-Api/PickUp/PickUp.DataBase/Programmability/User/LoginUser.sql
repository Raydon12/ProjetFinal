CREATE PROCEDURE [dbo].[LoginUser]
	@Email nvarchar(320),
	@Password nvarchar(20)
AS
BEGIN
SELECT [UserId],[Name],Email,[Description],[AdressStreet],[AdressNum],[AdressCity],[AdresseZip],[PhoneNum],[Logo],[Latitude],[Longitude]
	FROM [User] 
	WHERE [Email] = @Email and [Password] = HASHBYTES('SHA2_512', dbo.GetPreHash() + @Password + dbo.GetPostHash());
END