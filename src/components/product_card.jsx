const ProductCard =  ()=>{
    return (
        <div className="ProductCard">
            <div className="ProductImage">
                <img alt="pizza" src={"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            </div>
            <div className="ProductDetails">
                <p className="ProductName">Pizza</p>
                <p className="ProductDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero vero, omnis voluptatum expedita sit facere! Sapiente, accusamus, reiciendis, culpa possimus est excepturi tenetur repellat earum quam dicta corporis dolorum?</p>
                <p className="ProductPrice">₹ 199</p>
            </div>
            <div className="AddToCart">
                <button>Add To Cart</button>
            </div>
        </div>
    )
}
export default ProductCard