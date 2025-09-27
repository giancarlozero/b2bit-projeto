import { Card, CardContent } from "@/components/ui/card";
import styles from '@/app/profile/profile.module.css'
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <div className={["flex flex-col items-center justify-center h-screen", styles.profilebg].join(" ")}>
        <Card className="w-full max-w-sm">
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-3">
              <p>Profile picture</p>
              <Image className={styles.profileavatar} src="https://placehold.co/64x64?text=Avatar" alt="Me" height={64} width={64} unoptimized />
            </div>
            <div className="grid gap-3">
              <p>Your <strong>Name</strong></p>
              <div className={styles.profilename}>Nome</div>
              <p>Your <strong>E-mail</strong></p>
              <div className={styles.profileemail}>email@email.com</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}