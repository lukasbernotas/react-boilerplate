import { Counter } from './shared/Counter'

export const Root = () => {
    return (
        <>
            <h3>Application running in {process.env.NODE_ENV} mode</h3>
            <hr />
            <Counter />
        </>
    )
}
