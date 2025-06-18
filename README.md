
# E-Commerce Product Listing App
Using components, props, and state to design a layout without using frameworks like Bootstrap

- organizing code using React components
- Manage state using useState
- Pass and manage data through props btw components
- Strucutre a React application with partent-child heirarchy

## Table of Contents

- App Component [#app]
- ProductList Component [#productList]
- ProductItem Component [#productItem]


## App Component

- implementing useSate to store a list of products (id, name, category, price, description, and image)
- pass product list as props to ProductList
- Apply custom CSS styling for app layout

## ProductList Component

- Recieving product list from App as a props
- Map through the product list, rendering each product using ProductItem
- Applying custom CSS for prodcut list layout


## ProductItem Component

- Display product details: Name, Price, description
- implements props to recieve data and render it dynamically
- Style each product using CSS

## Bonus
- Category Filter: using a 'category' attribute to filter products based on category
- Images: images displayed for each project




## Authors

- [@zachmartens](https://www.github.com/zachmartens)


## Challenges

- I am definitely still in the process of understanding where to implement useState and at what points it is unneccesary
- The introduction of GitHub Copilot is wonderful with suggestions, but I look forward to being able to confidently parse through the suggestions for what I need and want. I found myself doing a lot of side research, thinking 'is that what i want?"


## Lessons Learned

I feel confident about the overal structure and passing from parent to child with my components. With that, I still have some learning to do about the incremental shifts between React and JavaScript -- things like when to use (), {}, and [].

All in all, I feel pretty great about the steps I am making toward building my React skills!




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
