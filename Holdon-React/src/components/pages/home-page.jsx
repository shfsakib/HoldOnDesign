import React, { Fragment } from 'react';
import Products from '../features/home/products';

const HomePage = () => {
  return (
    <Fragment>
      <div className='row mr-0 pt-1'>
        <div className="col-12 p-0">
          <div
            id='carouselExampleIndicators'
            className='carousel slide pb-1'
            data-ride='carousel'
          >
            <ol className='carousel-indicators'>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to={0}
                className='active'
              />
              <li data-target='#carouselExampleIndicators' data-slide-to={1} />
              <li data-target='#carouselExampleIndicators' data-slide-to={2} />
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  className='d-block w-100'
                  src={'assets/images/bg1.png'}
                  alt='First slide'
                />
                <h3>
                  מבצע
                  <br />
                  קונים 3 ממוצרי הבריאות שלנו ומקבלים ארוחה מלאה במתנה
                  <br /> <button className='blue-button'>להזמנה</button>
                </h3>
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src={'assets/images/bg1.png'}
                  alt='Second slide'
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src={'assets/images/bg3.png'}
                  alt='Third slide'
                />
              </div>
            </div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon fas fa-chevron-left fa-lg'
                aria-hidden='true'
              />
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon fas fa-chevron-right fa-lg'
                aria-hidden='true'
              />
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className='row mr-0 friend-row'>
        <div className='col-12 p-4'>
          <h4 className='text-center m-auto'>
            כשיש סביבנו כל כך הרבה ״אויבים״ אנחנו צריכים חברים שיעזרו לנו לנהל
            אורח חיים בריא בקלות ובהנאה
          </h4>
        </div>
        <div className='col-12'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 friend-div'>
            <div className='col p-3'>
              <div className='friend-card'>
                <img
                  className='card-img-top friend-image'
                  src={'assets/images/fr1.png'}
                  alt='brand'
                />
                <div className='card-body friend-body text-center'>
                  <h4 className='card-title'>שייק חיזוק</h4>
                  <h6 className='color-white'>
                    חבר שיעזור לך לשמר מסת שריר בריאה לשמירה על גוף חטוב ויעיל
                  </h6>
                  <button className='white-button'>
                    כן, אני רוצה אותך כחבר &gt;
                  </button>
                </div>
              </div>
            </div>
            <div className='col p-3'>
              <div className='friend-card'>
                <img
                  className='card-img-top friend-image'
                  src={'assets/images/fr2.png'}
                  alt='brand'
                />
                <div className='card-body friend-body text-center'>
                  <h4 className='card-title'>שייק חיזוק</h4>
                  <h6 className='color-white'>
                    חבר לארוחת בינים משביעה, סופר טעימה ומאוד מזינה עם 20ג׳
                    חלבון איכותי מהצומח
                  </h6>
                  <button className='white-button'>
                    כן, אני רוצה אותך כחבר &gt;
                  </button>
                </div>
              </div>
            </div>
            <div className='col p-3'>
              <div className='friend-card'>
                <img
                  className='card-img-top friend-image'
                  src={'assets/images/fr3.png'}
                  alt='brand'
                />
                <div className='card-body friend-body text-center'>
                  <h4 className='card-title'>שייק חיזוק</h4>
                  <h6 className='color-white'>
                    חבר לבוקר מזין כדי להתחיל את היום הכי טוב שאפשר
                  </h6>
                  <button className='white-button'>
                    כן, אני רוצה אותך כחבר &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mr-0 number-row'>
        <div className='col-12 p-4'>
          <h4 className='text-center m-auto'>מספרים עלינו</h4>
        </div>
        <div className='col-12'>
          <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 friend-div'>
            <div className='col p-3'>
              <div className='friend-card text-center'>
                <img
                  className='card-img-top number-image'
                  src={'assets/images/nm1.png'}
                  alt='brand'
                />
                <div className='card-body friend-body text-center'>
                  <h6 className='number-des'>
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית
                    קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. הועניב היושבב
                    שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
                  </h6>
                  <h4>שרון כהן</h4>
                </div>
              </div>
            </div>
            <div className='col p-3'>
              <div className='friend-card'>
                <img
                  className='card-img-top number-image'
                  src={'assets/images/nm2.png'}
                  alt='brand'
                />
                <div className='card-body friend-body text-center'>
                  <h6 className='number-des'>
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית
                    קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. הועניב היושבב
                    שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
                  </h6>
                  <h4>שרון כהן</h4>
                </div>
              </div>
            </div>
            <div className='col p-3'>
              <div className='friend-card'>
                <img
                  className='card-img-top number-image'
                  src={'assets/images/nm3.png'}
                  alt='brand'
                />
                <div className='card-body friend-body text-center'>
                  <h6 className='number-des'>
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית
                    קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. הועניב היושבב
                    שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
                  </h6>
                  <h4>שרון כהן</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mr-0 video-row'>
        <div className='col-12 p-0 video-div'>
          <iframe
            src='https://player.vimeo.com/video/60230475'
            width='100%'
            height='500px'
            runat='server'
            id='videoFrame'
            frameBorder={0}
            allow='accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
      <Products/>
      <div className='row mr-0 lifestyle-row'>
        <div className='col-12 p-0 lifestyle-div'>
          <img
            src={'assets/images/lifestyle.png'}
            alt='lifestyle'
            className='lifestyle-img'
          />
        </div>
      </div>
      <div className='row mr-0 product-row'>
        <div
          id='carouselExampleControls'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 friend-div'>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr1.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק חיזוק</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>חטיף לשובע</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr3.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק ארוחה</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>מתוק ומזין</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>חטיף לשובע</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr3.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק ארוחה</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 friend-div'>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr1.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק חיזוק</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>חטיף לשובע</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr3.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק ארוחה</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>מתוק ומזין</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>חטיף לשובע</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr3.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק ארוחה</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 friend-div'>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr1.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק חיזוק</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>חטיף לשובע</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr3.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק ארוחה</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>מתוק ומזין</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr2.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>חטיף לשובע</h6>
                    </div>
                  </div>
                </div>
                <div className='col p-3'>
                  <div className='friend-card'>
                    <img
                      className='card-img-top product-image'
                      src={'assets/images/fr3.png'}
                      alt='brand'
                    />
                    <div className='card-body friend-body text-center p-0'>
                      <h6 className='color-blue'>שייק ארוחה</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleControls'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon fas fa-chevron-left'
              aria-hidden='true'
            />
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleControls'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon fas fa-chevron-right'
              aria-hidden='true'
            />
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
      <div className='row mr-0 premium-row'>
        <div className='col-12 p-0 premium-div'>
          <img src={'assets/images/premium-member.png'} alt='premium' />
          <h4 className='color-blue'>
            רוצה להתקדם לחבר פרימיום ולהרוויח הטבות מטורפות ב- hold on?
            <br />
            <button className='blue-button mt-2'>
              לפרטים נוספים לחצו כאן &gt;
            </button>
          </h4>
        </div>
      </div>


    </Fragment>
  );
};

export default HomePage;
