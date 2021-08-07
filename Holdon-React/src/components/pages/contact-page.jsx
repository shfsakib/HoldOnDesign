import React, { Fragment } from 'react';

const ContactPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>צרו קשר</h2>
          </div>
        </div>
        <div className='row mr-0'>
          <div className='container'>
            <div className='row mr-0 ml-0 pl-4'>
              <div className='col-12 col-lg-6 p-lg-5 p-2 pl-4 pt-5 top-order'>
                <img
                  src={'/assets/images/cont.png'}
                  alt='contact-image'
                  className='cont-img'
                />
              </div>
              <div className='col-12 col-lg-6 p-lg-4 p-2 bottom-order'>
                <p className='d-block text-right float-right'>
                  חברים יקרים, אנחנו אוהבים לתת שירות ולהיות חלק מאורח החיים
                  שלכם. השאירו פרטים ו-HoldOn החבר הטוב שלכם יחזור אליכך בהקדם
                  דרך המייל.
                </p>
                <div className='row mr-0'>
                  <div className='col-12 col-lg-4 pt-2'>
                    <input
                      type='text'
                      placeholder='טלפון'
                      className='cont-input'
                    />
                  </div>
                  <div className='col-12 col-lg-4 pt-2'>
                    <input
                      type='text'
                      placeholder='דוא״ל'
                      className='cont-input'
                    />
                  </div>
                  <div className='col-12 col-lg-4 pt-2'>
                    <input
                      type='text'
                      placeholder='שם מלא'
                      className='cont-input'
                    />
                  </div>
                  <div className='col-12 pt-3'>
                    <textarea
                      cols={30}
                      rows={3}
                      placeholder='מה תרצו לשאול? נשמח לעזור :)'
                      className='cont-input'
                      defaultValue={''}
                    />
                  </div>
                  <div className='col-12 text-right pt-3'>
                    <button className='pink-button'>שליחה</button>
                  </div>
                </div>
                <div className='row mr-0 mt-4'>
                  <div className='col-12 text-right'>
                    <h5 className='color-pink'>שאלות נפוצות</h5>
                  </div>
                  <div className='col-12'>
                    <div className='col-12 pr-0'>
                      <hr />
                      <div className='row mr-0'>
                        <div className='col-2'>
                          <i
                            id='cont1'
                            className='fas fa-plus color-pink cursor-pointer toggle-button'
                            data-toggle='collapse'
                            data-target='#coll1'
                            aria-expanded='true'
                            aria-controls='coll1'
                          />
                        </div>
                        <div className='col-10 text-right'>
                          <h6>למי המוצר הזה מתאים?</h6>
                        </div>
                      </div>
                      <div
                        id='coll1'
                        className='row mr-0 collapse'
                        aria-labelledby='cont1'
                      >
                        <div className='col-12 text-right'>test data</div>
                      </div>
                      <hr />
                      <div className='row mr-0'>
                        <div className='col-2'>
                          <i
                            id='cont2'
                            className='fas fa-plus color-pink cursor-pointer toggle-button'
                            data-toggle='collapse'
                            data-target='#coll2'
                            aria-expanded='true'
                            aria-controls='coll2'
                          />
                        </div>
                        <div className='col-10 text-right'>
                          <h6>איך ומתי לשלב את המוצר כדי להפיק את המקסימום?</h6>
                        </div>
                      </div>
                      <div
                        id='coll2'
                        className='row mr-0 collapse'
                        aria-labelledby='cont2'
                      >
                        <div className='col-12 text-right'>test data2</div>
                      </div>
                      <hr />
                      <div className='row mr-0'>
                        <div className='col-2'>
                          <i
                            id='cont3'
                            className='fas fa-plus color-pink cursor-pointer toggle-button'
                            data-toggle='collapse'
                            data-target='#coll3'
                            aria-expanded='true'
                            aria-controls='coll3'
                          />
                        </div>
                        <div className='col-10 text-right'>
                          <h6>מה כוללת ארוחת המשקה?</h6>
                        </div>
                      </div>
                      <div
                        id='coll3'
                        className='row mr-0 collapse'
                        aria-labelledby='cont3'
                      >
                        <div className='col-12 text-right'>test data2</div>
                      </div>
                      <hr />
                      <div className='row mr-0'>
                        <div className='col-2'>
                          <i
                            id='cont4'
                            className='fas fa-plus color-pink cursor-pointer toggle-button'
                            data-toggle='collapse'
                            data-target='#coll4'
                            aria-expanded='true'
                            aria-controls='coll4'
                          />
                        </div>
                        <div className='col-10 text-right'>
                          <h6>דרכי הכנה</h6>
                        </div>
                      </div>
                      <div
                        id='coll4'
                        className='row mr-0 collapse'
                        aria-labelledby='cont4'
                      >
                        <div className='col-12 text-right'>test data2</div>
                      </div>
                      <hr />
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

export default ContactPage;
