'use client';
import { useState } from 'react';
import Chats from './Chats';
import Game from './Game';
import type { Player } from '../../convex/schema';

import { useElementSize } from 'usehooks-ts';

export default function Examples() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();

  const [gameWrapperRef, { width, height }] = useElementSize();
  console.log({ width, height });

  return (
    <div className="mx-auto w-full max-w mt-7 grid grid-rows-[240px_1fr] lg:grid-rows-[1fr] lg:grid-cols-[1fr_auto] lg:h-[700px] max-w-[1400px] min-h-[480px] game-frame">
      {/* Game area */}
      <div className="relative overflow-hidden bg-brown-900" ref={gameWrapperRef}>
        <div className="absolute inset-0">
          <Game width={width} height={height} setSelectedPlayer={setSelectedPlayer} />
        </div>
      </div>

      {/* Right column area */}
      <div className="flex flex-col overflow-y-auto shrink-0 px-4 py-6 sm:px-6 lg:w-96 xl:pr-6 bg-brown-800 text-brown-100">
        <Chats playerState={selectedPlayer} />
      </div>
    </div>
  );
}
