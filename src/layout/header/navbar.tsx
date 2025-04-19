"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import logo from "@/assets/logo/bayvue.svg";
import menu_data from "@/data/menu-data";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link href="/" className="d-block">
            <Image
              src={logo}
              alt="logo"
              style={{
                color: "transparent",
                height: 140,
                position: "absolute",
                top: -20,
                background: "white",
                borderRadius: 10,
              }}
            />
          </Link>
        </div>
      </li>
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
            menu.mega_menu ? "dropdown mega-dropdown-sm" : ""
          }`}
        >
          {menu.dropdown && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                {menu.dropdown_menus?.map((dm, i) => (
                  <li key={i}>
                    <Link
                      href={dm.link}
                      className={`dropdown-item ${
                        pathname === dm.link ? "active" : ""
                      }`}
                    >
                      <span>{dm.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {!menu.dropdown && !menu.mega_menu && (
            <Link className="nav-link" href={menu.link} role="button">
              {menu.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
