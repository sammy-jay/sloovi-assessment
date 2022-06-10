import {creatStore, applyMiddleware, compose} from "redux"
import thunk  from "redux-thunk"
import reducer from "./reducers"

const middleware = [thunk]

const store = creatStore(
    reducer,
    compose(
        applyMiddleware(...middleware)
    )
)

export default store