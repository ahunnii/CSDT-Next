const activeLink = (url: string, pathname: string) => (pathname === url ? "navbar-link-active" : "");

export default activeLink;
