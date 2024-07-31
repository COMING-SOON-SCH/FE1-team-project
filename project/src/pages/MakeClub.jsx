import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MakeClub() {
  const [category, setCategory] = React.useState(null)
  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <MakeClubBox>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" type='number'/>
    </MakeClubBox>
  );
}

const MakeClubBox = styled(Box)`
  background: white;
  border: 1px;
  border-radius: 30%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`