// src/app/cookie-policy/page.tsx
"use client";
import React from "react";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";

const CookiePolicy = () => {
  return (
    <>
      <div className="policy-wrapper mt-90 lg-mt-60 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="policy-content">
                <div className="title-one text-center mb-60">
                  <Breadcrumb title="" path={["Legal", "Cookie Policy"]} />

                  <h2>Cookie Policy</h2>
                  <p className="text-lg mt-25">
                    Understanding how and why we use cookies to improve your
                    experience
                  </p>
                </div>

                <div className="policy-block mb-50">
                  <h3 className="block-title">1. What Are Cookies</h3>
                  <p className="text-lg">
                    Cookies are small text files stored on your device when you
                    visit our website. They help us provide and improve our
                    services by:
                  </p>
                  <ul className="style-none list-item">
                    <li>Remembering your preferences</li>
                    <li>Understanding how you use our website</li>
                    <li>Improving site performance and user experience</li>
                  </ul>
                </div>

                <div className="policy-block mb-50">
                  <h3 className="block-title">2. Types of Cookies We Use</h3>
                  <ul className="style-none list-item">
                    <li>
                      <strong>Essential Cookies:</strong> Required for basic
                      site functionality
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand
                      site usage
                    </li>
                    <li>
                      <strong>Functional Cookies:</strong> Remember your
                      preferences
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Track effectiveness of
                      our services
                    </li>
                  </ul>
                </div>

                <div className="policy-block">
                  <h3 className="block-title">
                    3. Managing Your Cookie Preferences
                  </h3>
                  <p className="text-lg">
                    You can control cookies through your browser settings. Note
                    that disabling certain cookies may limit your ability to use
                    some features of our website.
                  </p>
                  <div className="mt-25">
                    <Link href="/contact-us" className="btn-four">
                      Contact Us for Questions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
