# React Shopping Cart

# step 1: Create React App

# step 2: Create ProductList component

# step 3: Create Header component

- this component will be having our site title, and cart icon
- import Link from react-router-dom
- make sure the logo/ title and cart are links to home and shopping cart respectively

# step 4: Create Product Component

- create a product card that will be used in product list.

# step 5: Create ProductDetails Component

- this page will display more details about the clicked product
- import useEffect,axios,Link and useParams
- assign const {id} to useParams()
  -- useParams usually gets the params contents
- create an async function to fetch product details
- assign the response from axios to the dispatch
- inside the useEffect hook, confirm that the idisnt blank the n call the fetchProductDetails function
- pass the id as the useEffect dependancy
- in the render part,if the data from the rsponse is an object, in order to check if its empty in order to display the loading div, use Object.keys(name of object).length===0

# Step 6: Create ProductList Component

- here you will map all the products
- we will need to import Link, useeffect,ProductComponent and axios
- create an async function that will fetch the products from the api
- inside the function, pass the response from get axios to dispatch
- inside a useEffect function, call the fetchProduct function

# Step 7: Create Cart Component

# Step 8: Create Routes from app to the individual components
