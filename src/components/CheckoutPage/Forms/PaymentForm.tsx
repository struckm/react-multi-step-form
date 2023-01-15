import React, { useContext } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';
import useStyles from '../styles';

export default function PaymentForm(props: any) {
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv },
    step,
    setStep,
  } = props;
  const classes = useStyles();
  const isLastStep = false;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={nameOnCard.name}
            label={nameOnCard.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={cardNumber.name}
            label={cardNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button onClick={() => setStep(step - 1)} className={classes.button}>
          Back
        </Button>
        <div className={classes.wrapper}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              setStep(step + 1);
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
