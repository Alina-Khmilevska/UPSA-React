const fetchCities = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
        }
      });
      console.log(response);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.cities.map(city => city.name); // Adjust this line based on the actual structure of the response
    } catch (error) {
      console.error("Could not fetch cities:", error);
      return []; // Return an empty array or handle the error as needed
    }
  };
  
  export default fetchCities;
  