import ProductsItem from "./ProductsItem";

const products = [
    {
        img: "./img/card1.webp", 
        alt: "Карточка товара 1", 
        title: "ELLERY X M' O CAPSULE", 
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 
        price: 52.00
    },
    {
        img: "./img/card2.webp", 
        alt: "Карточка товара 2", 
        title: "ELLERY X M' O CAPSULE", 
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 
        price: 52.00
    },
    {
        img: "./img/card3.webp", 
        alt: "Карточка товара 3", 
        title: "ELLERY X M' O CAPSULE", 
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 
        price: 52.00
    },
    {
        img: "./img/card4.webp", 
        alt: "Карточка товара 4", 
        title: "ELLERY X M' O CAPSULE", 
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 
        price: 52.00
    },
    {
        img: "./img/card5.webp", 
        alt: "Карточка товара 5", 
        title: "ELLERY X M' O CAPSULE", 
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 
        price: 52.00
    },
    {
        img: "./img/card6.webp", 
        alt: "Карточка товара 6", 
        title: "ELLERY X M' O CAPSULE", 
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", 
        price: 52.00
    },    


];

function Products() {
    return (
        <section className="products">
            <h2 className="products_header3">Fetured Items</h2>
            <p className="products_subheader">Shop for items based on what we featured in this week</p>
            <div className="cards">
                {products.map(item => <ProductsItem {...item}/>)}
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