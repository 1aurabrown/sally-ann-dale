import PortableText from "@/app/_components/SimplePortableText";
import { type PortableTextBlock } from "next-sanity";
import ResolvedLink from "@/app/_components/ResolvedLink";

type ListModuleProps = {
  _type: string;
  heading: string;
  items: PortableTextBlock[];
  link?: any,
  indent?: boolean,
};

export default function ListModule ({
  _type,
  items,
  heading,
  link,
  indent
}: ListModuleProps) {  if (_type != 'listModule') return


  return (
    <section className="max-w-screen-2xl mx-auto page-padding">
      <h3 className="header text-36 md:text-48 lg:text-64">{heading}</h3>

      { items.length && (
          <PortableText
            className={'sm:columns-2 lg:columns-3 sm:ml-1/3 lg:ml-1/4 [&>p]:inline-block [&>p]:w-full ' + (indent ? 'pl-4 [&>p]:-indent-4' : '-mt-4 [&>p]:mt-4')}
            value={items as PortableTextBlock[]}
          />
      )}
      {link && <div className='flex items-center justify-center underline mt-10'><ResolvedLink link={link}>{link.title}</ResolvedLink></div>}
    </section>
  )
}