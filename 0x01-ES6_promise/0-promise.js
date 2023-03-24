export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      const apiResponse = {
        data: 'API response data',
      };
      // Call resolve with the API response data
      resolve(apiResponse);
    }, 1000);

    // Simulate an error
    setTimeout(() => {
      const error = new Error('An error occurred while calling the API');
      // Call reject with the error object
      reject(error);
    }, 2000);
  });
}
