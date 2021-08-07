import React, { Fragment } from 'react';

const Payment = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>תשלום</h2>
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
                    <span className='bg-whole-blue icon'>
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
                    <span className='bg-whole-pink icon'>
                      {' '}
                      <i className='fas fa-circle' />
                    </span>{' '}
                    <span className='text'>פרטים</span>
                  </div>
                </div>
                <div className='col-12 h-25 pr-0 text-center'>
                  <h5>
                    הזמנתך התקבלה, לאחר שיתקבל אצלנו אישור התשלום ההזמנה תשלח
                    אליך עם שליח{' '}
                  </h5>
                </div>
                <div className='col-12'>
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
                    <div className='col-12 text-right'>
                      <span>
                        מספר הזמנה: <br />
                        תאריך הזמנה: <br />
                        חודש בהזמנה:
                      </span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 bg-blue p-3 text-right'>
                      פרטי בנק להפקדה
                    </div>
                  </div>
                  <div className='row bg-light'>
                    <div className='col-lg-6 p-3 text-right border-right'>
                      הולד און בע״מ <br />
                      בנק לאומי - 12 <br />
                      סניף 953 (חדרה) <br />
                      חשבון: 584600/04
                    </div>
                    <div className='col-lg-6 p-3'>
                      הולד און בע״מ <br />
                      בנק פועלים - 10 <br />
                      סניף 673 (אור עקיבא) <br />
                      חשבון: 100628
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 m-3 p-3 bg-light-red'>
                      <span>
                        לאחר ביצוע ההפקדה/העברה יש לשלוח אישור הפקדה/העברה ל:{' '}
                      </span>
                      <h6>אימייל: afcada@holdon.co.il | ווטסאפ: 050-0000000</h6>
                      <span>יש לציין שם המזמין ומספר ההזמנה</span>
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

export default Payment;
