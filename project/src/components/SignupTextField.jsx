import React from 'react';
import { Grid, TextField, InputAdornment, IconButton, Box, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function SignupTextField({ texttype, value, onChange }) {
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
          value={value}
          onChange={onChange}
          autoFocus
        />
      </Grid>
    </Grid>
  );
}

export function PasswordField({ texttype, value, onChange }) {
  const isPasswordField = texttype.toLowerCase().includes("password");
  <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      <FormControl variant="standard">
        <inputlabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </inputlabel>
      </FormControl>
    </Box>
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          name={texttype}
          label={texttype}
          type={isPasswordField ? "password" : "text"}
          id={texttype}
          autoComplete={isPasswordField ? 'current-password' : 'off'}
          value={value}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
}

export function SearchField({ label, value, onChange }) {
  const handleSearchClick = () => {
    alert("아직 구현중인 기능입니다.");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
      label={label}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon onclick={handleSearchClick}/>
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
      </Grid>
    </Grid>
  );
}
