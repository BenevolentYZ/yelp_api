import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = 'QRqGVwAHF0r0_COcrPtJIGtk_zgaTIULcHvPX_h8em_INClcg0DDPp1yN1x4VDCCNKCneQ56rtM0trnaJaQeuPC8rZ3KQWcWfV6EGrf2ST_Ej6aqlkwXag7iOPRVXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_Code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                })
            }
        });
    }
}

export default Yelp;