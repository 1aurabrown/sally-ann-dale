export default function SliderModule({ _type, heading, items }) {
  if (_type != 'listModule') return

  const listItems = items?.split("\n")

  return (
    <section>
      <h2 className="text-3xl">List Module</h2>
      <h3 className="text-2xl">{heading}</h3>
      { listItems.length && (
        <ul class="columns-3">
          { listItems.map((item, i) => {
            return (
              <li key={i}>
                {item}
              </li>
            )
          }) }
        </ul>
      )}
    </section>
  )
}