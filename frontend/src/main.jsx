
import ReactDOM from 'react-dom/client';
import App from './App'; 
import './index.css'
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/authContext';
import { RecoilRoot } from 'recoil';


ReactDOM.createRoot(document.getElementById('root')).render(


  <AuthContextProvider>
    <RecoilRoot>
    <App />
    <Toaster /> 
    </RecoilRoot>
  </AuthContextProvider>


);