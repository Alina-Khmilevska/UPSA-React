const getFullImageUrl = (partialUrl) => {
    const domain = process.env.REACT_APP_BACKEND_URL;
    return `${domain}${partialUrl}`;
  };
  
  export default getFullImageUrl;
  