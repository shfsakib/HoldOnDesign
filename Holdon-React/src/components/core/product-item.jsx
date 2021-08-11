import React, { Fragment } from 'react'

const ProductItem = ({product}) => {
    const imageServerUrl = "http://ftp.site4now.net/" ;
    const {id, name, content, metaTitle, nvpPrice, slug, vp  } = product;
   
    return (
        <Fragment>
            <div className='col p-3'>
              <div className='friend-card'>
                <img
                  className='card-img-top friend-image'
                  src={'assets/images/fr1.png'}
                  alt='brand'
                />
                <div className='card-body friend-body text-center'>
                  <h4 className='color-blue'>{name}</h4>
                  <h6 className='color-pink'>
                    {vp + nvpPrice} ש״ח | {vp} ש״ח לחברים מועדפים
                  </h6>
                  <h6 className>
                    {metaTitle}
                  </h6>
                  <button className='blue-button'>
                    כן, אני רוצה אותך כחבר &gt;
                  </button>
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default ProductItem
