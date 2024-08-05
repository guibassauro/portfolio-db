import App from '../App';
import Home from '../pages/Home';
import Projetos from '../pages/Projetos';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/projetos",
            element: <Projetos />
        }
      ]
    }
  ])