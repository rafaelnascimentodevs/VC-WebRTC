import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ src }: { src?: string }) => {
    if (src) {    
        return (
            <Image
                src={src}
                alt="Avatar"
                className="rounded-full"
                width={40}
                height={40}
            />
        );    
    }

    return <FaUserCircle size={25} />;
            
}  

export default Avatar;
    