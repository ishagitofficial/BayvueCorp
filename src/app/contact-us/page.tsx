import React from "react";
import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ContactArea from "@/components/contact/contact-area";
import shape from "@/assets/images/shape/shape_33.svg";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

export const metadata: Metadata = {
  title: "Contact Page",
};

const ContactPage = () => {
  return (
    <main>
      {/* breadcrumb start */}
      <BreadcrumbOne
        title="Contact us for inquiries"
        subtitle="Get our all info and also can message us directly from here"
        page="Contact"
        shape={shape}
      />
      {/* breadcrumb end */}

      {/* contact area start */}
      <ContactArea />
      {/* contact area end */}

      {/* news letter start */}
      {/* news letter end */}
    </main>
  );
};

export default ContactPage;
