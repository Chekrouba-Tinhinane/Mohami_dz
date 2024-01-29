import React from 'react'

const EvalLawyers = ({lawyers}) => {
  return (
    <div>EvalLawyers
        {lawyers?.map((e) => <>{e?.id}</>)}
    </div>
  )
}

export default EvalLawyers