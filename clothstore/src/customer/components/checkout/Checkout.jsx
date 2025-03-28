import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import Adddelevery from './Adddelevery';
import Ordersummary from './Ordersummary';

const steps = ['Login', 'Delevery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const stepFromUrl = parseInt(querySearch.get("step") || "0", 10);
  const [activeStep, setActiveStep] = React.useState(stepFromUrl);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='px-10  lg:px-20'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
            <div>
              {activeStep === 1 ? <Adddelevery /> : null}
              {activeStep === 2 ? <Ordersummary /> : null}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}