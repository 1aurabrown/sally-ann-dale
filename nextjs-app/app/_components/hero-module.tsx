import Image from "@/app/_components/Image";
import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";

export default function HeroModule({ _type, heading, image, body }) {
  console.log(_type)
  if (_type != 'heroModule') return
  return (
    <section>
      <h2 className="text-2xl">Hero Module</h2>
      {image && <Image image={image}/>}
      {heading?.length && (
        <h2><PortableText
          value={heading as PortableTextBlock[]}
        /></h2>
      )}
      {body?.length && (
        <PortableText
          value={body as PortableTextBlock[]}
        />
      )}
    </section>
  )
}