function ProductsItem({ img, alt, title, description, price }) {
    return (
        <div className="card">
            <img className="card_image" src={img} alt={alt} />
            <div className="card_image__selected">
                <button className="add-to-card-button">
                    <img src="./img/Basket.webp" alt="Значок добавления в корзину" />
                    Add to Card
                </button>
            </div>
            <h3 className="card_header">{title}</h3>
            <p className="card_text">{description}</p>
            <p className="card_price">${price}</p>
        </div>
    );
}

export default ProductsItem;