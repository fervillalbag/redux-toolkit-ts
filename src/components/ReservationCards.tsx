import React from "react"

interface ReservationCardTypes {
	name: string
}

export const ReservationCards = ({name}: ReservationCardTypes) => {
	return (
		<div className="reservation-card-container">
			{name}
		</div>
	)
}