import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})



/*redux core library react-redux implementation of redux(wiring purpose){
    never mutet a state automatically in redux toolkit
}
Approach
appllication does have only one store  called as"single source of truth"

import configure store from core redux
export the variable with help of method that holds a object
making the reducers (i.e slices) 
i)method for create slice is createSlice and also using nanoid for unique ids generation
{
    imp in store is intial state that can be object or an array

}

how to make slice (reducer old version)
export it and make with create slice with object 

{  
*consist:-  
i)slices have names that is the property should be given 
ii) initial state to declare 
iii)store is incomplete without reducers (i.e property wit an object)

property is add-- : function reference or function
(with definationnot like context api which only has declation 
the function has the state = now state access that is it has  (has updated state value in store)
and action =  the values that comes from action(it has action.payload))

}

for export i) funtionality export means individual reducer 
(store need reducer list  without list it is not update in state , 
and export also individual reducers )
ii) hence export the reducer also
in store (give reducer info by importing and place in the object as key )
addtodo = for how the data transfer to the store
todos list i.e remove todo = how the data is send

dispatch:-
from dispatch add values = dispatch uses reducer and changesthe values in store

useSelector:- it has access of state in callback
all todos has to list  
the values is from store 
how the values extract :-
use useSelector (via import) and to delete usedispatch{for the dispatch must be reducer}
import resucer from todoslice 

*/