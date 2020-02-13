import React from 'react';
import ProductButton from '../product-button/product-btn.component';
import './product-grid.styles.scss';


export const ProductGrid = props =>(
    <div className='product-buttons-grid'>
    {props.products.map(product => (
        <ProductButton key={product.id} name={product.name} price={product.price} />
    ))}
    </div>

)

export default ProductGrid


