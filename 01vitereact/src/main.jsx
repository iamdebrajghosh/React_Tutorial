import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | coffee</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {̥
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google.com'
// }

const anotherElement = (
    <a href="https://google.com" target='_blanck'>Visit Google</a>
)

const anotherUser = "Code With Coffee"

const reactElement = React.createElement (
    'a'
    {href: 'https://google.com', target: '_blanck'},
    'Click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    //anotherElement
    reactElement
    <App />
)
