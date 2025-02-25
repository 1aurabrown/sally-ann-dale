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
    <section className="my-24">
      {video && <Image className="bg-green" image={video}/>}
      {text?.length && (
        <PortableText
          value={text as PortableTextBlock[]}
        />
      )}
    </section>
  )
}