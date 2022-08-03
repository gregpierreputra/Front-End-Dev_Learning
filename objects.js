// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let listing = {
    name: "San Giusto Abbey [Medieval Tower]",
    location: "Tuscania",
    images: ["img1", "img2", "img3", "img4", "img5"],
    maximumGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    description: [4, 2, 2, 2],
    rating: 5.0,
    numTimesRated: 173,
    reviews: 271,
    isSuperhotHost: true,
    isBooked: false,
    isFavourited: false
};

console.log(listing.name);

console.log(listing.location);

console.log(listing.description[0] + " guests - " + listing.description[1] + " bedrooms - " +                   listing.description[2] + " beds - " + listing.description[3] + " baths");

console.log("The property has been rated: %i times", listing["numTimesRated"]);

console.log("The property's rating is %f out of %f", listing["rating"], 5.0);