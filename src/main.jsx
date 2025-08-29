import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import App from './App';
import Loading from './Components/Common/Loading';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Loading>
        <App></App>
      </Loading>
    </BrowserRouter>
  </StrictMode>
);
