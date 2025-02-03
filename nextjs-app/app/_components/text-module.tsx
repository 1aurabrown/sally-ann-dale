import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";

export default function TextModule({ _type, body }) {
  if (_type != 'textModule') return
  return (
    <section>
      <h2 className="text-3xl">Text Module</h2>
      {body?.length && (
        <PortableText
          value={body as PortableTextBlock[]}
        />
      )}
    </section>
  )
}