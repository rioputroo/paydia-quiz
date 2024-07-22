"use client";

import QuizSettings from "@/components/quiz-settings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", type: "spring", bounce: 0.3 }}
      className="bg-[url('/bg-quiz-2.png')] bg-cover rounded-[20px] h-[382px] w-[672px] md:w-[80%] lg:w-[90%] max-w-[672px] max-h-[382px]">
      <div className="relative flex justify-between mt-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3 }}

        >
          <Image
            src={"/welcome-to.png"}
            alt="hero-image"
            priority
            width={300}
            height={80}
            className="object-contain ml-10 flex justify-start items-start"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3, delay: 0.1 }}
          className="mr-[20px]"
        >
          <Image
            src={"/trivia-2.png"}
            alt="hero-image"
            priority
            width={200}
            height={100}
            className="object-cover mr-[20px] object-center"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3, delay: 0.2 }}
        className="mt-3 ml-10 flex w-full"
      >
        <span className="text-[#1926b2] text-base w-3/5 break-words">
          Dalam Quiz ini, kamu akan diberikan 5 pertanyaan seputar QRIS dan teknologi keuangan. Kamu akan diberikan waktu 15 detik untuk menjawab setiap soal yang ada.
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3, delay: 0.3 }}
        className="mt-8 ml-10 flex items-center"
      >
        <span className="text-2xl font-semibold text-[#1926b2]">Siap untuk bermain?</span>
        <Button onClick={handleQuizStart} className="w-[138px] h-[44px] text-base text-white bg-[#1926B2] font-semibold rounded-[10px] ml-6 hover:bg-[#1926B2]">
          Let’s Play!
        </Button>
      </motion.div>
    </motion.div>
  );
}
