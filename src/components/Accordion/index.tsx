// components/Accordion.tsx
'use client';
import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full space-y-2">
      {items.map((item, index) => (
        <div key={index} className=" overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-4 bg-red-300/85 text-white font-extrabold flex justify-between items-center"
          >
            {item.title}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-red-300/85 text-white">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
