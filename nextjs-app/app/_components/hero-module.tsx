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
  if (_type != 'heroModule') return null;
  
  return (
    <section className="page-padding">
      {image && (
        <Image className="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl" image={image} />
      )}
      <div className="md:flex md:gap-16 space-y-4 md:space-y-0 mt-12">
        {heading?.length && (
          <div className="md:w-3/5">
            <h2 className="header text-36 md:text-48 lg:text-64 leading-tight"><PortableText
              value={heading as PortableTextBlock[]}
            /></h2>
          </div>
        )}
        {body?.length && (
          <div className="md:w-2/5">
            <PortableText
              value={body as PortableTextBlock[]}
            />
          </div>
        )}
      </div>
    </section>
  )
}