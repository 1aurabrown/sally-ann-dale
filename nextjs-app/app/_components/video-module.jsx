import Image from "@/app/_components/Image";

export default function VideoModule({ _type, video, image }) {
  if (_type != 'videoModule') return
  return (
    <section>
      <h2 className="text-3xl">Video Module</h2>
      {video && <Image image={video}/>}
      {image && <Image image={image}/>}
    </section>
  )
}