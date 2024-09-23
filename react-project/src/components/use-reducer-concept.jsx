import { useReducer } from "react";

const SHOW_TEXT = "SHOW_TEXT"
const HIDE_TEXT = "HIDE_TEXT"
const CHANGE_COLOR = "CHANGE_COLOR"
const initialState = {
    showText :false,
    chagneTextColor:false
}
const reducer = (state,action)=>{
    console.log(state,action.type);
    switch(action.type){
        
        case HIDE_TEXT:
            
            return{
                ...state,
                showText:false,
            }
        case SHOW_TEXT:
            return{
                ...state,
                showText:true
            }
        case CHANGE_COLOR:
            return{
                ...state,
                chagneTextColor:true
            }
        default:
            return state;
    }
}
const UseReducerConcept = ()=>{
    const [state,dispatch] = useReducer(reducer,initialState);

    return <>
        {
            state?.showText ? <h3 className={state?.chagneTextColor? "bg-gray-500 py-3 px-3 rounded-md border-2 text-black border-sky-300":"bg-current border-0"}>I'm visible now</h3>: <h3 className="italic">hidden</h3>
        }
    <div className="flex space-x-6 justify-center items-center">
        <button onClick={()=> dispatch({type:HIDE_TEXT})} className="px-3 py-2 rounded-md bg-slate-600 border-2 border-sky-200">Hide text</button>
        <button onClick={()=> dispatch({type:SHOW_TEXT})} className="px-3 py-2 rounded-md bg-slate-600 border-2 border-sky-200">Show text</button>
        <button onClick={()=> dispatch({type : CHANGE_COLOR})} className="px-3 py-2 rounded-md bg-slate-600 border-2 border-sky-200">change color</button>
    </div>
    
    </>
}
export default UseReducerConcept;