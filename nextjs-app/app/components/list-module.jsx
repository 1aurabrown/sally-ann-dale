import Image from 'next/image'

export default function SliderModule({ module }) {
  if (module._type != 'listModule') return
  return (
    <section>
      <h2>List Module</h2>
      <h3>{module.heading}</h3>
      <div>{JSON.stringify(module.items)}</div>
    </section>
  )
}