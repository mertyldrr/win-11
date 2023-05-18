import Draggable from "react-draggable";
import { PropsWithChildren } from "react";

export const DraggableItem = ({ children }: PropsWithChildren) => {
  return (
    <Draggable axis="both" handle=".handle" scale={1}>
      <div className="handle flex flex-col justify-center items-center w-full h-full">
        {children}
      </div>
    </Draggable>
  );
};
