import React from 'react'

const Controls = ({current, onChange, total}) => {
  return (
    <section>
        <button
            type="button" 
            onClick={() => onChange(1)}
            disabled={current === total}
        >
          forward
        </button>
        <button
            type="button"
            onClick={() => onChange(-1)}
            disabled={current === 1}
        >
          back
        </button>
    </section>
  )
}

export default Controls