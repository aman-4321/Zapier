"use client";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";
import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Inputs";
import { SignupAppbar } from "@/components/Signup-appbar";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <SignupAppbar />
      <div>
        <div className="flex justify-center bg-white min-h-screen pt-12">
          <div className="flex-1 pt-20 px-4 ml-[26rem]">
            <div className="font-semibold text-4xl pb-4 text-black pr-32 font-sans">
              <div className="whitespace-nowrap mb-1">
                Join millions worldwide
              </div>
              <div className="whitespace-nowrap mb-1">
                who automate their work
              </div>
              <div className="whitespace-nowrap">using Zapier.</div>
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

          <div className="flex-1 pt-6 pb-6 mt-2 px-4 border rounded max-h-[26rem] mr-[30rem]">
            <Input
              label={"Name"}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            ></Input>
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
            <div className="pt-4 mt-4">
              <PrimaryButton
                onClick={async () => {
                  const res = await axios.post(
                    `${BACKEND_URL}/api/v1/user/signup`,
                    {
                      username: email,
                      password,
                      name,
                    },
                  );
                  router.push("/login");
                }}
                size="big"
              >
                Get started free
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
