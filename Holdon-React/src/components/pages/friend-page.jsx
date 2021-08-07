import React, { Fragment } from 'react';

const FriendPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h4 className='color-white'>
              חבר מועדף - תוכנית החברים באתר הולד און
            </h4>
          </div>
          <div className='col-12 p-0'>
            <img src={'/assets/images/frbg1.png'} alt='bg-1' className='ideal-pic' />
          </div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 p-5 bg-pink text-center'>
            <h5 className='font-bold'>
              להיות חבר מועדף – רק להרשם וכבר ליהנות מהטבות{' '}
            </h5>
            <p className='color-white w-75 m-auto'>
              מיד יש לך 15% הנחה על כל החברים שתרכשו שיעזרו לכם לנהל אורח חיים
              בריא ומהנה ובנוסף לכך צוברים כוכבים* שיקדמו אותך להיות לקוח חבר
              פרמיום
            </p>
            <p className='font-12 m-auto'>
              * איזה כיף, נהנים מהחברים החדשים שכל כך עוזרים לנו ובצבירה של 1000
              כוכבים זה מקדם אותך למעמד הפרמיום היוקרתי והמשתלם (קנייה מצטברת
              באתר ב-1000ש״ח)
            </p>
          </div>
        </div>
        <div className='row mr-0 blog-row'>
          <div className='col-12 col-lg-6 p-5 text-right top-order bg-blue'>
            <div className='float-right mt-lg-5'>
              <h6 className='color-white'>
                אנחנו יודעים שאחרי שאורח החיים הבריא שלך הפך ולהיות הרבה יותר קל
                וכיפי עם החברים של הולד און, בטח חשבת על עוד מכרים שלך שיוכלו גם
                הם ליהנות מהיתרונות, נכון?
              </h6>
              <h5 className='color-white'>
                אז אנחנו רוצים לתת לך יותר כי זה מגיע לך!
              </h5>
              <h6>
                המכרים שלך שירשמו לאתר כחבר מעודפים יוכלו כבר ליהנות מהטבות של
                החבר המועדף, ולך, כחבר פרמיום, אנחנו ניתן גם קרדיטים על הרכישות
                של המומלצים שלך. ככה, גם תעזור/י למכרים שלך ליהנות מיתרות החברים
                של הולד און וגם לצבור מהר יותר את המוצרים הבאים עד כדי חינם!
              </h6>
            </div>
          </div>
          <div className='col-12 col-lg-6 p-5 text-right bottom-order bg-white'>
            <div className='float-right mt-lg-5'>
              <h5 className='color-blue'>
                חברי פרמיום – נהנים ומרוויחים כפול{' '}
              </h5>
              <h6>
                בנוסף ל15% הנחה, כחבר פרמיום תקבל/י קרדיטים שישמשו אותך ככסף
                לרכישות עוד חברים מהולד און וליהנות עוד יותר ובפחות כסף מאורח
                חיים בריא ומהנה.
                <br />
                <br />
                איזה כיף שעל הקניות הבאות משלמים פחות ואולי אפילו לא משלמים בכלל
              </h6>
              <h5 className='color-blue'>
                איך אני מקבל קרדיטים ואיך אני יכול ליהנות מהם?
              </h5>
              <h6>
                על כל מוצר ליד במחיר כתוב כמה קרדיטים הוא מזכה, כל קרדיט שווה
                לשקל לרכישות נוספות, לדוגמא 100 קרדיטים שנצברו = 100 ש״ח לשימוש{' '}
                <br />
                <br />
                כן, גם על קנויות בקרדיטים מקבלים עוד קרדיטים לפעם הבאה - איזה
                כיף!
              </h6>
            </div>
          </div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 p-3 product-break'></div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 text-center'>
            <h5>ליהנות, לעזור וגם להרוויח</h5>
            <img
              src={'/assets/images/earn.png'}
              alt='earn-image'
              className='ideal-pic'
            />
          </div>
          <div className='col-12 p-3'>
            <div className='row p-5'>
              <div className='col-12 p-3 bg-green text-center'>
                <h5 className='w-100 m-auto'>
                  למעשה גם עזרת למכרים שלך, וגם החברים הנפלאים שתומכים באורח
                  בחיים הבריאה שלך יהיו בחינם
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FriendPage;
