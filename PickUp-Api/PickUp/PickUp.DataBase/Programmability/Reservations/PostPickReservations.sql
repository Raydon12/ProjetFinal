CREATE PROCEDURE [dbo].[PostPickReservations]
		@ReservationId int ,
		@CustomerId int,
		@DateInput DateTime,
		@NumPersonne int
	AS
	BEGIN
		DECLARE @NombrePlace INT , @NombrePersonne INT , @User INT
		SELECT @NombrePlace = NombrePlaceAvalaible, @NombrePersonne = NombrePlaceReserved 
		FROM Reservation
		Where ReservationId = @ReservationId

		select @User = CustomerId
		from [Customer] 
		where CustomerId = @CustomerId

		if(@NombrePersonne+@NumPersonne <= @NombrePlace and @User = @CustomerId )
			BEGIN 
			if NOT EXISTS (SELECT * FROM PickReservation WHERE CustomerId = @CustomerId and ReservationId = @ReservationId)
				BEGIN 
				Update Reservation 
				set NombrePlaceAvalaible = NombrePlaceReserved + @NumPersonne
				From Reservation
				where ReservationId= @ReservationId 
			END 

	
			INSERT INTO  PickReservation
			Values(@CustomerId,@ReservationId,@DateInput,@NumPersonne)
		END
	END
