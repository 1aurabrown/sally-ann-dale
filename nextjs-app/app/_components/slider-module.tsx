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

  return (
    <section className="flex page-padding space-x-4">
      { items.length && items.map((item, i) => (
        <div className="mt-2" key={i}>
          {item.image && <figure class="relative">
            <Image className="w-full" image={item.image} />
            {item.image.caption && <figcaption className="absolute right-0 text-right text-12 mt-thin">{item.image.caption}</figcaption>}
          </figure>}
          {item.heading && <h2 className="header text-24 md:text-36 lg:text-48 mt-4">{item.heading}</h2>}
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