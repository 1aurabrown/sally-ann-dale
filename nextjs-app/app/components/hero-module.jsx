import Image from 'next/image'

export default function HeroModule({ module }) {
  if (module._type != 'heroModule') return
  return (
    <section>
      <h2>Hero Module</h2>
      <div>{JSON.stringify(module.image)}</div>
      <h4>{JSON.stringify(module.heading)}</h4>
      <div>{JSON.stringify(module.body)}</div>
    </section>
  )
}