const MY_KEY = 'live_iLRatPSgAlxnJZrz1YeGqrOIZ5K0LdV64DMc4pzsCdqTdBslQZVWkBUOGYdaTPBL'
  export function fetchBreeds() {
    const option = {
method: 'GET',
        headers: {
        Autorization: `Bearer ${MY_KEY}`
    }}
    return fetch("https://api.thecatapi.com/v1/breeds").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })};
