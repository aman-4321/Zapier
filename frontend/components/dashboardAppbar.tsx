"use client";
import { useRouter } from "next/navigation";
import { LinkButton } from "./buttons/LinkButton";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";
import { Appbar } from "./Appbar";

export const DashboardAppbar = () => {
  const router = useRouter();

  const submit = async (e: any) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("failed to login");
    }
  };

  return (
    <div className="flex border-b justify-between p-4 bg-white">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex flex-col justify-center text-2xl font-extrabold text-black pl-6 cursor-pointer ml-20"
      >
        Zapier
      </div>
      <div className="flex">
        <div className="pr-4 mr-52">
          <div className="text-black">hello user</div>
        </div>
      </div>
    </div>
  );
};
