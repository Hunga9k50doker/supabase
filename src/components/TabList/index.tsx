import React from "react";

interface TabListProps {
  title: string;
  active: boolean;
}
interface DataTabList {
  data: Array<TabListProps>;
}
const TabList = (props: DataTabList) => {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="flex space-x-1 overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right pb-2"
      data-orientation="horizontal"
    >
      {props.data.map((item, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected="true"
          aria-controls={`radix-5-content-${index}`}
          data-state="active"
          id={`radix-5-trigger-${index}`}
          className={`relative flex items-center space-x-2 text-center transition shadow-sm rounded border-scale-800 border focus:outline-none focus-visible:ring focus-visible:ring-scale-700 focus-visible:border-scale-900  text-xs px-2.5 py-1 ${
            item.active
              ? "text-scale-1200 bg-scale-600"
              : "text-scale-900 cursor-pointer hover:text-scale-1200 hover:border-scale-1200"
          }`}
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default TabList;
