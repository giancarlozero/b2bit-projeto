import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import b2bitLogo from "@/app/assets/B2BitLogo.png"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="b2bit-login flex flex-col items-center justify-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Image src={b2bitLogo} alt="B2Bit" />
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-5">
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" name="email" placeholder="exemplo@email.com" required />
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" placeholder="*****************" required />
              <Button>Sign In</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
