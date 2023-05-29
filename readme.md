Welcome to PlaceMark Community Version!
<img src="https://github.com/emanlapaz/PlacemarkBeta/blob/master/public/images/welcome.jpg">

Assignment 2: 
URL https://placemarkbeta-community.onrender.com

Changes and features:

UI:
1. Created a Community Tab in which users can share their Placemark Location with other users.

<img src="https://github.com/emanlapaz/PlacemarkBeta/assets/96552779/aa63ed24-4e68-4268-bf80-e8e5e3b84a5b">
<img src="https://github.com/emanlapaz/PlacemarkBeta/assets/96552779/2ef0643b-e255-475b-8292-8131fe8ab28f">

2. Users can toggle their placemarks between Private and Public.

<img src="https://github.com/emanlapaz/PlacemarkBeta/assets/96552779/e227fe45-8fcd-4587-9264-27b70e59a24e">

3. Users can edit Placemark location name, coordinates and Privacy status.

<img src="https://github.com/emanlapaz/PlacemarkBeta/assets/96552779/bbff8156-1b99-43df-a8f0-fba646683be8">

6. Placemark list changed to cards
7. Leaflet maps on different pages





Security:
1. Password Hashed and Salted using Bcrypt

Testing:
1. Cypress e2e testing for signup/login, adding placemarks

Tech:
1. Mongo Atlas DB
2. Render for deployment

To dos:
1. Add social functionality on the Community tab such as reviews, noticeboards, Vote/rating system
2. Improve Cypress e2e testing
3. Improve UI
4. Add Map layers and Weather Status


================================================================================================
================================================================================================
Welcome to PlaceMark Beta!
Fullstack Assignment 1: Placemark Beta
Render Web Service Link: https://placemarkbeta1-0.onrender.com

How it works:
PlaceMark is an web app where you can add Locations and Points of Interests.
Locations can be a City, Town, Counties, or Countries depending on the user.
<img src="https://github.com/emanlapaz/PlacemarkBeta/blob/master/public/images/addPlacemarks.png">

Points of Interests can be anything from landmarks, restaurants, etc.
<img src="https://github.com/emanlapaz/PlacemarkBeta/blob/master/public/images/Points.png">


Inside each location, you can add points of interests by adding a Point Name and coordinates (latitude/longitude).
The coordinates will then show the location in the map via a marker. You can also add a small description and category(drop down menu).
<img src="https://github.com/emanlapaz/PlacemarkBeta/blob/master/public/images/addPoint_upload.png">
The details added will show as a card. You can edit or delete the cards.
<img src="https://github.com/emanlapaz/PlacemarkBeta/blob/master/public/images/pointCards.png">

There is also an option to upload a placemark image on the bottom of the page.
<img src="https://github.com/emanlapaz/PlacemarkBeta/blob/master/public/images/addPoint_upload.png">

In depth details:
1. Accounts: I have the basic Signup/Login with cookie authentication. User page page set up but not yet completed.
2. PlaceMark Features: Name, location. description, categories and Images(upload) fully functional.
3. Api Tests: JWT+TESTS added
<img src="https://github.com/emanlapaz/PlacemarkBeta/blob/master/public/images/test.png">
4. Models: I used the mem, Json, Mongo, Mongo atlas. The data are seeded during start up. I used cloudinary to save the uploaded images.
<img src="https://github.com/emanlapaz/PlacemarkBeta/blob/master/public/images/mongo_atlas.png">
5. Deployment: I used Render to deploy the web app. Link above.
6. Git Repo: 2 tagged releases. Merged mongo branch to Master.

To dos:
1. Add weather api on the placemarks. using the location to get the readings from OpenWeather API.
2. Add an option to upload an image during Placemarks and Points creation.
3. Finish User settings.
4. Delete option on uploaded image not functional. to be completed.
5. Gallery page to display added images.

Bugs:
1. Test fails on deleteallplacemarks at times. Something to do with the fixtures?
2. Data entered are gone when app is closed. Must be something with the seeder overwriting the data on the data base during startup
3. Sign up function failing- register

Render Web Service Link: https://placemarkbeta1-0.onrender.com



