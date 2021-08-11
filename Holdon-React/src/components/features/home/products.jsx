import React, { Fragment, useEffect, useState } from 'react';
import agent from '../../../api/agent';
import ProductItem from '../../core/product-item';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      agent.Home.products().then(response => {
          console.log(response);
          setProducts(response);
      }).catch(error => {
          console.log(error.message);
      })
  }, []);

  return (
    <Fragment>
      <div className='row mr-0 case-row'>
        <div className='col-12 p-2 text-center bg-blue'>
          <h3>המארזים שלנו</h3>
        </div>
        <div className='col-12 case-product-div'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 friend-div'>
            {products.map((item, i) => (
              <ProductItem key={i} product={item} />
            ))}
          </div>
          <img
            src={'assets/images/casebg.png'}
            alt='case-bg'
            className='case-bg d-none d-md-block d-lg-block'
          />
          <div className='row'>
            <div className='col-12 p-5 text-center'>
              <button className='blue-button'>מוצרים נוספים &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
