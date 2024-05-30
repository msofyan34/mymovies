"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function formLogin2() {
  const router = useRouter();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: [e.target.value],
    });
  }

  function handleLogin(e: any) {
    e.preventDefault();
    console.log(userLogin);
    alert("Login Successfull");
    router.push("/wnmovie");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="mx-auto mt-5 w-full max-w-md">
          <CardHeader>
            <CardTitle>Form Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form action="">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userLogin.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userLogin.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleLogin}>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default formLogin2;
