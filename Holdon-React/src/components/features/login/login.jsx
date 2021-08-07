import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import agent from '../../../api/agent';
import { toast } from 'react-toastify';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required().min(6),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      agent.Auth.login(values).then(response => {
        console.log(response);
        toast.success("logged in successfully");
        setSubmitting(false);
        resetForm({});
      }).catch(error => {
        console.log(error.message);
        toast.error("credentials doesn't match");
        setSubmitting(false);
      })
    },
  });

//   const onChange = (e, field) => {
//       var val = e.target.value.split('');
//       var newChar = val.splice(-1,1)[0];
//       val.splice(0,0,newChar);
//       var newValue = val.join('');
//       formik.setFieldValue(field, newValue);
//   }
  return (
    <Fragment>
      <div className='col-lg-6 p-3'>
        <div className='row text-right'>
          <div className='col-12 text-right'>
            <div className='bg-blue p-3 w-75 float-left text-center'>
              כניסת חברים
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 color-blue text-center h-25 p-3'>
            <h3 className='ml-lg-5 pl-lg-5'>כניסת חברים</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 pt-2 text-right'>
            <input
              type='text'
              dir='rtl'
              className='normal-input w-75 float-left'
              placeholder='שם משתמש (מספר טלפון)'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              name="username"
            />
          </div>
          <div className='col-12 pt-2 text-right'>
            <input
              type='password'
              className='normal-input w-75 float-left'
              placeholder='סיסמה'
              {...formik.getFieldProps('password')}
            />
          </div>
          <div className='col-12 pt-2 text-right'>
            <button
              onClick={formik.handleSubmit}
              className='blue-button bg-blue w-75 float-left text-center'
              disabled={!formik.isValid || formik.isSubmitting}
            >
              התחברות
            </button>
          </div>
          <div className='pt-2 w-75 float-left text-center'>
            <a
              href='#'
              className='font-20 color-black text-decoration-underline font-weight-bold'
            >
              שכחתי סיסמה
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
