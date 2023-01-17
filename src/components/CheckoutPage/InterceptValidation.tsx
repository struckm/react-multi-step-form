// Helper styles for demo
// import './helper.css';
import { MoreResources, DisplayFormikState } from './helper';

import React from 'react';
import { render } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const InterceptValidation = () => (
  <div className="app">
    <h1>
      Basic{' '}
      <a
        href="https://github.com/jaredpalmer/formik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Formik
      </a>{' '}
      Demo
    </h1>

    <Formik
      initialValues={{ email: '' }}
      onSubmit={async (values) => {
        console.log('values', values);
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Required'),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isValid,
        } = props;
        return (
          <form
            onSubmit={(e) => {
              // alert(isValid);
              // console.log(touched);

              isValid
                ? handleSubmit(e)
                : alert('Handle your custom method instead here');
            }}
          >
            <label htmlFor="email" style={{ display: 'block' }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>

    <MoreResources />
  </div>
);

export default InterceptValidation;
