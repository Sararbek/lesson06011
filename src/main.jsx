import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/Index.jsx'
import { initialValue, reducer } from './context/Reducer.js'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContextProvider initialValue={initialValue} reducer={reducer} >
            <App />
        </ContextProvider>
    </BrowserRouter>
)
