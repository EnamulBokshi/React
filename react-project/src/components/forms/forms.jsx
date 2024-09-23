export default function Forms(){
    const handleForm = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj)
    }
    return(
       <div className="p-3 bg-gray-100 rounded-lg">
        <form action="" onSubmit={handleForm}>
            <h2>Local Forms</h2>
            <label ></label>
            <input className = "block m-2 px-3 py-1 border-blue-500 border" type="name" placeholder="Enter name" name="name"/>
            <input className = "block m-2 px-3 py-1 border-blue-500 border" type="number" placeholder="Enter number" name="phoneNumber"/>
            <input className = "block m-2 px-3 py-1 border-blue-500 border" type="email" placeholder="Enter mail" name="email" />
            <input className = "block m-2 px-4 py-1 bg-transparent border-red-200 hover:bg-yellow-200 border-2 hover:border-sky-200 " type="submit" value="Submit" />
        </form>
       </div>
    );
}