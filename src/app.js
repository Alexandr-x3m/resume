import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './style/app.sass'

function App () {
    return (
        <BrowserRouter>
            <div class='container'>
                <h1 class='title' >Hello webpack!</h1>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
)