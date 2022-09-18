import ReactDom from 'react-dom/client'
import { Root } from './Root'

const rootElement = document.getElementById('root')

if (rootElement !== null) {
    ReactDom.createRoot(rootElement).render(<Root />)
}
