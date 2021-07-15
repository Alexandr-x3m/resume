import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Resume from './containers/Resume/Resume'
import './style/app.sass'

function App () {
    return (
        <BrowserRouter>
            <Resume />
        </BrowserRouter>
    )
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
)