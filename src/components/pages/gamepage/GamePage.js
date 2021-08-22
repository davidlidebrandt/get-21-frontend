import React from "react";
import { useEffect } from "react";
import GameCard from "./subcomp/GameCard.js";
import GameHeader from "./subcomp/GameCard.js";

export default function GamePage({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("gamepage");
  });

  return (
    <>
      <div className="col-span-12">
        <GameHeader />
      </div>
      <div className="col-span-12 xl:col-span-8 xl:col-start-3 row-span-6 px-2 place-items-center py-14">
        <GameCard />
      </div>
    </>
  );
}
