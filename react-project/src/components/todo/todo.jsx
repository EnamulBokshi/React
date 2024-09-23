// const person = {
//     name : 'Mr.Sailor',
//     theme:{
//         backgroundColor:'black',
//         color:'pink',
//         padding:'16px 24px'
//     },
//     photo:{
//         width:'100px',
//     }
// }
export default function PersonTodo({src,title,text,contact}){
    const isContact = contact? true:false

    return(
        <figure className='mx-auto md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 sm:w-96'>
            <img src={src}alt="Enamu offical photo" className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'/>
            <blockquote>
                <p className='text-lg font-medium text-stone-500'>
                   {text} 
                </p>
            </blockquote>
            <figcaption className='font-medium'>
                <div className='text-sky-500 dark:text-sky-400'>
                   {title}
                </div>
                <div className='text-slate-700 dark:text-slate-500'>Staff Engineer, Algolia</div>
            </figcaption>
            {isContact?<button className="text-sky-500 underline-offset-4 underline hover:text-gray-400 bg-slate-100 px-3 py-2 rounded-md mt-2 hover:bg-cyan-200">Contact Me</button>:null}
        </figure>
    );
}