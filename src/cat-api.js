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



   export function fetchCatByBree(id) {
    return fetch(`https://api.thecatapi.com/v1/images/search?&breed_ids=${id}&api_key=${MY_KEY}`)
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
    }
      return response.json();
  })};