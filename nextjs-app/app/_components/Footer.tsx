import ResolvedLink from './ResolvedLink'

export type FooterProps = {
  logo?: any;
  heading?: string;
  items?: Array<{
    heading: string;
    description?: string;
  }>;
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
            <ul className="my-12  space-y-4">
              {items?.length && items.map((item, i) => {
                return(
                  <div key={i}>
                    <h3 class="font-louise text-6xl">{item.heading}</h3>
                    <p class="font-sans">{item.description}</p>
                  </div>
                )
              })}
            </ul>
          </div>

          <div className="flex flex-col mb-12">
            <a title="Email Sally-Ann" href={"mailto:" + email}>{email}</a>
            </div>
            <div>
            <div>
            
              <ul className="flex items-center relative w-full">
                <li className="header text-6xl text-white">
                  SA
                </li>
                <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
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
      </div>
    </footer>
  );
}
