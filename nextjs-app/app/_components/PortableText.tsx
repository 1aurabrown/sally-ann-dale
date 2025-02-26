/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";

import ResolvedLink from "@/app/_components/ResolvedLink";
import Image from "@/app/_components/Image";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }: any) => {
        return <h1 className="header text-24 md:text-36 lg:text-64 mt-10 mb-4">{children}</h1>;
      },
      h2: ({ children }: any) => {
        return <h2 className="header text-24 md:text-36 lg:text-48 mt-10 mb-4">{children}</h2>;
      },
      h3: ({ children }: any) => {
        return <h3 className="header text-19 md:text-24 lg:text-36 mt-10 mb-4">{children}</h3>;
      },
      h4: ({ children }: any) => {
        return <h4 className="font-bold mt-8 mb-2">{children}</h4>;
      },
      normal: ({ children }: any) => {
        return <p className="my-4 first:mt-0 last:mb-0">{children}</p>;
      },
      blockquote: ({ children }: any) => {
        return <p className="header max-w-lg md:max-w-xl lg:max-w-3xl mx-auto text-24 md:text-36 lg:text-48 text-center leading-tight my-10 md:my-16 lg:my-20">{children}</p>;
      },
    },
    list: {
      bullet: ({ children }: any) => {
        return <ul className="list-disc ml-[1.5em] my-[1em]">{children}</ul>;
      },
      number: ({ children }: any) => {
        return <ol className="list-decimal ml-[1.5em] my-[1em]">{children}</ol>;
      },
    },
    marks: {
      link: ({ children, value: link }) => {
        return <ResolvedLink link={link}>{children}</ResolvedLink>;
      },
    },
    types: {
      image: ({value}) => <figure className="mx-auto max-w-sm max-w-3/4 my-1/8"> <Image className="w-full" image={value} /> <figcaption className="text-right text-12 mt-thin">{value.caption}</figcaption></figure>,
    }
  };

  return (
    <div className={className}>
      <PortableText components={components} value={value} />
    </div>
  );
}
