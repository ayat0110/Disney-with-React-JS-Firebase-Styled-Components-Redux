import { configureStore  } from "@reduxjs/toolkit";
import loggerMiddleware from './middleware/logger'
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: loggerMiddleware({
        serializableCheck: false,
    }),
});