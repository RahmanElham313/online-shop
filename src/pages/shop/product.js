const Product = (props)=>{
    return (
        <div className="col-3">
            <img src={props.data.productImage} className="w-100"></img>
            {props.data.productName}
            this is the second page 
        </div>
    )
}
export default Product;