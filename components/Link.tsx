// components/Link.tsx
import { usePageContext } from "vike-react/usePageContext";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ href, children, className = "", ...props }: Props) {
  const { urlPathname } = usePageContext();
  const isActive =
    href === "/" ? urlPathname === "/" : urlPathname.startsWith(href);

  const activeClass =
    "text-white before:w-full before:bg-blue-500"; // additional active styles

  return (
    <a
      href={href}
      className={`relative px-3 py-1 rounded-md text-gray-300 transition-colors duration-300 hover:text-white hover:before:absolute hover:before:-bottom-1 hover:before:left-0 hover:before:h-0.5 hover:before:w-full hover:before:bg-blue-500 ${
        isActive ? activeClass : ""
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
