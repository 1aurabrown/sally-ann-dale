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
    <section class="page-padding py-10 md:py-20 lg:py-40">
      {body?.length && (
        <PortableText
          className="header text-24 leading-tight text-center md:text-48 lg:text-64"
          value={body as PortableTextBlock[]}
        />
      )}
    </section>
  )
}