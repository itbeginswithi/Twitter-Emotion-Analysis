import React from 'react'

const Error = ({error}) => {
  return (
    <span className={styles.error}>
      {/* {info.name + ': ' + info.description} */}
      {message}
    </span>
  )
}

export default Error;