import axios from 'axios'

const searchImages = async (term) => {
 const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Fxcmp2-wFoLZl2IsI4hsWIAz7OzL6wKfyc9d3du8zpU',
    },
    params: {
      query: term,
    },
  })
  return response.data.results
}

export default searchImages;
