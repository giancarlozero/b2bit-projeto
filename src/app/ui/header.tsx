'use client'

import styles from '@/app/ui/header.module.css'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <Button>Logout</Button>
    </header>
  )
}