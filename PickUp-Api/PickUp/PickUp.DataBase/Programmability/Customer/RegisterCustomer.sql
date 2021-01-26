CREATE PROCEDURE [dbo].[RegisterCustomer]
	@FirstName NVARCHAR(75),
	@LastName NVARCHAR(75),
	@PhoneNumber BIGINT,
	@Email NVARCHAR(320),
	@Password NVARCHAR(20),
	@PushNotificationsToken NVARCHAR(max)
AS
	BEGIN
		INSERT INTO [Customer](FirstName,LastName,PhoneNumber,Email,[Password],PushNotificationToken)
		VALUES (@FirstName,@LastName,@PhoneNumber,@Email,HASHBYTES('SHA2_512', dbo.GetPreHash() + @Password + dbo.GetPostHash()),@PushNotificationsToken)
	END
