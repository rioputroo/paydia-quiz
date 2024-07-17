"use client"

import Questions from "@/components/questions";
import { categoryOptions, difficultyOptions } from "@/constants";
import { redirect } from "next/navigation";
import "./questions.css";

import soal from './list_question.json';
import { useEffect, useState } from "react";

type Props = {
  searchParams: {
    category: string;
    difficulty: string;
    limit: string;
  };
};

async function getData(category: string, difficulty: string, limit: string) {
  const res = await fetch(
    `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&type=multiple&difficulty=${difficulty}`
  );

  console.log('getData', res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const QuestionsPage = ({ searchParams }: Props) => {
  const category = searchParams.category as string;
  const difficulty = searchParams.difficulty;
  const limit = searchParams.limit;

  const [randomQuestions, setRandomQuestions] = useState([]);

  useEffect(() => {
    setRandomQuestions(getRandomQuestions(5));
  }, []);

  const validateCategory = (category: string) => {
    const validCategories = categoryOptions.map((option) => option.value);
    return validCategories.includes(category);
  };

  const validateDifficulty = (difficulty: string) => {
    const validDifficulties = difficultyOptions.map((option) => option.value);
    return validDifficulties.includes(difficulty);
  };

  const validateLimit = (limit: string) => {
    const parsedLimit = parseInt(limit, 10);
    return !isNaN(parsedLimit) && parsedLimit >= 5 && parsedLimit <= 50;
  };

  if (
    !validateCategory(category) ||
    !validateDifficulty(difficulty) ||
    !validateLimit(limit)
  ) {
    return redirect("/");
  }

  function get5RandomQuestions(questions: any) {
    const shuffledQuestions = [...questions]; // Create a copy of the questions array
    shuffledQuestions.sort(() => Math.random() - 0.5); // Shuffle the array randomly

    // Get the first 5 random questions
    const random5Questions = shuffledQuestions.slice(0, 5);

    return random5Questions;
  }

  const getRandomQuestions = (count: any): any => {
    const shuffled = soal.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // const response = await getData(category, difficulty, limit);
  // const response = getRandomQuestions(limit);

  return (
    <Questions
      questions={randomQuestions}
      limit={parseInt(limit, 10)}
      category={category}
    />
  );
};

export default QuestionsPage;
