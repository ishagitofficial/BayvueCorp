// src/app/privacy-policy/page.tsx
"use client";
import React from "react";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="policy-wrapper mt-90 lg-mt-60 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="policy-content">
                <div className="title-one text-center mb-60">
                  <Breadcrumb title="" path={["Legal", "Privacy Policy"]} />
                  <h2>Your Privacy Matters</h2>
                  <p className="text-lg mt-25">
                    At Bayvue Corp, we take your privacy seriously and are
                    committed to protecting your personal information.
                  </p>
                </div>

                <div className="policy-block mb-50">
                  <h3 className="block-title">1. Information We Collect</h3>
                  <p className="text-lg">
                    We collect information that you provide directly to us,
                    including:
                  </p>
                  <ul className="style-none list-item">
                    <li>Name and contact information</li>
                    <li>Resume and professional experience</li>
                    <li>Employment preferences and history</li>
                    <li>Communication records between you and Bayvue Corp</li>
                  </ul>
                </div>

                <div className="policy-block mb-50">
                  <h3 className="block-title">
                    2. How We Use Your Information
                  </h3>
                  <p className="text-lg">
                    We use the collected information for:
                  </p>
                  <ul className="style-none list-item">
                    <li>Providing recruitment and staffing services</li>
                    <li>Matching candidates with job opportunities</li>
                    <li>Communication about potential positions</li>
                    <li>Improving our services and user experience</li>
                  </ul>
                </div>

                <div className="policy-block mb-50">
                  <h3 className="block-title">3. Information Sharing</h3>
                  <p className="text-lg">We may share your information with:</p>
                  <ul className="style-none list-item">
                    <li>Potential employers with your consent</li>
                    <li>Service providers who assist in our operations</li>
                    <li>As required by law or regulation</li>
                  </ul>
                </div>

                <div className="policy-block">
                  <h3 className="block-title">4. Your Rights</h3>
                  <p className="text-lg">You have the right to:</p>
                  <ul className="style-none list-item">
                    <li>Access your personal data</li>
                    <li>Request corrections to your data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
