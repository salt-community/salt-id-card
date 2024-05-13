import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ClerkProvider} from '@clerk/clerk-react'
import {HashRouter} from "react-router-dom";
import App from "./app.tsx";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <HashRouter basename={"/card/course"}>
        <App/>,
      </HashRouter>
    </ClerkProvider>
  </React.StrictMode>,
)
