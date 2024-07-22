"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [category, setCategory] = useState<string>("finance");
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [limit, setLimit] = useState([5]);

  const handleQuizStart = () => {
    router.push(
      `/questions?category=${category}&difficulty=${difficulty}&limit=${limit[0]}`
    );
  };

  return (
    <div className="bg-transparent w-full rounded-lg">
      {/* <div className="relative h-full flex justify-between">
        <Image
          src={"/welcome-to.png"}
          alt="Welcome to"
          layout="fill"
          objectFit="contain"
          className="relative"
        />
        <Image
          src={"/trivia.svg"}
          alt="hero-image"
          priority
          width={450}
          height={450}
          className="object-cover object-center"
        />
      </div> */}

      <div className="relative h-full flex justify-between items-center">
        <Image
          src={"/welcome-to.png"}
          alt="hero-image"
          priority
          width={550}
          height={200}
          className="object-contain mt-10 ml-[50px] flex justify-start items-start"
        />

        <Image
          src={"/trivia.svg"}
          alt="hero-image"
          priority
          width={450}
          height={450}
          className="object-cover mt-10 object-center"
        />
      </div>

      <div className="mt-[80px] ml-[50px] flex">
        <span className="text-white text-4xl w-4/5 break-words">
          Dalam Quiz ini, kamu akan diberikan 5 pertanyaan seputar QRIS dan teknologi keuangan. Kamu akan diberikan waktu 15 detik untuk menjawab setiap soal yang ada.
        </span>
      </div>

      <div className="mt-[80px] ml-[50px] flex items-center">
        <span className="text-4xl font-semibold text-white">Siap untuk bermain?</span>
        <Button onClick={handleQuizStart} className="w-[415px] h-[121px] text-5xl bg-white text-[#1926B2] font-semibold rounded-[24px] ml-[42px] hover:bg-white">
          Let’s Play!
        </Button>
      </div>
    </div>
  );
}
