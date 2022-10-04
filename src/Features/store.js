import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import reloadSlice from './reloadSlice'
import usersAPI from './usersAPI'
import kitsAPI from './kitsAPI'
import filtersAPI from './filtersAPI'
import giftCardsAPI from './giftCardsAPI'
import coffeeMugsAPI from './coffeeMugsAPI'
import coffeeMachinesAPI from './coffeeMachinesAPI'
import coffeeForDrinkAPI from './coffeeForDrinkAPI'
import coffeeByKiloAPI from './coffeeByKiloAPI'

export default configureStore ({
    reducer: {
        [usersAPI.reducerPath] : usersAPI.reducer,
        [kitsAPI.reducerPath] : kitsAPI.reducer,
        [filtersAPI.reducerPath] : filtersAPI.reducer,
        [giftCardsAPI.reducerPath] : giftCardsAPI.reducer,
        [coffeeMugsAPI.reducerPath] : coffeeMugsAPI.reducer,
        [coffeeMachinesAPI.reducerPath] : coffeeMachinesAPI.reducer,
        [coffeeForDrinkAPI.reducerPath] : coffeeForDrinkAPI.reducer,
        [coffeeByKiloAPI.reducerPath] : coffeeByKiloAPI.reducer,
        auth: userReducer,
        reload: reloadSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
})