import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import BlockFeatureEleven from "@/components/block-feature/block-feature-eleven";
import BlockFeatureTwelve from "@/components/block-feature/block-feature-twelve";
import TextFeatureEight from "@/components/text-feature/text-feature-eight";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BlockFeatureSix from "@/components/block-feature/block-feature-six";
import BlockFeatureTwo from "@/components/block-feature/block-feature-two";

export default function HomePage() {
  return (
    <main>
      {/* hero banner start */}
      <HeroBannerSix />
      {/* hero banner end */}

      {/* block feature eleven start */}
      {/* <BlockFeatureEleven /> */}
      {/* block feature eleven end */}
      <BlockFeatureSix />

      {/* block feature twelve start */}
      <BlockFeatureTwo />
      {/* <BlockFeatureTwelve /> */}
      {/* block feature twelve end */}

      {/* portfolio two start */}
      {/* <PortfolioTwo /> */}
      {/* portfolio two end */}

      {/* text feature eight start */}
      <TextFeatureEight style_2={true} />
      {/* text feature eight end */}

      {/* fancy banner five start */}
      {/* <FancyBannerFive style_3={true} /> */}
      {/* fancy banner five end */}

      {/* feedback six start */}
      {/* <FeedbackSix /> */}
      {/* feedback six end */}

      {/* team section start */}
      {/* <TeamSectionThree style_2={true} /> */}
      {/* team section end */}

      {/* fancy banner three start */}
      {/* <FancyBannerThree /> */}
      {/* fancy banner three end */}

      {/* newsletter banner start */}
      {/* <NewsletterBanner style_2={true} /> */}
      {/* newsletter banner end */}
    </main>
  );
}
