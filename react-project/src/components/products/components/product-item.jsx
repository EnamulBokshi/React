
function ButtonComponent(){
    return <button>Click Me</button>
}


function ProductItem(){

    return <div>
        <p>Product item 1</p>
        <ButtonComponent />
    </div>
}
export default ProductItem;