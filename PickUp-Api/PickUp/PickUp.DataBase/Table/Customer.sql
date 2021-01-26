CREATE TABLE [dbo].[Customer]
(
	[CustomerId] INT NOT NULL PRIMARY KEY IDENTITY,
	[LastName] NVARCHAR(75) NOT NULL, 
    [FirstName] NVARCHAR(75) NOT NULL, 
    [PhoneNumber] BIGINT NOT NULL, 
    [Email] NVARCHAR(320) NOT NULL UNIQUE, 
    [Password] BINARY(64) NOT NULL, 
    [Image] VARCHAR(MAX) NULL, 
    [PushNotificationToken] NVARCHAR(MAX) NULL
)
