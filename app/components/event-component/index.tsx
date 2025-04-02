import type { EventType } from "~/types";
import locationIcon from "app/assets/icons/icons8-location-24.png";
import linkIcon from "app/assets/icons/link.png";
import Headshot from "../headshot";

export function EventComponent({
  eventProps,
  finalEvent,
}: {
  eventProps: EventType;
  finalEvent: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 p-6 rounded bg-[#c9e3e9] mx-4 sm:mx-0 shadow-md ${
        finalEvent && "mb-4"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-bold font-poppins text-lg text-center sm: text-start">
          {eventProps.title}
        </h2>
        {eventProps.sponsor && (
          <p className="font-poppins italic">
            Sponsored by {eventProps.sponsor}
          </p>
        )}
      </div>
      <div className="flex items-center  gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="jsx-1364132950 eapp-events-calendar-time-icon"
        >
          <path
            d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12zm.984-4.97a.454.454 0 0 1-.07.154l-.026.038a.5.5 0 0 1-.655.148L3.55 5.857a.454.454 0 0 1-.149-.655.551.551 0 0 1 .722-.164l1.877 1.059V2.9a.5.5 0 1 1 1 0v4a.5.5 0 0 1-.017.13z"
            className="jsx-1364132950"
          ></path>
        </svg>
        {eventProps.time}
      </div>
      {eventProps.location && (
        <div className="flex items-center gap-2">
          <img src={locationIcon} className="h-[14px] w-[12px]" />
          <p className="font-poppins">{eventProps.location}</p>
        </div>
      )}
      {eventProps.link && (
        <div className="flex gap-2 items-center">
          <img src={linkIcon} className="h-[12px] w-[12px]" />
          <a
            href={eventProps.link}
            className="font-bold font-poppins underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Register here
          </a>
        </div>
      )}
      {eventProps.description && (
        <p className="font-poppins">{eventProps.description}</p>
      )}

      {eventProps.speakers && (
        <div className="flex gap-8 flex-wrap ">
          {eventProps.speakers.map((speaker) => (
            <Headshot key={speaker.headshot} speaker={speaker} />
          ))}
        </div>
      )}
    </div>
  );
}
