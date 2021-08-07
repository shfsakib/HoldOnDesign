import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className='row mr-0 contact-row'>
        <div className='col-12 col-md-6 col-lg-6 contact-left-div'>
          <div className='col-12 text-center p-2 color-white'>
            <h5>רוצים עוד? הצטרפו למועדון וקבלו הטבות ומבצעים</h5>
          </div>
          <div className='col-12 text-right pt-5 color-white'>
            <div className='row'>
              <div className='col-6'>
                <h6>שם משפחה</h6>
                <input type='text' className='contact-input' />
              </div>
              <div className='col-6'>
                <h6>שם פרטי</h6>
                <input type='text' className='contact-input' />
              </div>
            </div>
            <div className='row pt-3'>
              <div className='col-6'>
                <h6>טלפון</h6>
                <input type='text' className='contact-input' />
              </div>
              <div className='col-6'>
                <h6>דוא״ל</h6>
                <input type='text' className='contact-input' />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 text-center mt-4'>
                <button className='pink-button'>להצטרפות לחצו כאן</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 p-0 col-md-6 col-lg-6 d-none d-md-block d-lg-block contact-img-div'></div>
      </div>

      <div className='row mr-0 footer-row'>
        <div className='col-12 footer-div'>
          <div className='row mr-0'>
            <div className='col-12 col-lg-2 footer-logo-div footer-logo-div1'>
              <span className>
                <img src={'/assets/images/instagram.png'} alt='insta' />
                <img src={'/assets/images/fb.png'} alt='fb' />
                <img src={'/assets/images/telegram.png'} alt='tele' />
              </span>
            </div>
            <div className='col-12 col-lg-2 text-right footer-logo-div2'>
              <span className>
                <a href='#' className='color-white'>
                  הזמן חבר
                </a>
                <br />
                <a href='#' className='color-white'>
                  חבר מועדף
                </a>
                <br />
                <a href='#' className='color-white'>
                  ור קשר
                </a>
              </span>
            </div>
            <div className='col-12 col-lg-2 text-right footer-logo-div3'>
              <span className>
                <h6 className='color-white'>מפת האתר</h6>
                <a href='#' className='color-white'>
                  דף הבית
                </a>
                <br />
                <a href='#' className='color-white'>
                  הסיפור שלנו
                </a>
                <br />
                <a href='#' className='color-white'>
                  המוצרים
                </a>
                <br />
                <a href='#' className='color-white'>
                  שלנו
                </a>
                <br />
                <a href='#' className='color-white'>
                  בלוג
                </a>
              </span>
            </div>
            <div className='col-12 col-lg-3 text-right footer-logo-div4'>
              <span className>
                <h6 className='color-white'>שירות לקוחות</h6>
                <span className='text-right color-white'>
                  שירות לקוחות טל: 077-5555555 מייל: info@holdon.co.il כתובת:
                  אחד העם 1, תל-אביב
                </span>
              </span>
            </div>
            <div className='col-12 col-lg-3 p-2 text-center footer-logo-div5'>
              <img
                src={'/assets/images/logo-footer.png'}
                alt='footer-logo'
                className='footer-logo'
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
