import { createReducer, on } from "@ngrx/store"
import { intialState } from "./counter.state"
import { decrement, increment, reset } from "./counter.actions"

const _counterReducer = createReducer(
    intialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }), 
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    })
    
    )

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}