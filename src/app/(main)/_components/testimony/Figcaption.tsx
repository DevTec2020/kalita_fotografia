import type { ComponentProps } from "react";

interface FigCaptionProps extends ComponentProps<"figcaption"> {
  testimony: string;
  clientName: string;
  sessionName: string;
}
export const FigCaption = ({
  testimony,
  clientName,
  sessionName,
  ...props
}: FigCaptionProps) => {
  return (
    <figcaption
      {...props}
      className={`${
        props.className || ""
      } z-20 w-full flex absolute px-8 bottom-4 md:bottom-20 h-auto md:px-12`}
    >
      <p className="font-nunito-sans font-normal text-[4px] text-left w-6/12 text-white md:text-[18px] md:w-[40%] italic">
        &quot;{testimony}&quot;
      </p>
      
      <div className=" flex-1 flex flex-col items-end px-8 md:px-0">
        <h3 className="text-[6px] md:text-[24px] text-kalita-dark font-semibold">{clientName}</h3>
        <h4 className="text-[4px] md:text-[14px] text-white">{sessionName}</h4>
      </div>
    </figcaption>
  );
};