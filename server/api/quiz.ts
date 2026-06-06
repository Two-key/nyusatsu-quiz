import type { QuizItem } from "#shared/types/quizItem";

export default defineEventHandler(() => {
  return {
    quizData,
  };
});

export const quizData: { data: QuizItem[] } = {
  data: [
    {
      question: "NJSSとは何でしょうか？",
      options: [
        "日本のサッカーリーグ",
        "日本の科学技術研究機構",
        "日本の社会保障制度",
        "日本のスポーツ協会",
      ],
      answer: 1,
    },
    {
      question: "NJSSの主な目的は何でしょうか？",
      options: [
        "スポーツの普及",
        "科学技術の研究",
        "社会保障の提供",
        "教育の促進",
      ],
      answer: 2,
    },
    {
      question: "NJSSはどのようなサービスを提供していますか？",
      options: ["医療保険", "年金制度", "失業保険", "全ての上記"],
      answer: 3,
    },
  ],
};
