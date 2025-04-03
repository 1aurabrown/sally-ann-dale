import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";

type TextModuleProps = {
  _type: string;
  body: PortableTextBlock[];
};

export default function TextModule ({
  _type,
  body
}: TextModuleProps) {
  if (_type != 'textModule') return
  return (
    <section className="max-w-screen-xl mx-auto page-padding first:pt-10 first:md:pt-20 first:lg:pt-40">
      {body?.length && (
        <PortableText
          className="header text-24 leading-tight text-center md:text-32 lg:text-36 max-w-[60ch] mx-auto"
          value={body as PortableTextBlock[]}
        />
      )}
    </section>
  )
}