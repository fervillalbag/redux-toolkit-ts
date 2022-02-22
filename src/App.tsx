import React, {useState} from 'react'
import './App.css'

import {ReservationCards} from "./components/ReservationCards"
import {CustomerCard} from "./components/CustomerCard"
import {RootState} from "./app/store"
import {useSelector, useDispatch} from "react-redux"
import {addReservation, removeReservation} from "./features/reservation"
import {addCustomer} from "./features/customer"
import {v4 as uuid} from "uuid"

interface Customer {
	id: string
	name: string
	food: string[]
}

export default function App() {
	const [reservationNameInput, setReservationNameInput] = useState<string>("")
	
	const dispatch = useDispatch()
	const reservations = useSelector((state: RootState) => state.reservations.value)
	const customers = useSelector((state: RootState) => state.customer.value)
	
	console.log(customers)
	
  return (
     <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name: string, index: number) => {
								return <div key={index} onClick={() => {
									dispatch(removeReservation(index))
									dispatch(addCustomer({
										id: uuid(),
										name,
										food: []
									}))
								}}>
									<ReservationCards name={name} />
								</div>
							})}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button 
						onClick={() => {
							if(reservationNameInput === "") return
							dispatch(addReservation(reservationNameInput))
							setReservationNameInput("")
						}}
						>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.length === 0 ? null : customers.map((customer: Customer, index) => (
						<CustomerCard key={index} customer={customer} />
					))}
        </div>
      </div>
    </div>
  )
}