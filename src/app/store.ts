import {configureStore} from "@reduxjs/toolkit"
import reservationsReducer from "../features/reservation"
import customerReducer from "../features/customer"

export const store = configureStore({
	reducer: {
		reservations: reservationsReducer,
		customer: customerReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch