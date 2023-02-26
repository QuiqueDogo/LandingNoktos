import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
    key: "root",
    storage,
};
const initialState = {};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
    let persistor = persistStore(store);
    return { store, persistor };
};
