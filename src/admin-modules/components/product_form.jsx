import "../styles/product_form.css";

const ProductForm = () => {
    return (
        <div className="ProductForm">
            <div className="ProductFormCard">
                <h2>Add New Product</h2>

                <div className="FormField">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" id="productName" name="productName" placeholder="Enter product name" />
                </div>
                <div className="FormField">
                    <label htmlFor="productImage">Product Image URL</label>
                    <input type="text" id="productImage" name="productImage" placeholder="Enter image URL" />
                </div>
                <div className="FormField">
                    <label htmlFor="productDescription">Product Description</label>
                    <textarea id="productDescription" name="productDescription" placeholder="Enter product description"></textarea>
                </div>
                <div className="FormField">
                    <label htmlFor="productPrice">Product Price</label>
                    <input type="number" id="productPrice" name="productPrice" placeholder="Enter price" />
                </div>
                <div className="FormField">
                    <button type="submit">Add Product</button>
                </div>

            </div>
        </div>
    );
};

export default ProductForm;
