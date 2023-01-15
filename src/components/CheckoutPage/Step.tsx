import { AddressForm, PaymentForm } from './Forms';
import { ReviewOrder } from './ReviewOrder';
import { CheckoutSuccess } from './CheckoutSuccess';
import checkoutFormModel from './FormModel/checkoutFormModel';

const Step = (props: any) => {
  const { step, setStep } = props;
  const { formField } = checkoutFormModel;
  switch (step) {
    case 0:
      return (
        <AddressForm formField={formField} step={step} setStep={setStep} />
      );
    case 1:
      return (
        <PaymentForm formField={formField} step={step} setStep={setStep} />
      );
    case 2:
      return <ReviewOrder step={step} setStep={setStep} />;
    case 3:
      return <CheckoutSuccess />;
    default:
      return <div>Not Found</div>;
  }
};

export default Step;
