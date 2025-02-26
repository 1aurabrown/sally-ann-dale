import Image from "@/app/_components/Image";
import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";

type SliderModuleProps = {
  _type: string;
  items: {
    image: any;
    heading: string;
    body: PortableTextBlock[];
  }[];
};

export default function SliderModule ({
  _type,
  items
}: SliderModuleProps) {
  if (_type != 'sliderModule') return

    console.log(items)
  return (
    <section className="flex page-padding space-x-4">
      { items.length && items.map((item, i) => (
        <div className="mt-2" key={i}>
          {item.image && <Image image={item.image} />}
          {item.heading && <h2 className="header text-24 md:text-36 lg:text-48">{item.heading}</h2>}
          {item.body?.length && (
            <PortableText
              value={item.body as PortableTextBlock[]}
            />
          )}
        </div>
      ))}
    </section>
  )
}