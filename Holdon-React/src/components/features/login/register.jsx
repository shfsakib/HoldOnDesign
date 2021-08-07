import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import agent from '../../../api/agent';
import { toast } from 'react-toastify';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      phone: Yup.string().required().min(6),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      agent.Auth.register(values).then(response => {
        console.log(response);
        toast.success("registered successfully");
        setSubmitting(false);
        resetForm({});
      }).catch(error => {
        console.log(error.message);
        toast.error("register failed, try again");
        setSubmitting(false);
      })
     
    },
  });
  return (
    <Fragment>
      <div className='col-lg-6 p-3 text-center text-lg-right'>
        <div className='row text-right'>
          <div className='col-12 text-right'>
            <div className='bg-green p-3 w-75 float-right text-center'>
              אני רוצה להצטרף!
            </div>
          </div>
        </div>
        <div className='row text-right'>
          <div className='col-12 text-right'>
            <h3 className='font-weight-bold color-blue'>
              נרשמים לאתר HoldOn כחברים
            </h3>
            <h4 className='color-blue'>
              ונהנים מהנחות והטבות כבר מהקנייה הראשונה!
            </h4>
          </div>
        </div>
        <div className='row text-right'>
          <div className='col-12 text-right'>
            <div className='bg-light-red p-3 w-75 float-right text-right color-blue'>
              איזה יופי! עכשיו, כשהמוצרים של HoldOn יהיו החברים הכי טובים שלך
              בניהול אורח חיים בריא, יהיו לך 15% הנחה על כל המוצרים, הטבות
              מדליקות והרבה הפתעות.
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 pt-2 text-right'>
            <input
              type='text'
              className='normal-input w-75'
              placeholder='שם'
              {...formik.getFieldProps('firstname')}
            />
          </div>
          <div className='col-12 pt-2 text-right'>
            <input
              type='text'
              className='normal-input w-75'
              placeholder='שם'
              {...formik.getFieldProps('lastname')}
            />
          </div>
          <div className='col-12 pt-2 text-right'>
            <input
              type='text'
              className='normal-input w-75'
              placeholder='מספר טלפון'
              {...formik.getFieldProps('phone')}
            />
          </div>
          <div className='col-12 pt-2 text-right'>
            <input
              type='text'
              className='normal-input w-75'
              placeholder='דואר אלקטרוני'
              {...formik.getFieldProps('email')}
            />
          </div>
          <div className='col-12 pt-2 text-right'>
            <input
              type='password'
              className='normal-input w-75'
              placeholder='בחרו סיסמא'
              {...formik.getFieldProps('password')}
            />
          </div>
          <div className='col-12 pt-2 text-right'>
            
            <button
              className='blue-button w-75 bg-green border-0 p-2'
              disabled={!formik.isValid || formik.isSubmitting}
              onClick={formik.handleSubmit}
            >
              כן, אשמח להצטרף למועדון החברים ולקבל הטבות
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
