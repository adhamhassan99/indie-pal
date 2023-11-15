import { Button, Input } from "antd";
import React from "react";
import { SocialLogins } from "../components";

const SignIn = () => {
  return (
    <div className=" h-full flex justify-center items-center px-10">
      <div className="bg-white shadow-xl px-10 py-5 sm:w-[500px] w-full  rounded-xl">
        <div className="flex flex-col gap-10">
          <Input placeholder="Email" size="large" allowClear />
          <Input
            placeholder="Password"
            type="password"
            security=""
            size="large"
            allowClear
          />
          <Button className="">Primary</Button>
          <hr />
          <SocialLogins />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
