import Image from "@/app/_components/Image";

export default function VideoModule({ _type, video, image }) {
  
  if (_type != 'videoModule') return
  return (
    <section className="bg-green min-h-[200px] pt-24 pb-24">
      <h2 className="text-3xl text-black">Video Module</h2>
      {video && <Image image={video}/>}
    </section>
  )
}