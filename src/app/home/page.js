"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../index.css";

export default function Page() {
  const router = useRouter();

  const brands = [
    {
      id: 1,
      logo: "/images/logos/control-logo.png",
      image: "/images/drives-control.webp",
      URL: "https://acim.nidec.com/drives/control-techniques",
      tagline: "Your gateway to higher efficiency",
      products: ["", "", "", ""],
    },
    {
      id: 2,
      logo: "/images/logos/fluke_logo.jpg",
      image: "/images/clamp.webp",
      URL: "https://www.fluke.com/",
      tagline: "Precision Instruments For Quality Control",
      products: ["", "", "", ""],
    },
    {
      id: 3,
      logo: "/images/logos/genebre-logo.jpg",
      image: "/images/AC.webp",
      URL: "https://www.genebre.com/",
      tagline: "Be Water, Be Genebre",
      products: ["", "", "", ""],
    },
    {
      id: 4,
      logo: "/images/logos/Milwaukee_Logo.jpg",
      image: "/images/wrench-milwa.webp",
      URL: "https://www.milwaukeetool.eu/",
      tagline: "One Team, One Focus, The User",
      products: ["", "", "", ""],
    },
    {
      id: 5,
      logo: "/images/logos/RS_LOGO.jpg",
      image: "/images/seals-rs.webp",
      URL: "https://africa.rsdelivers.com/",
      tagline: "RS Pro, Your Smart Choice",
      products: ["", "", "", ""],
    },
    {
      id: 6,
      logo: "/images/logos/SICK-LOGO.png",
      image: "/images/sick-sensors.webp",
      URL: "https://www.sick.com/us/en/",
      tagline: "Sensor Intelligence",
      products: ["", "", "", ""],
    },
    {
      id: 7,
      logo: "/images/logos/Sunflex-logo.jpg",
      image: "/images/sunflex-hose.webp",
      URL: "http://sunflex.com.sg/",
      tagline: "Talent, Our Power",
      products: ["", "", "", ""],
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing until the client-side check is complete
  }

  return (
    <div className="home-cont">
      <div className="heading">
        <h2>BEST BRANDS WE WORK</h2>
        <img src="/images/gears.svg" alt="gears icon" />
      </div>

      <main className="home-main">
        {brands.map((brand) => (
          <div
            className="cards"
            key={brand.id}
            onClick={() => router.push(`${brand.URL}`)}
          >
            <div className="head">
              <p>{brand.tagline}</p>
              <img className="logo" src={brand.logo} alt={brand.tagline} />
            </div>

            <div className="content">
              <img src={brand.image} alt={brand.tagline} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
