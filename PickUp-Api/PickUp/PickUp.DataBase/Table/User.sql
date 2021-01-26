CREATE TABLE [dbo].[User]
(
	[UserId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] NVARCHAR(75) NOT NULL, 
    [Email] NVARCHAR(150) NULL,
    [PassWord] BINARY(64) NULL,
    [Description] NVARCHAR(500) NOT NULL, 
    [AdressStreet] NVARCHAR(500) NOT NULL, 
    [AdressNum] INT NOT NULL, 
    [AdressCity] NVARCHAR(75) NOT NULL, 
    [AdresseZip] INT NOT NULL, 
    [PhoneNum] BIGINT NOT NULL, 
    [Logo] VARCHAR(MAX) NOT NULL, 
    [Latitude] DECIMAL(18, 15) NOT NULL, 
    [Longitude] DECIMAL(18, 15) NOT NULL, 
    [Rating] DECIMAL(2, 1) NULL
)
