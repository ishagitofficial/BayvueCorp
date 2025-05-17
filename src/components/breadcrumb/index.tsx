// src/components/breadcrumb/breadcrumb.tsx
import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  path: string[];
}

const Breadcrumb = ({ title, path }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb-area bg-two text-left pt-50 lg-pt-50 pb-50 lg-pb-70">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="page-title">{title}</h2>
              <ul className="page-breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {path.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
