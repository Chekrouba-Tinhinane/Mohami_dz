import React from 'react'

const EvalLawyers = ({lawyers}) => {
  return (
    <div>EvalLawyers
        {lawyers?.map((e, i) =>   (<>{i}</>) )}
    </div>
  )
}

export default EvalLawyers