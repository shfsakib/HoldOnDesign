import React, { Fragment } from 'react';
import Login from '../features/login/login';
import Register from '../features/login/register';

const LoginPage = () => {
  return (
    <Fragment>
      <div>
        <div className='row mr-0'>
          <div className='col-12 p-2 bg-blue text-center'>
            <h2 className='color-white'>כניסת חברים</h2>
          </div>
        </div>
        <div className='container'>
          <div className='row login pt-4 pb-4'>
              <Register/>
             <Login/>
             </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
