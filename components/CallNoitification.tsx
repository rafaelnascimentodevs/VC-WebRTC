'use client';

import React, { useContext } from "react";
import { SocketContext } from "@/context/SocketContext";
import Avatar from "./Avatar";
import { MdCall, MdCallEnd } from "react-icons/md";

const CallNotification = () => {
  // Verificação se o contexto é nulo
  const socketContext = useContext(SocketContext);

  // Se o contexto for nulo ou se não houver chamada em andamento, retorna null
  if (!socketContext || !socketContext.ongoingCall?.isRinging) return null;

  const { ongoingCall, handleJoinCall, handleHangup } = socketContext;

  if (!ongoingCall?.isRinging) return null;

  return (
    <div className="absolute bg-slate-500 bg-opacity-70 w-screen h-screen top-0 left-0 flex items-center justify-center">
      <div className="bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <Avatar src={ongoingCall?.participants.caller.profile.imageUrl} />
          <div className="text-sm">
            {ongoingCall?.participants.caller.profile.fullName?.split(" ")[0]} Está te ligando...
          </div>
          <button onClick={() => handleJoinCall(ongoingCall)} className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <MdCall size={13} />
          </button>
          <button onClick={() => handleHangup({ongoingCall: ongoingCall ? ongoingCall : undefined, isEmitHangup: true})} className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <MdCallEnd size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallNotification;