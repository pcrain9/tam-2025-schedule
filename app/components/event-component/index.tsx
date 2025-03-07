import type { EventType } from "~/types";
import locationIcon from "app/assets/icons/icons8-location-24.png";
import speakerIcon from "app/assets/icons/speaker.png";
import Headshot from "../headshot/headshot";

export function EventComponent({ eventProps }: { eventProps: EventType }) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded bg-[#c9e3e9] mx-4 sm:mx-0">
      <h3 className="font-bold">{eventProps.title}</h3>
      {eventProps.speakers && (
        <div className="flex gap-8 flex-wrap">
          {eventProps.speakers.map((speaker) => (
            <Headshot speaker={speaker} />
          ))}
        </div>
      )}
      {eventProps.location && (
        <div className="flex items-center gap-2">
          <img src={locationIcon} className="h-[12px] w-[12px]" />
          <p>{eventProps.location}</p>
        </div>
      )}
      <div className="flex items-center gap-2 ml-[3px]">
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
      <p>{eventProps.description}</p>
    </div>
  );
}
