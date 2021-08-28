import React from "react";
import { useEffect, useState } from "react";
import GameCard from "./subcomp/GameCard.js";
import GameHeader from "./subcomp/GameHeader.js";

export default function GamePage({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("gamepage");
  });

  const [score, setScore] = useState();

  return (
    <>
      <div className="col-span-12">
        <GameHeader />
      </div>
      <div className="col-span-12 xl:col-span-8 xl:col-start-3 row-span-6 px-2  xl:py-10">
        <GameCard score={score} setScore={setScore} />
      </div>
    </>
  );
}
