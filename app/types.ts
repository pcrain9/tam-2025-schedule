export type AccordionProps = {
    id:number;
    title:string;
    open:boolean;
    events:EventType[]
}

export type EventType={
    id:number;
    title:string;
    time:string;
    description?:string;
}