import React, { Fragment } from 'react';

const ThankYouPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>תודה שקנית</h2>
          </div>
        </div>
        <div className='container'>
          <div className='row pt-4 pb-4'>
            <div className='col-lg-3' />
            <div className='col-lg-6 text-center'>
              <div className='row'>
                <div className='col-12 p-3'>
                  <span>
                    ההזמנה נקלטה, בקרוב יצא שליח נחמד כדי להביא עד אליך את
                    החברים שיעזרו לך ליהנות בנוחות מאורח חיים בריא
                  </span>
                </div>
                <div className='col-12 m-3 p-3 bg-light-red color-blue'>
                  <h5>
                    צברת עד עכשיו 58 ש״ח בקרדיטים שיעזרו לך להמשיך ליהנות
                    מהחברים של Hold On ובמחיר עוד יותר מופחת{' '}
                  </h5>
                </div>
                <div className='col-12 p-3 text-center'>
                  <span>
                    אז איך צוברים מהר יותר ונהנים מיותר הנחות עד כדי מוצרים
                    חינם?
                  </span>
                </div>
                <div className='col-12 text-center'>
                  <button className='blue-button'>הכל מוסבר כאן בפשטות!</button>
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

export default ThankYouPage;
