import Image from "@/app/_components/Image";
import PortableText from "@/app/_components/PortableText";
import { type PortableTextBlock } from "next-sanity";

type TextModuleProps = {
  _type: string;
  video: any;
  image: any;
  text: PortableTextBlock[];
};

export default function VideoModule({
  _type,
  video,
  image,
  text
}: TextModuleProps) {
  if (_type != 'videoModule') return;
  return (
    <section>
      {video && <Image className="bg-green w-full" image={video}/>}
      {text?.length && (
        <PortableText
          className="px-10 mt-3"
          value={text as PortableTextBlock[]}
        />
      )}
    </section>
  )
}