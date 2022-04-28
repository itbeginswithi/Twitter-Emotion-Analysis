import React from 'react'

const Error = () => {
  return (
    <span className={styles.error}>
      {info.name + ': ' + info.description}
    </span>
  )
}

export default Error;