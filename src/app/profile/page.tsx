'use client'

import { Card, CardContent } from "@/components/ui/card";
import styles from '@/app/profile/profile.module.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/axios";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("Token na tela de perfil: ", token);

    if(!token) {
      router.push("/");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await api.get("/auth/profile/")
        setUser(response.data);
        console.log("Dados do usuário: ", response.data)
      } catch(error) {
        console.error("Erro ao obter perfil: ", error);
        router.push("/");
      }
    }

    fetchProfile();
  }, [router]);

  if(!user) {
    return (
      <div className={["flex flex-col items-center justify-center h-screen", styles.profilebg].join(" ")}>
        <p>Usuário não encontrado</p>
      </div>
    )
  }

  return (
    <>
      <div className={["flex flex-col items-center justify-center h-screen", styles.profilebg].join(" ")}>
        <Card className="w-full max-w-sm">
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-3">
              <p>Profile picture</p>
              <Image className={styles.profileavatar} src={user.avatar.medium} alt={`Avatar de ${user.name}`} height={64} width={64} unoptimized />
            </div>
            <div className="grid gap-3">
              <p>Your <strong>Name</strong></p>
              <div className={styles.profilename}>{user.name}</div>
              <p>Your <strong>E-mail</strong></p>
              <div className={styles.profileemail}>{user.email}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}