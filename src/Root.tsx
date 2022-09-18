import { Counter } from './Counter'
import './styles.css'

export const Root = () => {
    const name = 'tests'
    return (
        <>
            <h1>Hi, this is {process.env.name}</h1>
            <h1>Application is running in {process.env.NODE_ENV} mode</h1>
            <Counter />
        </>
    )
}
