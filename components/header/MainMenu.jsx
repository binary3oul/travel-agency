import Link from "next/link";

import {
  homeItems,
  categories
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/">
            <span className="mr-10">Home</span>
          </Link>
        </li>
        {/* End home page menu */}

        <li className="menu-item-has-children -has-mega-menu">
          <Link href="/hotel/hotel-list-v5">
            <span className="mr-10">Destination</span>
          </Link>
        </li>

        <li className="menu-item-has-children -has-mega-menu">
          <Link href="/hotel/hotel-single-v1/5">
            <span className="mr-10">Locations</span>
          </Link>
        </li>

        {/* <li className="menu-item-has-children -has-mega-menu">
          <Link href="/blog/blog-details/1">
            <span className="mr-10">Blog</span>
          </Link>
        </li> */}
        <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {categories.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End categories menu items */}

        <li className="menu-item-has-children -has-mega-menu">
          <Link href="/others-pages/about">
            <span className="mr-10">About Us</span>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default MainMenu;
