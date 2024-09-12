"use client";
import { Appbar } from "@/components/Appbar";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";
import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Inputs";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div>
      <Appbar />
      <div className="flex justify-center min-h-screen bg-white">
        <div className="flex pt-8 max-w-4xl">
          <div className="flex-1 pt-20 px-4">
            <div className="font-semibold text-3xl pb-4 text-black">
              Join millions worldwide who automate their work using Zapier.
            </div>
            <div className="pb-6 pt-4 text-black">
              <CheckFeature label={"Easy setup, no coding required"} />
            </div>
            <div className="pb-6 text-black">
              <CheckFeature label={"Free forever for core features"} />
            </div>
            <div className="text-black">
              <CheckFeature label={"14-day trial of premium features & apps"} />
            </div>
          </div>
          <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded max-h-80 text-black">
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label={"Email"}
              type="text"
              placeholder="Your Email"
            ></Input>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              type="password"
              placeholder="Password"
            ></Input>
            <div className="pt-4">
              <PrimaryButton
                onClick={async () => {
                  const res = await axios.post(
                    `${BACKEND_URL}/api/v1/user/signin`,
                    {
                      username: email,
                      password,
                    },
                  );
                  localStorage.setItem("token", res.data.token);
                  router.push("/dashboard");
                }}
                size="big"
              >
                Login
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
