import React from 'react';

const letters = [
  { letter: 'ا', name: 'Alif', audio: '/audio/alif.mp3' },
  { letter: 'ب', name: 'Bay', audio: '/audio/ba.mp3' },
  // Add more letters here
];

export default function Makharij() {
  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Makharij (Pronunciation Points)</h2>
      <ul className="mt-4 grid grid-cols-2 gap-4">
        {letters.map((item, idx) => (
          <li key={idx} className="border p-2 rounded shadow">
            <div className="text-3xl">{item.letter}</div>
            <div>{item.name}</div>
            <button onClick={() => playAudio(item.audio)} className="text-sm text-blue-600 underline mt-2">Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
}