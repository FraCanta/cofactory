import { forwardRef } from "react";
import { MaskText } from "../MaskText";

const ModalSection = forwardRef(({ title, text }, ref) => {
  return (
    <section
      ref={ref}
      className="flex items-center justify-center flex-shrink-0 w-full gap-10 p-6 lg:p-10 snap-center "
    >
      <div>
        <MaskText>
          <h2
            className="mb-6 text-6xl font-bebas lg:text-8xl"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h2>
        </MaskText>
        <MaskText>
          <p className="max-w-5xl text-lg lg:text-2xl">{text}</p>
        </MaskText>
      </div>
    </section>
  );
});

export default ModalSection;
