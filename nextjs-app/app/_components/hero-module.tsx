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
        <Image className="w-full px-10 md:px-25 mx-auto max-w-4xl" image={image} />
      )}
      <div className="first:mt-[17vw] first:lg:mt-[30vh] md:flex md:gap-16 space-y-10 md:space-y-0 mt-12">
        {heading?.length && (
          <div className="md:w-3/5">
            <h2 className="header text-24 lg:text-36 xl:text-48 leading-tight"><PortableText
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