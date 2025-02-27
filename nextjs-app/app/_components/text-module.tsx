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
    <section className="w-full page-padding first:pt-10 first:md:pt-20 first:lg:pt-40">
      {body?.length && (
        <PortableText
          className="header text-24 leading-tight text-center md:text-36 lg:text-64"
          value={body as PortableTextBlock[]}
        />
      )}
    </section>
  )
}