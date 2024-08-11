const SetCookie = (name, value, options) => {

    options = {
      path: '/', 
      ...options 
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString(); 
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie; // 새로 갱신
  }
  
  //쿠키 생성
export default SetCookie;