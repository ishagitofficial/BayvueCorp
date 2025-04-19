"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal

// import logo from "@/assets/logo/bayvue.svg";
import logo from "@/assets/images/logo/logo.svg";
import icon from "@/assets/images/icon/icon_94.svg";
import LoginModal from "@/components/common/login-modal";
import useSticky from "@/hooks/use-sticky";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const HeaderSix = () => {
  const { sticky } = useSticky();
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  const onClickHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-six sticky-menu ${
          sticky ? "fixed" : ""
        }`}
      >
        <div className="inner-content">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image
                    src={logo}
                    alt="logo"
                    // style={{
                    //   color: "transparent",
                    //   height: 140,
                    //   position: "absolute",
                    //   top: -5,
                    //   background: "white",
                    //   borderRadius: 10,
                    // }}
                  />
                </Link>
              </div>

              <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                <button
                  onClick={onClickHandler}
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  aria-expanded={show}
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${show ? "show" : ""}`}
                  id="navbarNav"
                >
                  {/* header navbar start */}
                  <Navbar />
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default HeaderSix;
