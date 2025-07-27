export {configureStore} from '@reduxjs/toolkit'
// export {default as reducer} from './reducer'
import  counterSlice  from './features/counter/CounterSlice'



export const store = configureStore({
    reducer: {
        counterSlice
        }
    
})

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch({type: 'counter/increment'})




