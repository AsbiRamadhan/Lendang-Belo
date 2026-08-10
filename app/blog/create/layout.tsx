import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Artikel Blog | Admin Desa Lendang Belo",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CreateBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
