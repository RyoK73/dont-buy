"use client";
import {
  HistoryChart,
  type HistoryDataType,
} from "@/components/common/history-chart";

import { useState } from "react";

import { CategoryToggle, type Category } from "@/components/common/note-toggle";

import { BottomDockSheet } from "@/components/common/bottom-dock-sheet";

import { NoteButton } from "@/components/common/note-button";
import { NoteProgress } from "@/components/common/note-progress";

const historyData: HistoryDataType[] = [
  { date: new Date(2026, 7, 8), amount: 700 },
  { date: new Date(2026, 7, 9), amount: 100 },
  { date: new Date(2026, 7, 10), amount: 200 },
  { date: new Date(2026, 7, 11), amount: 400 },
];

const toggleCategory: Category = [
  {
    category: "食費",
    ariaLabel: "食費カテゴリ",
  },
  {
    category: "娯楽",
    ariaLabel: "娯楽カテゴリ",
  },
  {
    category: "衣類",
    ariaLabel: "衣類カテゴリ",
  },
];

const ExamplePage = () => {
  const [category, setCategory] = useState<string[]>([]);

  return (
    <div>
      <HistoryChart data={historyData} />
      <div className="flex flex-col gap-4 p-4">
        <NoteProgress label="Nintendo Switch 2" current={38200} max={52800} />
        <NoteProgress label="ダイソン 空気清浄機" current={38200} max={42000} />
        <NoteProgress label="北欧デザインチェア" current={19800} max={19800} />
      </div>
      <BottomDockSheet
        triggerButton={<NoteButton>開く</NoteButton>}
        className=""
      >
        <h1>表示されたよ</h1>
      </BottomDockSheet>
      <CategoryToggle
        toggleValue={category}
        setToggleValue={setCategory}
        categories={toggleCategory}
      />
    </div>
  );
};

export default ExamplePage;
