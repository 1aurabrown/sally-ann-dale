import ResolvedLink from './ResolvedLink'

export type FooterProps = {
  logo?: any;
  heading?: string;
  items?: Array<string>;
  email?: string;
  nav?: Array<any>;
};

export function Footer({
  email,
  nav,
  logo,
  heading,
  items,
}: FooterProps) {
  return (
    <footer className="bg-green">
      <div className="container">
        <div className="text-white flex flex-col py-12">
          <div>
            <h5 className="pt-12">{heading}</h5>
            <ul className="my-12 header text-4xl md:text-6xl text-white space-y-4">
              {items?.length && items.map((item, i) => {
                return(
                  <li key={i}>{item}<br/></li>
                )
              })}
            </ul>
          </div>

          <div className="flex flex-col mb-12">
            <a title="Email Sally-Ann" href={"mailto:" + email}>{email}</a>
          </div>
          <div>
            <ul className="flex items-center md:relative justify-center gap-8">
              <li className="header text-4xl md:text-6xl text-white md:absolute md:left-0">
                SA
              </li>
              <div className="flex items-center gap-8 md:mx-auto">
                {nav?.length && nav.map(navItem => {
                  return(
                    <li key={navItem._key}>
                      <ResolvedLink link={navItem}>{navItem.title}</ResolvedLink>
                    </li>
                  )
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
