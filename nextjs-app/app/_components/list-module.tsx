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
    <section class="page-padding">
      <h3 className="header text-36 md:text-48 lg:text-64">{heading}</h3>
      { listItems.length && (
        <ul className="sm:columns-2 lg:columns-3 sm:ml-1/3 lg:ml-1/4">
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