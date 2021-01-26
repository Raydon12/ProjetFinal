CREATE PROCEDURE [dbo].[Login]
	@Email nvarchar(320),
	@Password nvarchar(20)
AS
BEGIN
SELECT [CustomerId], [FirstName], [LastName],[PhoneNumber], [Email],[Image],PushNotificationToken
	FROM [Customer] 
	WHERE [Email] = @Email and [Password] = HASHBYTES('SHA2_512', dbo.GetPreHash() + @Password + dbo.GetPostHash());
END