CREATE TABLE [dbo].[Event]
(
	[EventId] INT NOT NULL,
	[UserId] INT NOT NULL,
	PRIMARY KEY (EventId,[UserId]), 
    CONSTRAINT [FK_ToEventDetail] FOREIGN KEY ([EventId]) REFERENCES [EvenementDetail]([EventId]),
	CONSTRAINT [FK_ToResto] FOREIGN KEY ([UserId]) REFERENCES [User]([UserId])
)