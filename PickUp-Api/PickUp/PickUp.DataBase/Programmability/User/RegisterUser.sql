CREATE PROCEDURE [dbo].[RegisterUser]
	@Email nvarchar(320),
	@Password nvarchar(20),
    @Name nvarchar(20),
    @Description nvarchar(300),
    @AdressStreet nvarchar(150),
    @AdressNum int,
    @AdressCity nvarchar(100),
    @AdresseZip int ,
    @PhoneNum int, 
    @Logo nvarchar(max),
    @Latitude decimal (18,15),
    @longitude decimal (18,15),
    @Rating decimal (2,1)
AS
BEGIN
        INSERT INTO [User]([Name],Email,[PassWord],[Description],[AdressStreet],[AdressNum],[AdressCity],[AdresseZip],[PhoneNum],[Logo],[Latitude],[Longitude],[Rating])
		VALUES (@Name,@Email,HASHBYTES('SHA2_512', dbo.GetPreHash() + @Password + dbo.GetPostHash()),@Description,@AdressStreet,@AdressNum,@AdressCity,@AdresseZip,@PhoneNum,@Logo,@Latitude,@longitude,@Rating)
END
	
