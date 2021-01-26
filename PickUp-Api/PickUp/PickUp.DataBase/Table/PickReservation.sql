CREATE TABLE [dbo].[PickReservation]
(
	[CustomerId] INT NOT NULL,
	[ReservationId] INT NOT NULL,

	[DateInput] DATETIME NOT NULL,
	
    [NumPersonne] INT NOT NULL, 
    PRIMARY KEY (CustomerId,ReservationId), 
    CONSTRAINT [FK_PickReservation_ToUser] FOREIGN KEY ([CustomerId]) REFERENCES [Customer]([CustomerId]), 
    CONSTRAINT [FK_PickReservation_ToReservation] FOREIGN KEY ([ReservationId]) REFERENCES [Reservation]([ReservationId])
)
