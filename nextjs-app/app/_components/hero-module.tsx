import Image from "@/app/_components/Image";
import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/_components/PortableText";


type HeroModuleProps = {
  _type:string;
  image: any;
  heading: PortableTextBlock[];
  body: PortableTextBlock[];
};

export default function HeroModule({
  _type,
  image,
  heading,
  body,
}: HeroModuleProps) {
  if (_type != 'heroModule') return
  return (
    <section className="">
      {image && <Image image={image}/>}
      <div className="flex gap-16 mt-8">
        {heading?.length && (
          <div className="w-3/5">
            <h2 className="text-6xl leading-tight"><PortableText
              value={heading as PortableTextBlock[]}
            /></h2>
          </div>
        )}
        {body?.length && (
          <div className="w-2/5">
            <PortableText
              value={body as PortableTextBlock[]}
            />
          </div>
        )}
      </div>
    </section>
  )
}