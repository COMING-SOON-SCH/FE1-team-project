import React from 'react';
import { Avatar, Box, Grid, Container} from '@mui/material';

export default function ClubProfile() {
  return (
    <Container sx={{ width: '100%', maxWidth: '100%', margin: 2, padding: 0 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width:100, height:100}}>
      {/* 상단 영역 */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar alt="Profile" src="/static/images/avatar.jpg" sx={{width:100, height:100}}/>
        <Box sx={{ ml: 2 }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>ClubName</div>
            <div style={{ fontSize: '14px' }}>ActivityField</div>
            <div style={{ fontSize: '12px' }}>clubDescription</div>
            <div style={{ fontSize: '12px' }}>ExpectActivity</div>
        </Box>
      </Box>

      {/* 하단 영역 */}
      <Box sx={{ width: '100%', height: 500 }}>
        <Grid container spacing={10}>
          <Grid item xs={200}>
            <Box sx={{ height: '100%', border: '1px solid gray' }} />
          </Grid>
          {/* 나머지 작은 박스들도 동일하게 추가 */}
        </Grid>
      </Box>
    </Box>
    </Container>
  );
}