import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <button style={{ fontSize: '25px', padding: '1rem' }} onClick={() => setCount((c) => c + 1)}>
                Count {count}
            </button>
        </div>
    )
}
