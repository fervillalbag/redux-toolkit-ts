import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {addFoodToCustomer} from "../features/customer"

interface CustomerCardType {
	id: string
	name: string
	food: string[]
}

export const CustomerCard:React.FC<CustomerCardType> = ({customer}) => {
	const [customerFood, setCustomerFood] = useState<string>("")
	const dispatch = useDispatch()

	console.log(customer)

	return (
		<div className="customer-food-card-container">
      <h5>{customer.name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
          {customer.food.length === 0 ? null : customer.food.map((item, index) => (
						<span key={index}>{item}</span>
					))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFood}
            onChange={(e) => setCustomerFood(e.target.value)}
          />
          <button
						onClick={() => {
							if(customerFood === "") return
							dispatch(addFoodToCustomer({
								id: customer.id,
								food: customerFood
							}))
							setCustomerFood("")
						}}
					>
            Add
          </button>
        </div>
      </div>
    </div>
	)
}