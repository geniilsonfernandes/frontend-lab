"use client";

import { cn } from "@/utils/cn";
import { BookMarked, ChevronRight } from "lucide-react";
import { useState } from "react";

type AccordionProps = {
  title: string;
  links?: {
    href: string;
    label: string;
  }[];
};

const Accordion = ({ title, links }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 border-t border-neutral-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full text-sm group items-center justify-between font-extrabold  text-zinc-200  hover:text-zinc-100 "
      >
        {title}

        <ChevronRight
          className={cn(
            "w-4 h-4 transition opacity-50 group-hover:opacity-100",
            {
              "rotate-90": isOpen,
            }
          )}
        />
      </button>
      {isOpen && (
        <ul className="space-y-1 mt-2">
          {links?.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-400 text-xs font-bold hover:text-emerald-600 py-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Navegation = () => {
  return (
    <aside className="bg-neutral-900 p-8 h-screen min-w-72">
      <h1 className="text-md font-extrabold font-mono flex items-center gap-2">
        <BookMarked /> Front end lab
      </h1>
      <div className="my-8">
        <Accordion
          links={[
            {
              href: "/optimistic-ui/behavioral-optimization",
              label: "Estratégias de Otimização",
            },
          ]}
          title="Optimistic UI"
        />
        <Accordion
          links={[
            {
              href: "/data-fetching/introduction",
              label: "Introdução ao Data Fetching",
            }
          ]}
          title="Data Fetching"
        />
      </div>
    </aside>
  );
};
