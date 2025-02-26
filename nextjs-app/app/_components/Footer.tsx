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
    <footer className="bg-green mt-9 md:mt-30 py-9 md:pt-20 lg:pt-30 md:pb-20">
        <div className="text-white">
          <div className="page-padding">
            <h5 className="pt-12">{heading}</h5>
            <ul className="my-12  space-y-4">
              {items?.length && items.map((item, i) => {
                return(
                  <div key={i}>
                    <h3 className="font-serif text-24 md:text-36 lg:text-64">{item.heading}</h3>
                    <p className="font-sans text-14 md:text-16">{item.description}</p>
                  </div>
                )
              })}
            </ul>

            <div className="text-center md:text-left">
              <a className="text-14 md:text-16" title="Email Sally-Ann" href={"mailto:" + email}>{email}</a>
            </div>
          </div>

          <div className="mt-12 px-10 md:page-padding">
            <div className="flex flex-col-reverse items-center md:flex-row md:items-end md:relative justify-center md:space-x-8">
              <div className="header text-white md:absolute md:left-0 mt-8 md:mt-0">
                  <svg width="40px" height="28px" viewBox="0 0 20 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.15989 10.8537C6.15989 10.148 5.90886 9.55671 5.42611 9.07987C5.00129 8.66026 4.71164 8.37416 3.53373 7.554C1.87307 6.40959 1.50618 6.10442 0.98481 5.43685C0.50206 4.8265 0.30896 4.27337 0.30896 3.37691C0.30896 1.46957 1.931 0.0390625 4.17096 0.0390625C5.38749 0.0390625 6.35299 0.306091 7.3378 0.821074C7.37642 1.12625 7.39573 1.39328 7.39573 1.75567C7.39573 2.27065 7.35711 3.20525 7.22194 3.79653C6.48816 2.06085 5.75438 0.916441 4.01648 0.916441C2.64547 0.916441 1.71859 1.75567 1.71859 3.05267C1.71859 3.64394 1.85376 4.12078 2.39444 4.67391C2.76133 5.0363 3.01236 5.24611 4.2482 6.10442C5.77369 7.15345 6.23713 7.4777 6.77781 8.08805C7.31849 8.71748 7.68538 9.633 7.68538 10.4913C7.68538 12.6275 5.9861 14.0008 3.45649 14.0008C2.14341 14.0008 1.21653 13.8101 0.28965 13.3714C0.07724 12.494 0 11.5785 0 10.8537C0 10.3387 0.03862 10.0526 0.05793 9.76652C0.86895 11.6548 1.52549 13.1425 3.59166 13.1425C5.13646 13.1425 6.15989 12.1698 6.15989 10.8537Z" />
                    <path d="M13.5558 0L17.3019 9.53672C17.5336 10.1471 17.8812 11.0435 18.1709 11.6729C18.5378 12.5122 18.7695 13.1225 19.2522 13.7138H18.9626C18.4605 13.7138 18.1129 13.6566 17.6881 13.6566C17.2633 13.6566 16.9543 13.7138 16.4137 13.7138H16.2206C16.5488 13.2942 16.6068 12.989 16.6068 12.6838C16.6068 12.0544 16.2978 11.2915 15.6606 9.53672L15.5061 9.15525H10.7945L10.6593 9.53672C9.98344 11.2915 9.82896 12.0353 9.82896 12.474C9.82896 12.8364 9.9062 13.1988 10.3503 13.7138H10.1379C9.67448 13.7138 9.34621 13.6566 9.01794 13.6566C8.59312 13.6566 8.24554 13.7138 7.89796 13.7138H7.68555C8.12968 13.0462 8.40002 12.5122 8.76691 11.6729C9.05656 11.0435 9.40414 10.1471 9.63586 9.53672L13.5558 0ZM11.142 8.33509H15.1971L13.2275 3.35693L11.142 8.33509Z" />
                  </svg>
              </div>
              <ul className="flex flex-col text-center text-14 md:text-left md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 md:mx-auto">
                {nav?.length && nav.map(navItem => {
                  return(
                    <li key={navItem._key}>
                      <ResolvedLink link={navItem}>{navItem.title}</ResolvedLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
    </footer>
  );
}
