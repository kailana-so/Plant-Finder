# GenusGenius

![app image](/app.png)

** This project is in production **

https://genus-genius.herokuapp.com/

GenusGenius is a web app design to assist with the identification and locating of plant species on location.

This single-page app currently has three methods for exploring different plants species in your area:

- Image identification
- Intelligent searching
- Google maps

## Image identification

The image identification function leverages an IDing API that uses AI to match a user's uploaded image with similar images, returning a probability rate and classification information. From the results, users can determine the correct match and mark it as a "sighting", which stores the data and the geolocation of the sighting in the database. The information is then updated within the Google map component.

## Intelligent searching

The intelligent search function allows a user to query plants more colloquially than direct hits to the DB. A user can say, `Hey, show me red and yellow flowers in Sydney`, the be returned listing that includes keywords: `"red", "yellow", "flowers", "Sydney"`.

This function will be further built out with an NLP API.

## Google Maps

The Google Maps component functions like an index of all listing added to the database. A User can search and explore the data via the marker tooltip to find out more about the plants in specific areas.


## Technologies

- React Front-end
- Express backend
- PlantID API
- Google Maps API
- Postgres
- Knex (promises)
- axios
- geolocation API


## Futher builds

- User Author
- Modal windows and UI functionality