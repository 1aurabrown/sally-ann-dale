import Image from 'next/image'

export default function VideoModule({ module }) {
  if (module._type != 'videoModule') return
  return (
    <section>
      <h2>Video Module</h2>
      <div>{JSON.stringify(module.video)}</div>
      <div>{JSON.stringify(module.image)}</div>
    </section>
  )
}