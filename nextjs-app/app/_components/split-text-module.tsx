import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";

type SplitTextModuleProps = {
  _type: string;
  headingLeft: string;
  headingRight: string
  bodyLeft: PortableTextBlock[];
  bodyRight: PortableTextBlock[];
};

export default function SplitTextModule ({
  _type,
  headingLeft,
  headingRight,
  bodyLeft,
  bodyRight
}: SplitTextModuleProps) {
  if (_type != 'splitTextModule') return
  return (
    <section className="mt-16 relative grid grid-cols-5 gap-8 md:gap-16">
      {/* Left Column - 2/5 width */}
      <div className="col-span-2 space-y-8 flex flex-col justify-center">
        <div>
          <h3 className="header text-6xl">{headingLeft}</h3>
          {bodyLeft?.length && (
            <PortableText
              value={bodyLeft as PortableTextBlock[]}
            />
          )}
        </div>
      </div>

      {/* Center Slash Column - 1/5 width */}
      <div className="col-span-1 hidden md:flex items-center justify-center relative min-h-[500px]">
        <div className="absolute inset-y-0 w-[2px] bg-green rotate-[31deg] origin-center"></div>
      </div>

      {/* Right Column - 2/5 width */}
      <div className="col-span-2 space-y-8 flex flex-col justify-center">
        <div>
          <h3 className="header text-6xl">{headingRight}</h3>
          {bodyRight?.length && (
            <PortableText
              value={bodyRight as PortableTextBlock[]}
            />
          )}
        </div>
      </div>
    </section>
  )
}