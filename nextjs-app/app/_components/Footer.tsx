import ResolvedLink from './ResolvedLink'

export default function Footer({email, nav, heading, items}) {
  return (
    <footer className="">
      <div className="container">
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <a title="Email Sally-Ann" href={"mailto:" + email}>{email}</a>

          <ul>
            {nav.map(navItem => {
              return(
                <li className="block w-full" key={navItem._key}>
                  <ResolvedLink link={navItem}>{navItem.title}</ResolvedLink>
                </li>
              )
            })}
          </ul>
          <div>
            <h5 className="text-xl">{heading}</h5>
            <ul>
              {items.map((item, i) => {
                return(
                  <li key={i}>{item}<br/></li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
