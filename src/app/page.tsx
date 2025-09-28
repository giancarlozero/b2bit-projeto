'use client'

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import b2bitLogo from "@/app/assets/B2BitLogo.png"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "./lib/axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login/", {
        email,
        password,
      });

      console.log("Token Access: ", response.data.tokens.access)
      console.log("Dados de retorno da API: ", response.data)

      const accessToken = response.data.tokens.access;
      const refreshToken = response.data.tokens.refresh;
      // const user = response.data.user;

      if(!accessToken) {
        throw new Error("Token não encontrado.")
      }

      localStorage.setItem("token", accessToken);
      if(refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }

      router.push("/profile");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="b2bit-login flex flex-col items-center justify-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Image src={b2bitLogo} alt="B2Bit" />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid gap-5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="*****************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit">Sign In</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
