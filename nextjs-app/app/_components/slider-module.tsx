import Image from "@/app/_components/Image";
import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";

type SliderModuleProps = {
  _type: string;
  items: {
    image: any;
    body: PortableTextBlock[];
  }[];
};

export default function SliderModule ({
  _type,
  items
}: SliderModuleProps) {
  if (_type != 'sliderModule') return
  return (
    <section>
      { items.length && items.map((item, i) => (
        <div className="mt-2" key={i}>
          {item.image && <Image image={item.image} />}
          {item.heading && <h2 class="header text-25 md:text-35 lg:text-48"></h2>}
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