import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export function SignupTextField({ texttype }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete={texttype}
          name={texttype}
          required
          fullWidth
          id={texttype}
          label={texttype}
          autoFocus
        />
      </Grid>
    </Grid>
  );
}
export function PasswordField({ texttype }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete={texttype}
          name={texttype}
          required
          fullWidth
          id={texttype}
          label={texttype}
          autoFocus
        />
      </Grid>
    </Grid>
  );
}
