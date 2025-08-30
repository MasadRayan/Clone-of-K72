import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import App from './App';
import Loading from './Components/Common/Loading';
import NavContext from './Context/NavContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Loading>
        <NavContext>
          <App></App>
        </NavContext>
      </Loading>
    </BrowserRouter>
  </StrictMode>
);
