import React from 'react';

const rules = [
  { title: 'Idgham', description: 'Merging of letters under specific conditions.' },
  { title: 'Ikhfa', description: 'Hiding the sound with light nasalization.' },
  // Add more rules here
];

export default function TajweedLessons() {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Tajweed Rules</h2>
      <ul className="mt-4 space-y-4">
        {rules.map((rule, idx) => (
          <li key={idx} className="border p-3 rounded shadow">
            <h3 className="text-lg font-bold">{rule.title}</h3>
            <p>{rule.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}