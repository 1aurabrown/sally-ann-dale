type ListModuleProps = {
  _type: string;
  items: string;
  heading: string;
};

export default function ListModule ({
  _type,
  items,
  heading
}: ListModuleProps) {  if (_type != 'listModule') return

  const listItems = items?.split("\n")

  return (
    <section>
      <h2 className="text-3xl">List Module</h2>
      <h3 className="text-2xl">{heading}</h3>
      { listItems.length && (
        <ul className="columns-3">
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