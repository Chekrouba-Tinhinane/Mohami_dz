import React from 'react'

const EvalLawyers = ({lawyers}) => {
  return (
    <div>EvalLawyers
        {lawyers?.map((e, i) =>   (<p onClick={() => console}>{i}</p>) )}
    </div>
  )
}

export default EvalLawyers