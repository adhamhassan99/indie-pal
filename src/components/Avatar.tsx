import React from "react";
import useSessionStore from "../stores/useSessionStore";
import Dropdown from "antd/es/dropdown/dropdown";
import { MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to={"profile"}>Profile</Link>,
  },
  {
    key: "2",
    label: (
      <div onClick={() => supabase.auth.signOut()}>
        <span>Sign out</span>
      </div>
    ),
  },
];

const Avatar = () => {
  const { session } = useSessionStore();
  const userImage = session?.user.user_metadata["avatar_url"];
  const navigate = useNavigate();
  return (
    <Dropdown menu={{ items }}>
      <img
        onClick={() => navigate("profile")}
        className="w-14 h-14 rounded-full hover:cursor-pointer"
        src={userImage}
        alt=""
      />
    </Dropdown>
  );
};

export default Avatar;
