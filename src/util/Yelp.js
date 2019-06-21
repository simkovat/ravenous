const apiKey = 'Mn2G99kyu4QBQ9LvvilBWEi2-8vVVtkLw4iirOlae8zFDmabmfC5oawoy6Y2JoHYOlYm8XPND7tVKATpbrWKZOQwS8PIVNqY37lAD7m81XfK2aDsV76NGYCM0KlNXHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch((`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`),
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })
        .then(response => {
           if (response){ 
            return response.json();
           } else {
               console.log('the response is false T'); // should be later changed to error maybe
           }
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            } else {
                console.log('the response json is false');  // should be later changed to error maybe
            }
        });
    }
};



export default Yelp;