import Image from 'next/image'

export default function SplitTextModule({ module }) {
  if (module._type != 'splitTextModule') return
  return (
    <section>
      <h2>Split Text Module</h2>

      <h3>{module.headingLeft}</h3>
      <div>{JSON.stringify(module.bodyLeft)}</div>

      <h3>{module.headingRight}</h3>
      <div>{JSON.stringify(module.bodyRight)}</div>
    </section>
  )
}