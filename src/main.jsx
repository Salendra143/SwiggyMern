import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import appstore from './toolkit/appstore.jsx';
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Body from './components/Body.jsx';
import CartPage from './components/CartPage.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
    
const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      errorElement: <Error/>,
      children:[
        {
          path: '/',
          element: <Body/>
        },
        {
          path: 'restaurant/:resid',
          element: <RestaurantMenu/>
        },
        {
          path: 'cart',
          element: <CartPage/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
      ]
    },
    
])

createRoot(document.getElementById('root')).render(
  <Provider store={appstore}>
    <RouterProvider router={appRouter}/>
  </Provider>
  
);

