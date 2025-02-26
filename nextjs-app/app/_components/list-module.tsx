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
      <h3 className="text-25 md:text-36 text-64">{heading}</h3>
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