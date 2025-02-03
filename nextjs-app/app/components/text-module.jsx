import Image from 'next/image'

export default function TextModule({ module }) {
  if (module._type != 'textModule') return
  return (
    <section>
      <h2>Text Module</h2>
      <div>{JSON.stringify(module.body)}</div>
    </section>
  )
}