import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";

export default function SplitTextModule({ _type, headingLeft, headingRight, bodyLeft, bodyRight }) {
  if (_type != 'splitTextModule') return
  return (
    <section>
      <h2 className="text-3xl">Split Text Module</h2>

      <h3 className="text-2xl">{headingLeft}</h3>
      {bodyLeft?.length && (
        <PortableText
          value={bodyLeft as PortableTextBlock[]}
        />
      )}

      <h3 className="text-2xl">{headingRight}</h3>
      {bodyRight?.length && (
        <PortableText
          value={bodyRight as PortableTextBlock[]}
        />
      )}
    </section>
  )
}