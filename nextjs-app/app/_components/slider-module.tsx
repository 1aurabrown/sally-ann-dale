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
      <h2 className="text-2xl">Slider Module</h2>
      { items.length && items.map((item, i) => (
        <div className="mt-2" key={i}>
          {item.image && <Image image={item.image} />}
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