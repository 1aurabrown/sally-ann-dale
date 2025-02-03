import Image from 'next/image'

export default function SliderModule({ module }) {
  if (module._type != 'sliderModule') return
  return (
    <section>
      <h2>Slider Module</h2>
      { module.items && module.items.map((item, i) => (
        <div className="mt-2" key={i}>
          image: {JSON.stringify(item.image)}
          <br/>
          body: {JSON.stringify(item.body)}<br/><br/>
        </div>
      ))}
    </section>
  )
}