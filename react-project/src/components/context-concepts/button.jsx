import { useContext } from "react";
import { GlobalContext } from "../../context";

const ContextButtonComponent = ()=>{
    const {theme,setTheme} = useContext(GlobalContext)
   //theme === 'light'? 'py-3 px-5 bg-slate-200 text-black rounded-md ring-2 ring-sky-300 cursor-pointer':'py-3 px-5 bg-gray-900 text-white rounded-md ring-2 ring-sky-300 cursor-pointer'
    return <button onClick={()=> setTheme(theme === 'light' ? "dark":"light")} className={theme === 'light'? 'py-3 px-5 bg-slate-200 text-black rounded-md ring-2 ring-sky-300 cursor-pointer':'py-3 px-5 bg-gray-900 text-white rounded-md ring-2 ring-sky-300 cursor-pointer'}>{theme === 'dark'? 'Light':'Dark'}</button>
}
export default ContextButtonComponent;