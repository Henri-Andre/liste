import React from 'react';

const ProductCard = ({productProps, deleteProduct}) => {
    return (
        <div>
            <article key={productProps.id} className="product">
                    <h2>{productProps.produit}</h2>

                    <span>Quantité :{productProps.quantite}</span>

                    <p>{productProps.comment}</p>

                    <button onClick={() =>{deleteProduct(productProps.id)}}>Delete</button>
                    <button>Active</button>
            </article>
        </div>
    );
};

export default ProductCard;