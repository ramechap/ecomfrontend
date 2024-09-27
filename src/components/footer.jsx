import "../styles/footer.css"
const Footer = ()=>{
    return(
        <div className="Footer">
            <h4>Food Ecommerce</h4>
            <p>&copy;{new Date().getFullYear()}, All Rights Reserved</p>
        </div>
    )
}
export default Footer