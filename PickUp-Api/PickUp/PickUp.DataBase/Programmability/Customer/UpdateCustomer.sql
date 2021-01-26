CREATE PROCEDURE [dbo].[UpdateCustomer]
	@CustomerId int ,
	@Image varchar(max)


AS
	BEGIN 
	
	Update [Customer]
	Set Image = @Image
	Where CustomerId = @CustomerId
	END
