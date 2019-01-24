# This project was created for the Microsoft Professional Program: Front End Development Capstone Project

To run the app in development mode. It will serve locally on localhost:8080.
If you just pulled the repo, make sure to install npm dependencies first:

### npm install

Then, you can run the app in the local dev server:

### npm run start

This page is hosted on github pages. 
Visit https://mattander.github.io/msft-frontend-capstone/#/](https://mattander.github.io/msft-frontend-capstone/#/) to see the latest build (remember to shift-refresh if you've looked at it before, I didn't add cache busting yet).

## Extra features:

I've added some extra features outside of the rubric that I think help usability and are just good practice for a more flexible web app:
* Current category and current subcategory data are NOT stored in the state, instead they are pulled from the route so that you can navigate directly to a category and subcategory using a link, this also helps to avoid unnecessary synching between state and route
* Products in the grid view are paginated, you can pick between showing 6, 10 or 14 items per page
* If you enter a category, subcategory or product into the URL and it doesn't exist, you get a redirected to the 404 page
* The cart icon in the top right also shows you the total quantity of items that are in your cart
* Products, categories and subcategories are all shown in clickable cards for easy navigation on mobile (large touch targets are better)
