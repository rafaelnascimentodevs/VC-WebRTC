'use client';

import React, { useContext } from "react";
import { useUser } from "@clerk/nextjs";
import { SocketContext } from "@/context/SocketContext";
import Avatar from "./Avatar";
import { MdCall } from "react-icons/md";

const CallNotification = () => {
  const { user } = useUser();
  const { ongoingCall } = useContext(SocketContext);

  if (!ongoingCall?.isRinging) return null;

  return (<div className="absolute bg-slate-500 bg-opacity-70 w-screen h-screen top-0 left-0 flex items-center justify-center">
    <div className="bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center gap-2">
        <Avatar src={ongoingCall?.participants.caller.profile.imageUrl} />
        <div className="text-sm">
          {ongoingCall?.participants.caller.profile.fullName?.split(" ")[0]} Está te ligando...
        </div>
        <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"><MdCall size={14}/></button>
        <button className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"><MdCall size={14}/></button>
      </div>
    </div>
  </div>);
};

export default CallNotification;