import { useSelector } from "react-redux";
import ProductsItem from "./ProductsItem";


function Products() {

    const products = useSelector(state => state.shop.products);

    return (
        <section className="products">
            <h2 className="products_header3">Fetured Items</h2>
            <p className="products_subheader">Shop for items based on what we featured in this week</p>
            <div className="cards">
                {products.map(item => <ProductsItem {...item} key={item.id}/>)}
            </div>
            <div className="products_button_container">
                <div className="browse_all_button">
                    <p className="browse_all_button_text">Browse All Product</p>
                </div>
            </div>
        </section>
    );
}

export default Products;