import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";
import type { ComponentProps } from "react";

const navigation = createNavigation(routing);

export const { redirect, usePathname, useRouter, getPathname } = navigation;

type StrictLinkProps = ComponentProps<typeof navigation.Link>;
type StrictHref = StrictLinkProps["href"];

// Re-export Link but accept plain strings for href; content data uses string
// values that are known to match the configured pathnames.
type LinkProps = Omit<StrictLinkProps, "href"> & {
  href: StrictHref | string;
};

export function Link({ href, ...rest }: LinkProps) {
  const NavLink = navigation.Link;
  return <NavLink href={href as StrictHref} {...rest} />;
}
