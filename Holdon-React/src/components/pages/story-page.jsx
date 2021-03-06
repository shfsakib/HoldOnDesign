import React, { Fragment } from 'react';

const StoryPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>הסיפור שלנו</h2>
          </div>
        </div>
        <div className='row mr-0'>
          <div className='col-12 p-0 bg-black'>
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
        <div className='row mr-0'>
          <div className='col-12 p-5 bg-pink text-center'>
            <h6 className='w-50 m-auto'>
              הבידול המרכזי שלנו אינו טמון במוצרים שלנו אלה בסיבה שלשמה הם
              נוצרו. מוצרי ההשלמה שלנו יוצרו על מנת לענות על צורך צרכני מובהק
              ועל רעב צרכני שלא ניתנו לו עד היום מענה ראוי מעולם.
            </h6>
          </div>
        </div>
        <div className='row mr-0'>
          <div className='container'>
            <div className='row mr-0'>
              <div className='col-12 col-lg-6 p-3 top-order'>
                <img
                  src={'assets/images/str1.png'}
                  alt='story-product'
                  className='storyProduct-pic'
                />
              </div>
              <div className='col-12 col-lg-6 p-5 bottom-order text-right'>
                <p className='text-right font-14'>
                  מאות מיליוני אנשים בעולם שואפים ורוצים לאכול בריא ולרזות בעזרת
                  מגוון עצום של דיאטות ותכניות הרזיה, אך רובם ככולם אינם מצליחים
                  להכיל את הדיאטות הללו משתי סיבות מרכזיות: 1. קשיים לוגיסטים
                  הקשורים בקיום הדיאטה/תכנית ההרזיה/אורח החיים הבריא (לדוגמה:
                  מחסור בזמן בלהכין את המנות ואת הארוחות הבריאות). 2. קושי
                  פסיכולוגי בלהתמיד במשטר תזונה קשוח, מתנזר ומדכא לאורך זמן.
                  בניגוד למוצרים אחרים שנוצרו על מנת לספק בדרך קלה ובאופן מדוד
                  רכיב כזה או אחר, המוצרים שלנו נוצרו על מנת לתמוך בכל אותם
                  אנשים שמנסים לנהל אורח חיים בריא או להשיל משקל ונשברים שוב
                  ושוב. בעוד שמטרת המוצרים האחרים הוא המוצר עצמו, המטרה שלנו היא
                  להוות תמיכה והשלמה לכל מי שרוצה לנהל אורח חיים בריא ומשקל נכון
                  מוצרי ההשלמה שלנו הם ההבדל בין אדם שמתחיל לנהל אורח חיים בריא
                  / דיאטה / תכנית הרזיה ונשבר באמצע לבין אדם שמתחיל בשינוי ומאמץ
                  אותו כאורך חיים קבוע ומהנה. המוצרים שלנו נוצרו על מנת להפוך את
                  אורח החיים הבריא / דיאטות / תכניות הרזיה ומשטרי מזון קפדניים
                  וקשוחים למשהו ידידותי, כייפי, קל לתפעול וטעים. בניגוד לכל שאר
                  המוצרים שהם מוצר STAND ALONE, המשמעות והתכלית היחידה של
                  המוצרים שלנו מתקיימת כמוצר משלים ותומך לניהול שגרת חיים בריאה.
                  למעשה מוצרי ההשלמה שלנו מהווים קטגוריה בפני עצמה. לא קיימת
                  כיום קטגוריה כזו לא בארץ ולא בעולם וכראייה לכך ניתן לראות את
                  הסטטיסטיקות ואת הנתונים העגומים המראים שמרבית האנשים פשוט לא
                  מצליחים לשמור על שגרת תזונה בריאה לאורך זמן. מוצרי ההשלמה שלנו
                  הם המוצר היחיד בשוק שפותר את הכאב הצרכני העמוק הזה.
                </p>
                <h6 className='color-blue'>
                  מי לא היה רוצה לדעת שניהול אורח החיים הבריא / שהדיאטה / שתכנית
                  ההרזיה שלו תהיה אפקטיבית לא רק בחודשים הקרובים, אלא לתמיד?
                </h6>
              </div>
            </div>
            <div className='row mr-0 ml-0 pl-3 pr-0'>
              <div className='col-12 col-lg-3 p-4 bg-green'>
                <img
                  src={'/assets/images/str2.png'}
                  alt='story_logo'
                  className='ideal-pic'
                />
              </div>
              <div className='col-12 col-lg-9 p-4 bg-blue text-right'>
                <p className='color-white font-weight-bold'>
                  מי לא היה רוצה לדעת שהוא מסוגל לא רק לרדת במשקל אלא להצליח
                  לנהל אורך חיים בריא שמאפשר לו לשמור על המשקל החדש שלו בנוחות
                  ולתמיד?
                  <br />
                  הבעלים של החברה, אלי אלימלך, הקים את חברת הולד און עם מוצרי
                  ההשלמה הייחודיים שלה כדי לפתור בעיה שחזרה על עצמה אצל הרבה
                  מאוד אנשים אותם הוא אימן להרזיה ובניית שגרת תזונה נכונה.{' '}
                  <br />
                  הרכב המוצרים של הולד און ואיכותם הוא האמצעי לפתור את הבעיה הזו
                  ולכן תוכננו במיוחד עבור אותו צורך, בעוד שבשאר המוצרים הקיימים
                  בשוק, לדוגמה מוצרים מעושרי חלבון, – רמת החלבון הגבוה היא
                  המטרה. מדובר בהבדל מהותי.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row mr-0 ml-0 pl-3 pr-0'>
          <div className='col-12 col-lg-6 p-3 top-order'>
            <img src={'/assets/images/str3.png'} alt='story-pic' className='ideal-pic' />
          </div>
          <div className='col-12 col-lg-6 p-4 bottom-order text-right'>
            <h6 className='color-blue'>קהלי היעד שלנו</h6>
            <p className='text-right w-100 font-16'>
              קהל היעד של מוצרי ההשלמה שפיתחה הולד און הוא מגוון:
              <br />
              1. כל מי שרוצה פתרון פשוט ופרקטי כדי להוביל אורח חיים בריא ולא
              ליפול ולהגיב לאילוצי הזמן, יכולת ההתארגנות ושפע המזונות עתירי
              סוכר/שומן /מלח שמקיפים אותנו באורח החיים המודרני שבו אנחנו חיים
              <br />
              2. כל מי שרוצה לרדת במשקל במסגרת דיאטה מכל סוג ורוצה לשמור על
              איזון תזונתי נכון באופן פרקטי ונוח
              <br />
              3. כל מי שרוצה לרדת במשקל במסגרת תכנית הרזיה מכל סוג וצריך פתרונות
              זמינים ובריאים להתארגנות קלה
              <br />
              4. כל מי שרוצה לסגל לעצמו אורח חיים בריא ומאוזן כחלק אינטגרלי
              מהחיים, מבלי צורך להתאמץ הרבה בהכנה, בהתארגנות ובלי הידע כדי לשמור
              על איזון נכון בתזונה
              <br />
              5. כל מי שעוסק בספורט ורוצה לסגל לעצמו משטר אכילה בריא ומאוזן
              ומותאם לצרכים הגופניים
              <br />
              6. כל מי שניסה אין ספור דיאטות / תכניות הרזיה ונכשל שוב ושוב ושוב
              – כי הוא חייב משהו פרקטי שיקל עליו ביישום
              <br />
              7. כל מי שחושב שדיאטה / תכנית הרזיה הם דברים המצריכים כח רצון
              מטורף וסגפנות יגלה לשזה גם יכול להיות פשוט, טעים ואפילו כיף
              <br />
              8. כל מי שמרגיש שהמשמעות של דיאטה / תכנית הרזיה הוא פשוט סבל
              והקרבה אינסופיים יגלה שתכנון נכון עם מוצרי תמיכה פרקטיים, משביעים
              וטעימים ישנו לגמרי את החוויה
              <br />
              9. כל מי שחש שאין לו זמן כדי להכין חלק מהמנות הנדרשות במסגרת
              הדיאטה / תכנית ההרזיה שהוא משתתף בה יקבל פתרונות מאוזנים, פשוטים
              שקל לשלב במהלך היום וגם סופר טעימים
              <br />
              10. כל אדם שרוצה לאכול בריא, מזין, משביע מבלי להתאמץ כדי לרדת
              המשקל, לשמור על אורח חיים מאוזן מבלי להתעסק כל היום עם האוכל
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StoryPage;
