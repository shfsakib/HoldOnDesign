import React, { Fragment } from 'react';

const ProductsPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0 product-list-row'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>המוצרים שלנו</h2>
          </div>
          <div className='col-12 p-2 text-center'>
            <h4 className='color-blue w-75 m-auto'>
              כשיש סביבנו כל כך הרבה ״אויבים״ אנחנו צריכים חברים שיעזרו לנו לנהל
              אורח חיים בריא בקלות ובהנאה
            </h4>
          </div>
          <div className='col-12 p-2'>
            <div className='row mr-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 friend-div'>
              <div className='col p-3'>
                <div className='friend-card'>
                  <div className='col-12 pl-0 pb-2 text-left'>
                    <i className='far fa-heart fa-2x btn-like' />
                  </div>
                  <img
                    className='card-img-top friend-image'
                    src={'assets/images/fr1.png'}
                    alt='brand'
                  />
                  <div className='card-body friend-body text-center'>
                    <h4 className='color-blue'>שייק חיזוק</h4>
                    <h6 className='color-pink'>
                      115 ש״ח | 100 ש״ח לחברים מועדפים
                    </h6>
                    <h6 className>
                      חבר שיעזור לך לשמר מסת שריר בריאה לשמירה על גוף חטוב ויעיל
                    </h6>
                    <button className='blue-button'>
                      כן, אני רוצה אותך כחבר &gt;
                    </button>
                  </div>
                </div>
              </div>
              <div className='col p-3'>
                <div className='friend-card'>
                  <div className='col-12 pl-0 pb-2 text-left'>
                    <i className='fas fa-heart color-red fa-2x btn-like' />
                  </div>
                  <img
                    className='card-img-top friend-image'
                    src={'assets/images/fr2.png'}
                    alt='brand'
                  />
                  <div className='card-body friend-body text-center'>
                    <h4 className='color-blue'>חטיף לשובע</h4>
                    <h6 className='color-pink'>
                      115 ש״ח | 100 ש״ח לחברים מועדפים
                    </h6>
                    <h6 className>
                      חבר לארוחת בינים משביעה, סופר טעימה ומאוד מזינה עם 20ג׳
                      חלבון איכותי מהצומח
                    </h6>
                    <button className='blue-button'>
                      כן, אני רוצה חבר &gt;
                    </button>
                  </div>
                </div>
              </div>
              <div className='col p-3'>
                <div className='friend-card'>
                  <div className='col-12 pl-0 pb-2 text-left'>
                    <i className='far fa-heart fa-2x btn-like' />
                  </div>
                  <img
                    className='card-img-top friend-image'
                    src={'assets/images/fr3.png'}
                    alt='brand'
                  />
                  <div className='card-body friend-body text-center'>
                    <h4 className='color-blue'>שייק ארוחה</h4>
                    <h6 className='color-pink'>
                      115 ש״ח | 100 ש״ח לחברים מועדפים
                    </h6>
                    <h6 className>
                      חבר לבוקר מזין כדי להתחיל את היום הכי טוב שאפשר
                    </h6>
                    <button className='blue-button'>
                      הוספת חבר לעגלה &gt;
                    </button>
                  </div>
                </div>
              </div>
              <div className='col p-3'>
                <div className='friend-card'>
                  <div className='col-12 pl-0 pb-2 text-left'>
                    <i className='far fa-heart fa-2x btn-like' />
                  </div>
                  <img
                    className='card-img-top friend-image'
                    src={'assets/images/fr2.png'}
                    alt='brand'
                  />
                  <div className='card-body friend-body text-center'>
                    <h4 className='color-blue'>מתוק ומזין</h4>
                    <h6 className='color-pink'>
                      115 ש״ח | 100 ש״ח לחברים מועדפים
                    </h6>
                    <h6 className>
                      במיוחד לרגעים שהם בא לך משהו מתוק אבל חשוב לך שהוא יהיה גם
                      מזין
                    </h6>
                    <button className='blue-button'>
                      כן, אני רוצה חבר חדש &gt;
                    </button>
                  </div>
                </div>
              </div>
              <div className='col p-3'>
                <div className='friend-card'>
                  <div className='col-12 pl-0 pb-2 text-left'>
                    <i className='far fa-heart fa-2x btn-like' />
                  </div>
                  <img
                    className='card-img-top friend-image'
                    src={'assets/images/fr3.png'}
                    alt='brand'
                  />
                  <div className='card-body friend-body text-center'>
                    <h4 className='color-blue'>שייק ארוחה</h4>
                    <h6 className='color-pink'>
                      115 ש״ח | 100 ש״ח לחברים מועדפים
                    </h6>
                    <h6 className>
                      חבר לבוקר מזין כדי להתחיל את היום הכי טוב שאפשר
                    </h6>
                    <button className='blue-button'>
                      הוספת חבר לעגלה &gt;
                    </button>
                  </div>
                </div>
              </div>
              <div className='col p-3'>
                <div className='friend-card'>
                  <div className='col-12 pl-0 pb-2 text-left'>
                    <i className='far fa-heart fa-2x btn-like' />
                  </div>
                  <img
                    className='card-img-top friend-image'
                    src={'assets/images/fr3.png'}
                    alt='brand'
                  />
                  <div className='card-body friend-body text-center'>
                    <h4 className='color-blue'>שייק ארוחה</h4>
                    <h6 className='color-pink'>
                      115 ש״ח | 100 ש״ח לחברים מועדפים
                    </h6>
                    <h6 className>
                      חבר לבוקר מזין כדי להתחיל את היום הכי טוב שאפשר
                    </h6>
                    <button className='blue-button'>
                      הוספת חבר לעגלה &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 p-3 text-center'>
            <button className='blue-button-inv'>מוצרים נוספים &gt;</button>
          </div>
        </div>
        <div className='row mr-0 fitk-row'>
          <div className='col-12 p-0 fitk-div'>
            <img src={'assets/images/fitk.png'} alt='fitk' />
            <h4 className='color-white'>
              רוצים לרדת במשקל מבלי לוותר על שמחת החיים?
              <br />
              <button className='white-button mt-2'>
                בואו להכיר את fit-k ולקבל שיחת אבחון חינם &gt;
              </button>
            </h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
