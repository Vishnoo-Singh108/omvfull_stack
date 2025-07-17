import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter} from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx';

 import './index.css'
import App from './App.jsx'
import Academic from './pages/Academic.jsx';  

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<AppContextProvider>
<App />
</AppContextProvider>
    
    
   
  </BrowserRouter>,
)
