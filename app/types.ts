export type AccordionProps = {
  id: number;
  title: string;
  open: boolean;
  events: EventType[];
};

export type EventType = {
  id: number;
  title: string;
  time: string;
  speakers?: { name: string; headshot: string; institution: string }[];
  link?: string;
  description?: string;
  location?: string;
};
