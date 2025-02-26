import PortableText from "@/app/_components/PortableText";
import { type PortableTextBlock } from "next-sanity";

type ListModuleProps = {
  _type: string;
  items: PortableTextBlock[];
  heading: string;

};

export default function ListModule ({
  _type,
  items,
  heading
}: ListModuleProps) {  if (_type != 'listModule') return


  return (
    <section className="page-padding">
      <h3 className="header text-36 md:text-48 lg:text-64">{heading}</h3>
      { items.length && (
        <div className="sm:columns-2 lg:columns-3 sm:ml-1/3 lg:ml-1/4">
          <PortableText
            value={items as PortableTextBlock[]}
          />
        </div>
      )}
    </section>
  )
}