import { Box, Button, TextField, Grid } from "@mui/material";
import React from "react";
import Adresscatr from "../adresscart/Adresscatr";

const Adddelevery = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };


  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <Adresscatr />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="larger"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        {/* First Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last Name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            multiline
            rows={4}
            autoComplete="address-line1"
          />
        </Grid>

        {/* City */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level2"
          />
        </Grid>

        {/* State/Province */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province"
            fullWidth
            autoComplete="address-level1"
          />
        </Grid>

        {/* Zip/Postal Code */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip/Postal Code"
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>

        {/* Phone Number */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="tel"
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            sx={{ mt: 2, py: 2, bgcolor: 'RGB(145 85 253)', width: '100%' }}
            size="large"
            variant="contained"
            type="submit"
          >
            Deliver Here
          </Button>
        </Grid>
      </Grid>
    </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Adddelevery;
