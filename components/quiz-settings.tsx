"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { categoryOptions, difficultyOptions } from "@/constants";

const QuizSettings = () => {
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
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6">
      <Button disabled={!difficulty || !category} onClick={handleQuizStart}>
        Start Quiz
      </Button>
    </div>
  );
};

export default QuizSettings;
