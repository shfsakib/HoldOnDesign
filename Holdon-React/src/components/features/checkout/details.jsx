import React, { Fragment } from 'react';

const Details = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>כניסת חברים</h2>
          </div>
        </div>
        <div className='container'>
          <div className='row pt-4 pb-4'>
            <div className='col-lg-3' />
            <div className='col-lg-6 text-right'>
              <div className='row'>
                <div className='col-12 tracking'>
                  <div className='progress-track'>
                    <div className='progress-bar-track' />
                  </div>
                  <div className='process-div text-center active'>
                    <span className='bg-whole-pink icon'>
                      {' '}
                      <i className='fas fa-circle' />
                    </span>{' '}
                    <span className='text'>תשלום</span>
                  </div>
                  <div className='process-div text-center active'>
                    <span className='bg-whole-pink icon'>
                      {' '}
                      <i className='fas fa-circle' />
                    </span>{' '}
                    <span className='text'>קופה</span>
                  </div>
                  <div className='process-div text-center active'>
                    <span className='bg-whole-blue icon'>
                      {' '}
                      <i className='fas fa-circle' />
                    </span>{' '}
                    <span className='text'>פרטים</span>
                  </div>
                </div>
                <div className='col-12 h-25 pr-0'>
                  <h3 className='color-blue'>פרטים למשלוח</h3>
                  <p className='color-blue'>
                    * יש לוודא את הכתובת למשלוח ואת שם ומספר הטלפון של מקבל
                    המשלוח
                  </p>
                  <span className='d-block h4 color-blue font-weight-normal'>
                    פרטי החשבונית
                  </span>
                </div>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-lg-5 top-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='מספר טלפון'
                      />
                    </div>
                    <div className='col-lg-7 pt-2 pt-lg-0 bottom-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='שם'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12 pt-2'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='דואר אלקטרוני'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 h-25 pt-2 text-right'>
                      <span className='d-block h4 color-blue font-weight-normal'>
                        פרטי מקבל המשלוח
                      </span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-5 top-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='מספר טלפון'
                      />
                    </div>
                    <div className='col-lg-7 pt-2 pt-lg-0 bottom-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='שם מקבל המשלוח'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-3 pt-2 top-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='כניסה'
                      />
                    </div>
                    <div className='col-lg-3 pt-2 top-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='מספר'
                      />
                    </div>
                    <div className='col-lg-6 pt-2 bottom-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='רחוב'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-6 pt-2 top-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='עיר'
                      />
                    </div>
                    <div className='col-lg-3 pt-2 top-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='דירה'
                      />
                    </div>
                    <div className='col-lg-3 pt-2 bottom-order'>
                      <input
                        type='text'
                        className='normal-input'
                        placeholder='קומה'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-9 pt-2'>
                      <label
                        htmlFor='check1'
                        className='color-blue user-select-none'
                      >
                        אני מאשר/ת שהכתובת למשלוח נכונה.
                      </label>{' '}
                      <input type='checkbox' id='check1' />
                      <label
                        htmlFor='check2'
                        className='color-blue user-select-none'
                      >
                        שמרו את הכתובת כמועדפת למשלוחים הבאים שלי.
                      </label>{' '}
                      <input type='checkbox' id='check2' />
                    </div>
                    <div className='col-lg-3 pt-2'>
                      <button className='blue-button bg-green border-0 h-100 w-100'>
                        שמירה
                      </button>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 pt-2'>
                      <button className='blue-button bg-pink border-0 p-2 w-100'>
                        מעבר לקופה
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
