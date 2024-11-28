import ListOnlineUsers from "@/components/ListOnlineUsers";
import CallNotification from "@/components/CallNoitification";
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
