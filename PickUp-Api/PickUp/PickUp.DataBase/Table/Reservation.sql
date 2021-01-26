CREATE TABLE [dbo].[Reservation]
(
	[ReservationId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [UserId] INT NOT NULL, 
    [DateRes] DATETIME NOT NULL, 
    [HeureDeb] DATETIME NOT NULL,
    [HeureFin] DATETIME NOT NULL,
    [NombrePlaceAvalaible] INT  CHECK([NombrePlaceReserved] <= [NombrePlaceAvalaible]) NOT NULL, 
    
    [NombrePlaceReserved] INT  NOT NULL 
    CONSTRAINT [FK_Reservation_ToResto] FOREIGN KEY ([UserId]) REFERENCES [User]([UserId])
)
