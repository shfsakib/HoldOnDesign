import React, { Fragment } from 'react';

const RegisterPage = () => {
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
                    <span className='bg-whole-blue icon'>
                      {' '}
                      <i className='fas fa-circle' />
                    </span>{' '}
                    <span className='text'>קופה</span>
                  </div>
                  <div className='process-div text-center active'>
                    <span className='bg-whole-pink icon'>
                      {' '}
                      <i className='fas fa-circle' />
                    </span>{' '}
                    <span className='text'>פרטים</span>
                  </div>
                </div>
                <div className='col-12 h-25 pr-0'>
                  <h3 className='color-blue'>חודש בהזמנה:</h3>
                </div>
                <div className='col-12'>
                  <div className='row mr-0 p-2 border-bottom'>
                    <div className='col-2 text-right'>
                      <h6>סה״כ</h6>
                      <span className='font-16'>90 ש״ח</span>
                    </div>
                    <div className='col-3 text-right'>
                      <h6>כמות</h6>
                      <span>1</span>
                    </div>
                    <div className='col-4 text-right'>
                      <h4 className='color-blue'>שייק ארוחה</h4>
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
                  </div>
                  <div className='row mr-0 p-2 border-bottom'>
                    <div className='col-2 text-right'>
                      <h6>סה״כ</h6>
                      <span className='font-16'>90 ש״ח</span>
                    </div>
                    <div className='col-3 text-right'>
                      <h6>כמות</h6>
                      <span>1</span>
                    </div>
                    <div className='col-4 text-right'>
                      <h4 className='color-blue'>שייק ארוחה</h4>
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
                  </div>
                  <div className='row mr-0 p-2 border-bottom'>
                    <div className='col-2 text-right'>
                      <h6>סה״כ</h6>
                      <span className='font-16'>90 ש״ח</span>
                    </div>
                    <div className='col-3 text-right'>
                      <h6>כמות</h6>
                      <span>1</span>
                    </div>
                    <div className='col-4 text-right'>
                      <h4 className='color-blue'>שייק ארוחה</h4>
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
                  </div>
                  <div className='row mr-0 p-2 border-bottom bg-light'>
                    <div className='col-6 text-left'>360 ש״ח</div>
                    <div className='col-6 text-center'>
                      <h6>סה״כ ביניים</h6>
                    </div>
                  </div>
                  <div className='row mr-0 p-3'>
                    <div className='col-8 d-flex'>
                      <span className='bg-blue p-2'>
                        <i className='fas fa-check fa-lg color-white' />
                      </span>
                      <input
                        type='text'
                        className='order-input'
                        placeholder='LIFE&LOVE'
                      />
                    </div>
                    <div className='col-4'>
                      <h6 className='font-bold mt-2'>יש לכם קופון?</h6>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 text-right font-12'>
                      <p>
                        הקופון הופעל! יש לך 60 שקלים בקופון זה. מקסימום לשימוש
                        בהזמנה זו: 600 שקלים&nbsp;
                        <i className='i fas fa-check fa-sm color-pink' />
                      </p>
                    </div>
                  </div>
                  <div className='row mr-0 p-2 border-bottom bg-light'>
                    <div className='col-6 text-left'>60- ש״ח</div>
                    <div className='col-6 text-center'>
                      <h6>הנחת קופון</h6>
                    </div>
                  </div>
                  <div className='row mr-0'>
                    <div className='col-12 m-2'>
                      <div className='text-right bg-pink p-2'>
                        <strong>יש לך 100 קרדיטים בחשבון.</strong>מקסימום לשימוש
                        בהזמנה זו: 600 קרדיטים.
                        <br />
                        לניצול הקרדיטים בחשבון&nbsp;
                        <i className='fas fa-check color-white' />
                      </div>
                    </div>
                  </div>
                  <div className='row mr-0 p-2 border-bottom bg-light'>
                    <div className='col-6 text-left'>100- ש״ח</div>
                    <div className='col-6 text-center'>
                      <h6>סיכום ביניים</h6>
                    </div>
                  </div>
                  <div className='row mr-0 p-2 border-bottom'>
                    <div className='col-6 text-left'>200 ש״ח</div>
                    <div className='col-6 text-center'>
                      <h6>ניצול קרדיטים</h6>
                    </div>
                  </div>
                  <div className='row mr-0 p-2 border-bottom'>
                    <div className='col-6 text-left'>חינם!</div>
                    <div className='col-6 text-center'>
                      <h6>דמי משלוח</h6>
                    </div>
                  </div>
                  <div className='row mr-0 p-2 border-bottom'>
                    <div className='col-6 text-left' />
                    <div className='col-6 text-center'>
                      <h6>הנחת משווק</h6>
                    </div>
                  </div>
                  <div className='row mr-0 p-2 border-bottom bg-light'>
                    <div className='col-6 text-left'>200 ש״ח</div>
                    <div className='col-6 text-center'>
                      <h6>סה״כ לתשלום</h6>
                    </div>
                  </div>
                  <div className='row mr-0'>
                    <div className='col-12 p-3 text-center color-blue'>
                      <h6>
                        הזמנה זו מזכה אותך ב-58 ש״ח בקרדיטים שאפשר לנצל כבר
                        בקנייה הבאה
                      </h6>
                    </div>
                  </div>
                  <div className='row mr-0'>
                    <div className='col-12 text-right color-blue'>
                      <h3>אופן התשלום:</h3>
                    </div>
                    <div className='col-12 text-right'>
                      <input type='radio' name='radio' id={2} />
                      <label htmlFor={2} className='font-weight-bold'>
                        הפקדה בנקאית
                      </label>
                      <input type='radio' name='radio' id={1} defaultChecked />
                      <label htmlFor={1} className='font-weight-bold'>
                        אשראי
                      </label>
                    </div>
                  </div>
                  <div className='row mr-0 p-2 bg-light'>
                    <div className='col-12 text-right'>
                      <span>
                        שם: אלי אלימלך
                        <br />
                        דואר אלקטרוני: elie@gmail.com
                        <br />
                        טלפון: 050-8375984
                      </span>
                      <hr />
                      <span>כתובת משלוח: הכוכבים 58, קיסריה 443355, ישראל</span>
                      <hr />
                      <span>יגיע במשלוח עד הבית בתוך 5 ימי עסקים</span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <button className='blue-button bg-pink border-0 btn-block p-3'>
                        ביצוע הזמנה
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

export default RegisterPage;
