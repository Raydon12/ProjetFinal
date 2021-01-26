CREATE TABLE [dbo].[Category]
(
	[CategoryId] INT NOT NULL PRIMARY KEY IDENTITY, 
	[UserId] INT NOT NULL ,
    [CategoryDetailId] INT NOT NULL,
    CONSTRAINT [FK_Category_ToCategoryDetail] FOREIGN KEY ([CategoryDetailId]) REFERENCES [CategoryDetail]([CategoryDetailId]), 
    CONSTRAINT [FK_Category_ToResto] FOREIGN KEY ([UserId]) REFERENCES [User](UserId), 

)
