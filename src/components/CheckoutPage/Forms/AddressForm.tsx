import React, { useContext } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';
import useStyles from '../styles';

const cities = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '1',
    label: 'New York',
  },
  {
    value: '2',
    label: 'Chicago',
  },
  {
    value: '3',
    label: 'Saigon',
  },
];

const states = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '11',
    label: 'Florida',
  },
  {
    value: '22',
    label: 'Michigan',
  },
  {
    value: '33',
    label: 'Texas',
  },
];

const countries = [
  {
    value: null,
    label: 'None',
  },
  {
    value: '111',
    label: 'United States',
  },
  {
    value: '222',
    label: 'Italy',
  },
  {
    value: '333',
    label: 'Vietnam',
  },
];

export default function AddressForm(props: any) {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
    },
    step,
    setStep,
  } = props;
  const classes = useStyles();
  const isSubmitting = false;
  const isLastStep = false;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <div className={classes.wrapper}>
          <Button
            disabled={isSubmitting}
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
