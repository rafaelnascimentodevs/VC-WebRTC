'use client'

import { useSocket } from "@/context/SocketContext";
import VideoContainer from "./VideoContainer";
import { useCallback, useEffect, useState } from "react";
import { MdMic, MdMicOff, MdVideocam, MdVideocamOff } from "react-icons/md";


const VideoCall = () => {
    const { localStream, peer, ongoingCall } = useSocket();
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCamOn, setIsCamOn] = useState(true);
  
    console.log("peer>>>>", peer?.stream);
  
    useEffect(() => {
      if (localStream) {
        const videoTrack = localStream.getVideoTracks()[0];
        setIsCamOn(videoTrack.enabled);
        const audioTrack = localStream.getAudioTracks()[0];
        setIsMicOn(audioTrack.enabled);
      }
    }, [localStream]);
  
    const toggleCamera = useCallback(() => {
      if (localStream) {
        const videoTrack = localStream.getVideoTracks()[0];
        videoTrack.enabled = !videoTrack.enabled;
        setIsCamOn(videoTrack.enabled);
      }
    }, [localStream]);
  
    const toggleMic = useCallback(() => {
      if (localStream) {
        const audioTrack = localStream.getAudioTracks()[0];
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);
      }
    }, [localStream]);
  
    const isOnCall = localStream && peer && ongoingCall ? true : false;
  
    return (
      <div>
        <div className="mt-4 relative">
          {localStream && <VideoContainer stream={localStream} isLocalStream={true} isOnCall={isOnCall} />}
          {peer && peer.stream && <VideoContainer stream={peer.stream} isLocalStream={false} isOnCall={isOnCall} />}
        </div>
  
        <div className="mt-8 flex item-center justify-center">
          <button onClick={toggleMic}>
            {isMicOn && <MdMicOff size={20} />}
            {!isMicOn && <MdMic size={20} />}
          </button>
  
          <button className="px-2 py-0.8 bg-rose-500 text-white rounded mx-4" onClick={() => {}}>
            End Call
          </button>
  
          <button onClick={toggleCamera}>
            {isCamOn && <MdVideocamOff size={20} />}
            {!isCamOn && <MdVideocam size={20} />}
          </button>
        </div>
      </div>
    );
  };
  


export default VideoCall;
  

