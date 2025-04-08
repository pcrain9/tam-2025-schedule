export type AccordionProps = {
  id: number;
  title: string;
  open: boolean;
  events: EventType[];
};

export type EventType = {
  id: number;
  title: string;
  sponsor?: string;
  time: string;
  speakers?: { name: string; headshot: string; institution: string }[];
  link?: string;
  description?: string;
  location?: string;
  cancelled?: boolean;
  slides?: { title: string; href: string }[];
};
