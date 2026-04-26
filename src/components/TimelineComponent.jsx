import TimelineItemComponent from "./TimelineItemComponent.jsx";

function TimelineComponent({ title, items }) {
  return (
    <div className="w-full md:w-[48%]">
      <h2 className="mb-2 text-center text-white md:mb-[30px]">{title}</h2>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-[5px] -translate-x-1/2 bg-white" />
        {items.map((item, index) => (
          <TimelineItemComponent key={`${title}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default TimelineComponent;
