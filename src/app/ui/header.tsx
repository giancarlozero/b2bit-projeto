'use client'

import styles from '@/app/ui/header.module.css'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    router.push("/")
  }

  return (
    <header className={styles.cabecalho}>
      <Button onClick={handleLogout}>Logout</Button>
    </header>
  )
}