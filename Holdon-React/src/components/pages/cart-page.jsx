import React, { Fragment } from 'react';

const CartPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>סל הקניות</h2>
          </div>
        </div>
        <div className='container'>
          <div className='row ml-0'>
            <div className='col-12 col-lg-5 p-3 top-order'>
              <div className='row mr-0'>
                <div className='col-12 p-3 card card-header'>
                  <h5 className='m-auto color-blue'>סיכום הזמנה</h5>
                  <div className='row mr-0 p-3 pt-5'>
                    <div className='col-8 d-flex'>
                      <span className='bg-blue p-2'>
                        <i className='fas fa-check fa-lg color-white' />
                      </span>
                      <input
                        type='text'
                        className='order-input'
                        placeholder='הזינו קוד קופון'
                      />
                    </div>
                    <div className='col-4'>
                      <h6 className='font-bold mt-2'>יש לכם קופון?</h6>
                    </div>
                  </div>
                  <hr />
                  <div className='row mr-0 p-2'>
                    <div className='col-4 p-3 text-left font-18'>90 ש״ח</div>
                    <div className='col-8 p-3 text-right font-18'>
                      סכום ביניים:
                    </div>
                  </div>
                  <hr />
                  <div className='row mr-0 p-2'>
                    <div className='col-4 p-3 text-left font-18'>30 ש״ח</div>
                    <div className='col-8 p-3 text-right font-18'>משלוח:</div>
                  </div>
                  <hr />
                  <div className='row mr-0 p-2'>
                    <div className='col-4 p-3 text-left font-18 font-bold'>
                      120 ש״ח
                    </div>
                    <div className='col-8 p-3 text-right font-18 font-bold'>
                      סה״כ לתשלום
                    </div>
                  </div>
                  <div className='row mr-0'>
                    <div className='col-12 pt-4 text-center'>
                      <button className='blue-button'>מעבר לקופה</button>
                    </div>
                  </div>
                  <div className='row mr-0'>
                    <div className='col-12 font-18 color-black text-center pt-4 font-bold'>
                      <a href='#' className='btn-anchor-black'>
                        המשך קניות
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-7 p-5 bottom-order'>
              <div className='row mr-0 p-2'>
                <div className='col-2 text-right'>
                  <h6>סה״כ</h6>
                  <span className='font-16'>90 ש״ח</span>
                </div>
                <div className='col-3 text-right'>
                  <h6>כמות</h6>
                  <input
                    type='number'
                    defaultValue={0}
                    className='text-right w-100 quantity-input'
                  />
                </div>
                <div className='col-3 text-right'>
                  <h5 className='color-blue'>שייק ארוחה</h5>
                  <span className='d-block'>טעם: וניל</span>
                  <span className='d-block'>90 ש״ח</span>
                </div>
                <div className='col-3'>
                  <img
                    src={'/assets/images/fr1.png'}
                    alt='cart-pic'
                    className='ideal-pic w-100'
                  />
                </div>
                <div className='col-1 text-right'>
                  <i className='fas fa-trash-alt pink-button mt-1' />
                  <i className='far fa-heart pink-button mt-1' />
                </div>
              </div>
              <div className='row mr-0 p-2'>
                <div className='col-2 text-right'>
                  <h6>סה״כ</h6>
                  <span className='font-16'>90 ש״ח</span>
                </div>
                <div className='col-3 text-right'>
                  <h6>כמות</h6>
                  <input
                    type='number'
                    defaultValue={0}
                    className='text-right w-100 quantity-input'
                  />
                </div>
                <div className='col-3 text-right'>
                  <h5 className='color-blue'>שייק ארוחה</h5>
                  <span className='d-block'>טעם: וניל</span>
                  <span className='d-block'>90 ש״ח</span>
                </div>
                <div className='col-3'>
                  <img
                    src={'/assets/images/fr1.png'}
                    alt='cart-pic'
                    className='ideal-pic w-100'
                  />
                </div>
                <div className='col-1 text-right'>
                  <i className='fas fa-trash-alt pink-button mt-1' />
                  <i className='far fa-heart pink-button mt-1' />
                </div>
              </div>
              <div className='row p-2'>
                <div className='col-12 text-center bg-pink p-3'>
                  רוצה משלוח חינם? חסר לך בסל רק עוד 170 ש״ח
                </div>
              </div>
              <div className='row'>
                <div className='col-12 p-3 text-center'>
                  <h5 className='color-blue m-auto'>
                    הצעות נוספות מהחברים שלך:
                  </h5>
                  <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3'>
                    <div className='col p-3'>
                      <div className='friend-card'>
                        <img
                          className='card-img-top cart-image'
                          src={'/assets/images/fr1.png'}
                          alt='brand'
                        />
                        <div className='card-body friend-body text-center'>
                          <div className='row'>
                            <div className='col-6 p-0 text-left'>70 ש״ח</div>
                            <div className='col-6 p-0 pl-1 text-right color-blue font-bold'>
                              שייק ארוחה
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col p-3'>
                      <div className='friend-card'>
                        <img
                          className='card-img-top cart-image'
                          src={'/assets/images/fr2.png'}
                          alt='brand'
                        />
                        <div className='card-body friend-body text-center'>
                          <div className='row'>
                            <div className='col-6 p-0 text-left'>70 ש״ח</div>
                            <div className='col-6 p-0 pl-1 text-right color-blue font-bold'>
                              שייק ארוחה
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col p-3'>
                      <div className='friend-card'>
                        <img
                          className='card-img-top cart-image'
                          src={'/assets/images/fr3.png'}
                          alt='brand'
                        />
                        <div className='card-body friend-body text-center'>
                          <div className='row'>
                            <div className='col-6 p-0 text-left'>70 ש״ח</div>
                            <div className='col-6 p-0 pl-1 text-right color-blue font-bold'>
                              שייק ארוחה
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartPage;
