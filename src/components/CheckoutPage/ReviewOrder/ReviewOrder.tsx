import React, { useContext } from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid, Button } from '@material-ui/core';
import ProductDetails from './ProductDetails';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';
import useStyles from '../styles';
import validationSchema from '../FormModel/validationSchema';

export default function ReviewOrder(props: any) {
  const { step, setStep } = props;
  const { values: formValues } = useFormikContext();
  const classes = useStyles();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const parseForm = await validationSchema.validate(formValues);
      console.log('validation result', parseForm);
    } catch (e: any) {
      alert(`Form is not valid. error: ${e.errors[0]}`);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ProductDetails />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid>
      <div>
        <div className={classes.wrapper}>
          <Button onClick={() => setStep(step - 1)} className={classes.button}>
            Back
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            Place order
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
