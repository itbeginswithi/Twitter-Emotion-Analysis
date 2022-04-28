import React from 'react'

import styles from './Error.module.scss';

const Error = ({message}) => {
  return (
    <span className={styles.error}>
      {/* {info.name + ': ' + info.description} */}
      {message}
    </span>
  )
}

export default Error;