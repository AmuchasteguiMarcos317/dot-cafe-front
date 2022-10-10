import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import reloadSlice from "./reloadSlice";
import usersAPI from "./usersAPI";
import kitsAPI from "./kitsAPI";
import filtersAPI from "./filtersAPI";
import giftCardsAPI from "./giftCardsAPI";
import mugsAPI from "./mugsAPI";
import coffeeMachinesAPI from "./coffeeMachinesAPI";
import coffeeForDrinkAPI from "./coffeeForDrinkAPI";
import coffeeByKiloAPI from "./coffeeByKiloAPI";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart : persistedReducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [kitsAPI.reducerPath]: kitsAPI.reducer,
    [filtersAPI.reducerPath]: filtersAPI.reducer,
    [giftCardsAPI.reducerPath]: giftCardsAPI.reducer,
    [mugsAPI.reducerPath]: mugsAPI.reducer,
    [coffeeMachinesAPI.reducerPath]: coffeeMachinesAPI.reducer,
    [coffeeForDrinkAPI.reducerPath]: coffeeForDrinkAPI.reducer,
    [coffeeByKiloAPI.reducerPath]: coffeeByKiloAPI.reducer,
    auth: userReducer,
    reload: reloadSlice,
    // cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
});

export const persistor = persistStore(store)