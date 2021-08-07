import React, { Fragment } from 'react';

const ProductDetailsPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0 product-details-div'>
          <div className='col-12 p-4' />
          <div className='container'>
            <div className='row mr-0 ml-0'>
              <div className='col-12 col-lg-5 pr-0'>
                <img
                  src={'/assets/images/fr1.png'}
                  alt='large-img'
                  className='large-banner d-block'
                />
                <div className='row mr-0'>
                  <div className='col-12 p-2 image-list-div'>
                    <ul className='horizontal-div'>
                      <li>
                        <img src={'/assets/images/fr1.png'} />
                      </li>
                      <li>
                        <img src={'/assets/images/fr2.png'} />
                      </li>
                      <li>
                        <img src={'/assets/images/fr3.png'} />
                      </li>
                      <li>
                        <img src={'/assets/images/nm1.png'} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-7 p-3 pl-4 text-right'>
                <h6 className='color-green'>
                  עמוד הבית &gt; המוצרים שלנו &gt; חטיף לשובע
                </h6>
                <div className='row mr-0'>
                  <div className='col-5 text-center pt-2'>
                    <span className='d-block'>
                      <i className='fas fa-star color-yellow fa-sm' />
                      <i className='fas fa-star color-yellow fa-sm' />
                      <i className='fas fa-star color-yellow fa-sm' />
                      <i className='fas fa-star color-yellow fa-sm' />
                      <i className='fas fa-star color-yellow fa-sm' />
                    </span>
                    <span className='font-12'>מתוך 2341 ביקורות משתמשים</span>
                  </div>
                  <div className='col-7'>
                    <h2 className='color-pink'>ארוחת משקה</h2>
                    <h6 className='color-blue'>
                      החבר שלך לבוקר מזין או לכל פעם שרוצים ארוחה קלה, מזינה
                      ובמעט קלוריות
                    </h6>
                  </div>
                </div>
                <div className='row mr-0'>
                  <div className='col-6 text-center'>
                    <h6>ברכישה זו תוכלו לצבור 100 קרדיטים</h6>
                  </div>
                  <div className='col-6 color-blue'>
                    <i className='fas fa-star fa-lg color-pink' />
                    <span className='color-blue font-weight-bold'>
                      115 ש״ח | 100 לחברים מועדפים
                    </span>
                  </div>
                  <div className='col-12'>
                    <hr />
                  </div>
                </div>
                <div className='row mr-0'>
                  <div className='col-8 border-right-2'>
                    <div className='row mr-0'>
                      <div className='col-7 col-lg-8 text-center'>
                        <button className='blue-button h-75 w-lg-100 mt-3'>
                          הוספה לסל
                        </button>
                      </div>
                      <div className='col-5 col-lg-4'>
                        <h6>בחרו כמות</h6>
                        <input
                          type='number'
                          defaultValue={0}
                          className='text-right quantity-input'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4 text-right'>
                    <h6>בחרו טעם</h6>
                    <span className='d-inline-flex text-right'>
                      <span className='bg-blue circle-div m-2' />
                      <span className='bg-pink circle-div m-2' />
                      <span className='bg-green circle-div m-2' />
                    </span>
                  </div>
                  <div className='col-12'>
                    <hr />
                  </div>
                </div>
                <div className='row mr-0'>
                  <div className='col-12 text-right'>
                    <p className='w-75 float-right'>
                      בארוחה, שהיא סופר טעימה, עשירה בערכים תזונתיים שכוללים
                      חלבון עם כל חומצות האמינו החיוניות לחידוש ובנייה,
                      ויטמינים, מינרלים וסיבים תזונתיים. כך באופן פרקטי אנחנו
                      נותנים לגוף את מה שהוא צריך לתזונה מאוזנת שתאפשר לנו
                      להרגיש שבעים וקלילים ולנהל משקל נכון בנוחות
                    </p>
                  </div>
                  <div className='col-12'>
                    <h6 className='color-blue'>
                      למה לשלב את ארוחת המשקה בסדר היום?
                    </h6>
                    <p className='w-75 float-right'>
                      בעולם של היום שקשה לשמור על תזונה מאוזנת אנו רואים גדילה
                      בתופעת ההשמנה ובבעיות בריאות שפוגעים באיכות החיים – רובם
                      הם תוצאה של תזונה לא מאוזנת. יום תזונתי מאוזן חייב לכולל
                      את כל מרכבי המזון שהגוף זקוק לצורך בניה, והתחדשות התאים
                      ולצורך אנרגיה. יחד עם זאת לשמר על ערך קלורי מותאם לאורח
                      החיים היושבני. ארוחת המשקה מנגישה לנו ב2 ד׳ הכנה, ארוחה
                      מלאה ומאוזנת, משביעה, סופר טעימה ויחד עם זאת עם ערך קלורי
                      נמוך. שילוב ארוחת המשקה בסדר היום מספק לגוף תזונה עשירה
                      ומאוזנת שמאפשרת לגוף לתפקד במיטבו, נרגיש יותר אנרגיה,
                      חיוניות, העור יראה קורן יותר ויהיו לנו פחות חשקים לאכילה
                      לא מבוקרת.
                    </p>
                  </div>
                  <div className='col-12 pr-0'>
                    <hr />
                    <div className='row mr-0'>
                      <div className='col-2'>
                        <i
                          id='headingOne'
                          className='fas fa-plus color-pink cursor-pointer toggle-button'
                          data-toggle='collapse'
                          data-target='#collapseOne'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        />
                      </div>
                      <div className='col-10 text-right'>
                        <h6>למי המוצר הזה מתאים?</h6>
                      </div>
                    </div>
                    <div
                      id='collapseOne'
                      className='row mr-0 collapse'
                      aria-labelledby='headingOne'
                    >
                      <div className='col-12'>test data</div>
                    </div>
                    <hr />
                    <div className='row mr-0'>
                      <div className='col-2'>
                        <i
                          id='heading2'
                          className='fas fa-plus color-pink cursor-pointer toggle-button'
                          data-toggle='collapse'
                          data-target='#collapse2'
                          aria-expanded='true'
                          aria-controls='collapse2'
                        />
                      </div>
                      <div className='col-10 text-right'>
                        <h6>איך ומתי לשלב את המוצר כדי להפיק את המקסימום?</h6>
                      </div>
                    </div>
                    <div
                      id='collapse2'
                      className='row mr-0 collapse'
                      aria-labelledby='heading2'
                    >
                      <div className='col-12'>test data2</div>
                    </div>
                    <hr />
                    <div className='row mr-0'>
                      <div className='col-2'>
                        <i
                          id='heading3'
                          className='fas fa-plus color-pink cursor-pointer toggle-button'
                          data-toggle='collapse'
                          data-target='#collapse3'
                          aria-expanded='true'
                          aria-controls='collapse3'
                        />
                      </div>
                      <div className='col-10 text-right'>
                        <h6>מה כוללת ארוחת המשקה?</h6>
                      </div>
                    </div>
                    <div
                      id='collapse3'
                      className='row mr-0 collapse'
                      aria-labelledby='heading3'
                    >
                      <div className='col-12'>test data2</div>
                    </div>
                    <hr />
                    <div className='row mr-0'>
                      <div className='col-2'>
                        <i
                          id='heading4'
                          className='fas fa-plus color-pink cursor-pointer toggle-button'
                          data-toggle='collapse'
                          data-target='#collapse4'
                          aria-expanded='true'
                          aria-controls='collapse4'
                        />
                      </div>
                      <div className='col-10 text-right'>
                        <h6>דרכי הכנה</h6>
                      </div>
                    </div>
                    <div
                      id='collapse4'
                      className='row mr-0 collapse'
                      aria-labelledby='heading4'
                    >
                      <div className='col-12'>test data2</div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 p-4 product-break'></div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 text-center p-3'>
            <h5 className='color-blue'>חברים תומכים שעוד חברים אהבו:</h5>
          </div>
          <div className='col-12 p-0 pl-4'>
            <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mr-0 friend-div'>
              <div className='col p-3'>
                <div className='friend-card'>
                  <img
                    className='card-img-top product-image'
                    src={'/assets/images/fr1.png'}
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
                    src={'/assets/images/fr2.png'}
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
                    src={'/assets/images/fr3.png'}
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
                    src={'/assets/images/fr2.png'}
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
                    src={'/assets/images/fr2.png'}
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
                    src={'/assets/images/fr3.png'}
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
        <div className='row mr-0'>
          <div className='col-12 p-3 text-center'>
            <h5 className='color-blue'>ביקורות משתמשים</h5>
          </div>
          <div className='col-12 p-3'>
            <div className='row mr-0 pr-4'>
              <div className='col-12 col-lg-6 p-0'>
                <div className='row mr-0'>
                  <div className='col-9 text-right'>
                    <span className='d-block'>
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                    </span>
                    <p className='mt-4 w-75 float-right'>
                      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר
                      בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט -
                      לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך
                      רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי,
                      צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק
                      יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת
                      צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי
                      מורגם בורק? לתיג ישבעס.
                    </p>
                  </div>
                  <div className='col-3 p-3 text-center'>
                    <img
                      src={'/assets/images/nm1.png'}
                      alt='img'
                      className='review-img'
                    />
                    <span className='color-blue mt-2 d-flex font-bold'>
                      אדם, 35, תל-אביב
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6 p-0'>
                <div className='row mr-0'>
                  <div className='col-9 text-right'>
                    <span className='d-block'>
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                    </span>
                    <p className='mt-4 w-75 float-right'>
                      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר
                      בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט -
                      לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך
                      רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי,
                      צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק
                      יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת
                      צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי
                      מורגם בורק? לתיג ישבעס.
                    </p>
                  </div>
                  <div className='col-3 p-3 text-center'>
                    <img
                      src={'/assets/images/nm2.png'}
                      alt='img'
                      className='review-img'
                    />
                    <span className='color-blue mt-2 d-flex font-bold'>
                      אדם, 35, תל-אביב
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6 p-0'>
                <div className='row mr-0'>
                  <div className='col-9 text-right'>
                    <span className='d-block'>
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                    </span>
                    <p className='mt-4 w-75 float-right'>
                      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר
                      בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט -
                      לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך
                      רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי,
                      צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק
                      יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת
                      צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי
                      מורגם בורק? לתיג ישבעס.
                    </p>
                  </div>
                  <div className='col-3 p-3 text-center'>
                    <img
                      src={'/assets/images/nm3.png'}
                      alt='img'
                      className='review-img'
                    />
                    <span className='color-blue mt-2 d-flex font-bold'>
                      אדם, 35, תל-אביב
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6 p-0'>
                <div className='row mr-0'>
                  <div className='col-9 text-right'>
                    <span className='d-block'>
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                      <i className='fas fa-star color-yellow' />
                    </span>
                    <p className='mt-4 w-75 float-right'>
                      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר
                      בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט -
                      לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך
                      רוגצה. לפמעט מוסן מנת. צש בליא, מנסוטו צמלח לביקו ננבי,
                      צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק
                      יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת
                      צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי
                      מורגם בורק? לתיג ישבעס.
                    </p>
                  </div>
                  <div className='col-3 p-3 text-center'>
                    <img
                      src={'/assets/images/nm1.png'}
                      alt='img'
                      className='review-img'
                    />
                    <span className='color-blue mt-2 d-flex font-bold'>
                      אדם, 35, תל-אביב
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 pt-2 pb-4 text-center'>
            <button className='blue-button'>קראו עוד</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetailsPage;
