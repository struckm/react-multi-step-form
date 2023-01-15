import React, { useState, useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import { Form, Formik, FormikHelpers } from 'formik';
import Step from './Step';
import validationSchema from './FormModel/validationSchema';
import formInitialValues from './FormModel/formInitialValues';
import checkoutFormModel from './FormModel/checkoutFormModel';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const { formId } = checkoutFormModel;

  function _sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(
    values: Array<string>,
    actions: FormikHelpers<Array<string>>
  ) {
    await _sleep(500);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep && setActiveStep(activeStep + 1);
  }

  function _handleSubmit(
    values: Array<string>,
    actions: FormikHelpers<Array<string>>
  ) {
    // handle submits
    console.log('form has been submitted');

    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep && setActiveStep(activeStep + 1);
      actions.setTouched([false]);
      actions.setSubmitting(false);
    }
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Formik
        initialValues={formInitialValues}
        onSubmit={_handleSubmit}
        validationSchema={currentValidationSchema}
      >
        <Form id={formId}>
          <Step step={activeStep} setStep={setActiveStep} />
        </Form>
      </Formik>
    </React.Fragment>
  );
}
