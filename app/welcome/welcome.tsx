import { Accordion } from "~/components/accordion";
import type { AccordionProps } from "~/types";
const accordionProps: AccordionProps = {
  id: 0,
  title: "Monday",
  open: false,
  events: [{ id: 0, title: "Registration", time: "8am-4pm" }],
};
export function Welcome() {
  return (
    <main className="flex flex-1 items-center flex-col justify-center">
      <Accordion accordionProps={accordionProps} />
    </main>
  );
}
