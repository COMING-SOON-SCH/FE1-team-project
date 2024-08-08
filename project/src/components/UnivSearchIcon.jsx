import React, { useEffect } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const UnivSearchIcon = (handleSearchClick, universityName) => {
  useEffect(() => {
    const universityurlUrl='http://api.data.go.kr/openapi/tn_pubr_public_univ_major_api'+ universityKey
    const universityKey='xYHNNMhMBHHqBXXwZ5HlQ%2F5qHVXkcufXTOjETt4mUVlUz7At5vj2p%2BIpmpwn0Is%2F9qjq1tYHO8F57cNonbMcHA%3D%3D'
    // OpenAPI 호출
    fetch(universityurlUrl)
      .then(response => response.json())
      .then(data => {
        setSchoolNames(data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

const handleSearchClick = () => {
  const universityList=SCHL_NM.includes(universityName)
  alert("아직 구현중인 기능입니다.");
};

return (  
  InputProps={
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }

)
}

export default UnivSearchIcon;