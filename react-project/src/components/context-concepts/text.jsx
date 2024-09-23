import { useContext } from "react";
import { GlobalContext } from "../../context";

const ContextTextComponent = ()=>{
    const {theme} = useContext(GlobalContext);
    return <h1 className={theme === 'light'? 'mt-5 border-2 hover:border-sky-400 py-3 rounded-md border-neutral-600 px-6 bg-slate-100 text-gray-900':'mt-5 border-2 hover:border-sky-400 py-3 rounded-md border-neutral-400 px-6 bg-slate-800'}>I'm Enamu hoque</h1>
}
export default ContextTextComponent;