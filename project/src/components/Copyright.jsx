import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// 파일 삭제 후 재생성
function CopyRight(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://your-website.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default CopyRight;