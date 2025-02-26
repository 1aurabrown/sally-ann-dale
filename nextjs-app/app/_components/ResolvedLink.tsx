import Link from "next/link";

import { linkResolver } from "@/sanity/lib/utils";

interface ResolvedLinkProps {
  link: any;
  children?: React.ReactNode;
  className?: string;
  title?: string
}

export default function ResolvedLink({
  link,
  children,
  className,
  title
}: ResolvedLinkProps) {

  // resolveLink() is used to determine the type of link and return the appropriate URL.

  const resolvedLink = linkResolver(link);
  if (typeof resolvedLink === "string") {
    return <Link
        title={title}
        href={resolvedLink}
        target={link?.openInNewTab ? "_blank" : undefined}
        rel={link?.openInNewTab ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
      </Link>
  }
  return <>{children}</>;
}
