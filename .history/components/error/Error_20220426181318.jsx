import React from 'react'

import styles from './'

const Error = ({error}) => {
  return (
    <span className={styles.error}>
      {/* {info.name + ': ' + info.description} */}
      {error}
    </span>
  )
}

export default Error;