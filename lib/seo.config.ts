import type { Metadata, Viewport } from "next";

export const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lendangbelo.com";

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "bX4p-GktwfzN_9csiAC9wPX-R3n7VoSgvso3GOXkqT8",
  },
  title: {
    default: "Desa Wisata Lendang Belo | Terasering Sawah Montong Gading Lombok Timur NTB",
    template: "%s | Desa Wisata Lendang Belo Lombok Timur NTB",
  },
  description:
    "Portal Resmi Desa Wisata Lendang Belo, Kecamatan Montong Gading, Kabupaten Lombok Timur, Nusa Tenggara Barat (NTB). Jelajahi keindahan terasering sawah hijau, Festival Dara Ngindang, Siong Kopi Kete, dan homestay tradisional Lombok.",
  keywords: [
    "Lendang Belo",
    "Lendangbelo",
    "Desa Lendang Belo",
    "Desa Wisata Lendang Belo",
    "Terasering Sawah Lendang Belo",
    "Terasering Sawah Lombok",
    "Terasering Sawah NTB",
    "Montong Gading",
    "Montong Gading Lombok Timur",
    "Lombok Timur",
    "Lombok Timur NTB",
    "Lombok",
    "NTB",
    "Nusa Tenggara Barat",
    "Wisata Alam Lombok Timur",
    "Wisata Terasering Sawah",
    "Festival Dara Ngindang",
    "Siong Kopi Kete",
    "Homestay Lendang Belo",
    "Penginapan Murah Lombok Timur",
    "Wisata Desa Lombok",
    "Ekowisata NTB",
    "Wisata Budaya Lombok",
  ],
  authors: [{ name: "Pemerintah Desa Lendang Belo", url: baseUrl }],
  creator: "Desa Lendang Belo",
  publisher: "Pemerintah Desa Lendang Belo",
  category: "Tourism",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Desa Wisata Lendang Belo | Terasering Sawah Montong Gading Lombok Timur NTB",
    description:
      "Jelajahi keindahan panorama terasering sawah, tradisi budaya, dan penginapan homestay di Desa Lendang Belo, Montong Gading, Lombok Timur, NTB.",
    url: baseUrl,
    siteName: "Desa Wisata Lendang Belo",
    images: [
      {
        url: "https://res.cloudinary.com/tar8ttin/image/upload/v1786118766/lendang-belo-ui/bg_5.jpg",
        width: 1200,
        height: 630,
        alt: "Terasering Sawah Desa Wisata Lendang Belo Montong Gading Lombok Timur NTB",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Wisata Lendang Belo | Terasering Sawah Montong Gading Lombok Timur NTB",
    description:
      "Wisata Alam Terasering Sawah & Budaya di Desa Lendang Belo, Montong Gading, Lombok Timur, NTB.",
    images: ["https://res.cloudinary.com/tar8ttin/image/upload/v1786118766/lendang-belo-ui/bg_5.jpg"],
  },
  other: {
    "geo.region": "ID-NB",
    "geo.placename": "Montong Gading, Lombok Timur, Nusa Tenggara Barat",
    "geo.position": "-8.5833;116.4167",
    "ICBM": "-8.5833, 116.4167",
  },
};

export const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Desa Wisata Lendang Belo",
      description:
        "Portal Resmi Desa Wisata Lendang Belo, Kecamatan Montong Gading, Kabupaten Lombok Timur, Nusa Tenggara Barat (NTB).",
      inLanguage: "id-ID",
    },
    {
      "@type": "TouristDestination",
      "@id": `${baseUrl}/#destination`,
      name: "Desa Wisata Lendang Belo",
      description:
        "Desa Wisata Terasering Sawah dan Budaya di Kecamatan Montong Gading, Kabupaten Lombok Timur, Nusa Tenggara Barat (NTB).",
      url: baseUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Desa Lendang Belo",
        addressLocality: "Montong Gading",
        addressRegion: "Lombok Timur, Nusa Tenggara Barat",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.5833,
        longitude: 116.4167,
      },
      touristType: ["Ecotourism", "Cultural Tourism", "Agrotourism"],
      includesAttraction: [
        {
          "@type": "TouristAttraction",
          name: "Terasering Sawah Lendang Belo",
          description:
            "Pemandangan lanskap terasering sawah hijau bertingkat khas Montong Gading, Lombok Timur, NTB.",
        },
        {
          "@type": "TouristAttraction",
          name: "Festival Dara Ngindang",
          description:
            "Festival dan perayaan budaya tahunan kebanggaan warga Desa Lendang Belo, Lombok Timur.",
        },
        {
          "@type": "TouristAttraction",
          name: "Siong Kopi Kete",
          description:
            "Kopi olahan kete tradisional khas Desa Lendang Belo, Montong Gading.",
        },
      ],
    },
    {
      "@type": "GovernmentOrganization",
      "@id": `${baseUrl}/#organization`,
      name: "Pemerintah Desa Lendang Belo",
      url: baseUrl,
      email: "desalendangbelo2010@gmail.com",
      telephone: "+6281807135209",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Desa Lendang Belo",
        addressLocality: "Montong Gading",
        addressRegion: "Lombok Timur, Nusa Tenggara Barat",
        addressCountry: "ID",
      },
    },
  ],
};
