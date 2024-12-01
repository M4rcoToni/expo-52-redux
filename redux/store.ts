import { configureStore } from '@reduxjs/toolkit'
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

import counterReducer from './features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    },
    enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers().concat(devToolsEnhancer()),
})