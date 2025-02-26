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
    <section className="page-padding lg:grid lg:grid-cols-5 items-center">
      {/* Left Column - 2/5 width */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h3 className="header text-36 md:text-48 lg:text-64">{headingLeft}</h3>
          {bodyLeft?.length && (
            <PortableText
              value={bodyLeft as PortableTextBlock[]}
            />
          )}
        </div>
      </div>

      {/* Center Slash Column - 1/5 width */}
      <div className="col-span-1 hidden lg:block relative h-full w-full">

        <svg className="w-full h-full" vectorEffect="non-scaling-stroke" viewBox="0 0 226 373" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.35749" y1="372.613" x2="225.357" y2="0.61311" stroke="#33471F" strokeWidth="1.5"/>
        </svg>

      </div>

      {/* Right Column - 2/5 width */}
      <div className="lg:col-span-2 space-y-8 mt-10 lg:mt-0">
        <div>
          <h3 className="header text-36 md:text-48 lg:text-64">{headingRight}</h3>
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