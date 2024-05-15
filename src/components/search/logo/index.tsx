import React from 'react'
import Image from 'next/image'

import styles from './style.module.scss'

const Logo: React.FC = () => {
  return (
  <div className={styles.logoContainer}>
    <Image
      alt='logo'
      src="/logo.svg"
      width={143}
      height={50}
    />
  </div>)
}

export default Logo
