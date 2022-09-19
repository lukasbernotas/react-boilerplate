import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './Root'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
])

const rootElement = document.getElementById('root')

if (rootElement !== null) {
    ReactDom.createRoot(rootElement).render(<RouterProvider router={router} />)
}
