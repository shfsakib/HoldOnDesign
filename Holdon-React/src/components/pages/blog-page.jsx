import React, { Fragment } from 'react';

export const BlogPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>הבלוג שלנו</h2>
          </div>
        </div>
        <div className='row mr-0 blog-row'>
          <div className='col-12 col-lg-6 p-5 text-right bottom-order'>
            <div className='float-right mt-lg-5'>
              <h5 className='color-pink'>
                איך מכינים שייק ארוחה מלאה ב-5 דקות?
              </h5>
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.
                תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
                ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. צש
                בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. גולר
                מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם
                סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם
                השמה - לתכי מורגם בורק? לתיג ישבעס.
              </p>
              <button className='blue-button'>קראו עוד</button>
            </div>
          </div>
          <div className='col-12 col-lg-6 p-0 top-order'>
            <img src={'/assets/images/blg1.png'} alt='blog-img' className='blog-img' />
          </div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 col-lg-6 p-0 top-order'>
            <img src={'/assets/images/blg2.png'} alt='blog-img' className='blog-img' />
          </div>
          <div className='col-12 col-lg-6 p-5 text-right bottom-order bg-orange'>
            <div className='float-right mt-lg-5'>
              <h5 className='color-white'>
                מה יש בחטיף לשובע שהוא כל כך משביע וטעים?
              </h5>
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.
                תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
                ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. צש
                בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. גולר
                מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם
                סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם
                השמה - לתכי מורגם בורק? לתיג ישבעס.
              </p>
              <button className='white-button'>קראו עוד</button>
            </div>
          </div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 col-lg-6 p-5 text-right bottom-order'>
            <div className='float-right mt-lg-5'>
              <h5 className='color-pink'>
                מה אדם צריך כדי לנהל אורח חיים מתמשך לאורך זמן בלי נפילות?
              </h5>
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.
                תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
                ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. צש
                בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. גולר
                מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם
                סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם
                השמה - לתכי מורגם בורק? לתיג ישבעס.
              </p>
              <button className='blue-button'>קראו עוד</button>
            </div>
          </div>
          <div className='col-12 col-lg-6 p-0 top-order'>
            <img src={'/assets/images/blg3.png'} alt='blog-img' className='blog-img' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
