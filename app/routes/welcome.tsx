import { Accordion } from "~/components/accordion";
import { accordionProps } from "~/constants";

export default function Welcome() {
  return (
    <main className="flex flex-1 items-center flex-col justify-center">
      {accordionProps.map((accordion) => (
        <Accordion accordionProps={accordion} key={accordion.id} />
      ))}
    </main>
  );
}
