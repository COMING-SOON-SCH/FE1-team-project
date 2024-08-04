import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MakeClub() {
  const [category, setCategory] = React.useState('')
  const [clubName, setClubName] = React.useState('')
  const [introduction, setIntroduction] = React.useState('')
  const [activity, setActivity] = React.useState('')

  return (
    <MakeClubContainer>
      <MakeClubBox>
        <StyledFormControl>
          <TextField label="동아리명" value={clubName} onChange={(e) => setClubName(e.target.value)} />
        </StyledFormControl>
        <StyledFormControl>
          <FormControl>
            <InputLabel>활동 분야</InputLabel>
            <Select
              value={category}
              label="활동 분야"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={'volunteer'}>봉사</MenuItem>
              <MenuItem value={'cook'}>요리</MenuItem>
              <MenuItem value={'cheerleading'}>치어리딩</MenuItem>
            </Select>
          </FormControl>
        </StyledFormControl>
        <StyledFormControl>
          <TextField label="모집 인원" type='number' />
        </StyledFormControl>
        <StyledFormControl>
          <TextField
            label="동아리 소개"
            multiline
            minRows={1}
            maxRows={3}
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            fullWidth
          />
        </StyledFormControl>
        <StyledFormControl>
          <TextField
            label="동아리 소개"
            multiline
            minRows={1}
            maxRows={3}
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            fullWidth
          />
        </StyledFormControl>
        <StyledFormControl>
          <TextField label="예상 활동" value={activity} onChange={(e) => setActivity(e.target.value)} />
        </StyledFormControl>
      </MakeClubBox>
    </MakeClubContainer>
  );
}

const MakeClubContainer = styled.div`
  height: 100vh;
`

const MakeClubBox = styled(Box)`
  background: none;
  border: 1px solid;
  border-radius: 20%;
  width: 90%;
  margin: 100px auto 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledFormControl = styled(FormControl)`
  && {
    width: 70%;
    margin: 20px 0px 20px 0px;
    background: white;
  }
`;