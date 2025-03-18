import { useEffect, useRef, useState, type LegacyRef } from "react";
import type { AccordionProps } from "~/types";
import { EventComponent } from "../event-component";
const downArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
const upArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export function Accordion({
  accordionProps,
}: {
  accordionProps: AccordionProps;
}) {
  const [content, setContent] = useState(false);
  const elRef = useRef<any>(undefined);
  const showContent = () => {
    setContent(!content);
  };
  const getDate = () => {
    const date = new Date();
    return date.getDay();
  };
  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      if (accordionProps.id === getDate()) {
        setContent(!content);
        elRef.current.scrollIntoView();
        setContent(!content);
      }
    }
  }, []);

  const accordionEl = (
    <div className="flex flex-1 flex-col min-w-full" ref={elRef}>
      <button
        onClick={showContent}
        className="w-full font-bold flex justify-between items-center py-5 px-5 text-slate-800 bg-[#8194B7] rounded font-poppins"
      >
        <span>{accordionProps.title}</span>
        <span id="icon-1" className="text-slate-800">
          {content ? upArrow : downArrow}
        </span>
      </button>
      <div
        className={`flex flex-col gap-4 mt-4 transition-[max-height] ease-in-out duration-500 overflow-hidden ${
          content ? "max-h-full" : "max-h-0"
        }`}
      >
        {accordionProps.events.map((event, index) => (
          <EventComponent
            key={event.id}
            eventProps={event}
            finalEvent={index === accordionProps.events.length - 1}
          />
        ))}
      </div>
    </div>
  );
  return accordionEl;
}
