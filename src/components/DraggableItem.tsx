import { DragOptions, useDraggable } from "@neodrag/react";
import { PropsWithChildren, useRef } from "react";

export const DraggableItem = ({ children }: PropsWithChildren) => {
  const draggableRef = useRef(null);

  const options: DragOptions = {
    grid: [80, 90],
    bounds: "parent",
  };
  useDraggable(draggableRef, options);
  return (
    <div
      className="flex flex-col justify-center items-center"
      ref={draggableRef}
    >
      {children}
    </div>
  );
};
