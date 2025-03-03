import PortableText from "@/app/_components/SimplePortableText";
import { type PortableTextBlock } from "next-sanity";
import ResolvedLink from "@/app/_components/ResolvedLink";

type ListModuleProps = {
  _type: string;
  heading: string;
  items: PortableTextBlock[];
  link?: any,
  indent?: boolean,
};

export default function ListModule ({
  _type,
  items,
  heading,
  link,
  indent
}: ListModuleProps) {  if (_type != 'listModule') return


  return (
    <section className="page-padding">
      <h3 className="header text-36 md:text-48 lg:text-64">{heading}</h3>

      Link: {JSON.stringify(link)} <br/>
      Indent: { JSON.stringify(indent) } <br/>
      { items.length && (
        <div className="mt-2 sm:columns-2 lg:columns-3 sm:ml-1/3 lg:ml-1/4">
          <PortableText
            className="padding-left-2 -text-indent-2"
            value={items as PortableTextBlock[]}
          />
        </div>
      )}
    </section>
  )
}