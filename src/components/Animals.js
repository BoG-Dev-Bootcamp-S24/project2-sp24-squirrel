import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Animal({ animal }) {
    const ownerInitial = animal.owner.substring(0, 1);
    const { name, breed, owner, hours, imageLocation } = animal;

    return (
        <div className="flex flex-col justify-between items-center w-[28%] aspect-square text-black rounded-xl shadow-lg mx-[1.5%] mb-[3%]">
            <Image 
                src={imageLocation} 
                alt="Animal photo" 
                className="object-cover w-[100%] h-[75%] rounded-t-xl"
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className="h-[25%] w-[100%] flex flex-row items-center">
                <div className="mx-5 bg-red-600 h-[50%] flex items-center justify-center aspect-square rounded-full font-semibold text-white text-2xl">
                    {ownerInitial}
                </div>
                <div className="bg-white">
                    <div className="whitespace-nowrap text-lg">
                        <span className="font-bold">{name}</span> - {breed}
                    </div>
                    <div className="text-slate-500 text-sm">
                        {owner} • Trained: {hours} hours
                    </div>
                </div>
            </div>
        </div>
    );
}
