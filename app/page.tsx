import ListOnlineUsers from "@/components/ListOnlineUsers";
import CallNotification from "@/components/CallNoitification";
import { Video } from "lucide-react";
import VideoCall from "@/components/VideoCall";

export default function Home() {
  return (
    <div>
      <ListOnlineUsers />
      <CallNotification />
      <VideoCall />

    </div>
  );
}
