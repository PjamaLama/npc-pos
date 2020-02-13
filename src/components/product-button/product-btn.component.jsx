import React from 'react';
import './product-btn.styles.scss';
import {Button} from '@material-ui/core';


const ProductButton = ({ name, price, id, handleChange}) => (
    <Button onClick={handleChange} variant="contained" size="large" color="primary" className='product-button' >
        {name.toUpperCase()}
    </Button>
)

export default ProductButton;