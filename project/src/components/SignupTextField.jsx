import React from 'react';
import { Grid, TextField, InputAdornment, IconButton, Box, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function SignupTextField({ texttype,fieldname ,value, onChange }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete={texttype}
          name={texttype}
          required
          id={texttype}
          label={fieldname}
          value={value}
          onChange={onChange}
          autoFocus
        />
      </Grid>
    </Grid>
  );
}

export function PasswordField({ texttype,fieldname, value, onChange,error,helperText }) {
  const isPasswordField = () =>texttype.toLowerCase().includes("password");
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
          name={texttype}
          label={fieldname}
          type={isPasswordField ? "password" : "text"}
          id={texttype}
          autoComplete={isPasswordField ? 'current-password' : 'off'}
          value={value}
          onChange={onChange}
          error={error}
          helperText={helperText}
        />
      </Grid>
    </Grid>
  );
}


export function SearchField({ texttype,fieldname, value, onChange }) {
  const handleSearchClick = () => {
    alert("아직 구현중인 기능입니다.");
  };
  return (
    
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete={texttype}
          name={texttype}
          required
          id={texttype}
          label={fieldname}
          value={value}
          onChange={onChange}
          autoFocus
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearchClick} universityName={value}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
