import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";
import localFont from 'next/font/local'

import DraftModeToast from "@/app/_components/DraftModeToast";
import { Footer, FooterProps } from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { settingsQuery, layoutQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { handleError } from "./client-utils";

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });

  const title = settings?.seo?.title || settings?.title || 'Sally-Ann Dale';
  const description = settings?.seo?.description;

  const shareGraphic = resolveOpenGraphImage(settings?.seo?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.seo?.ogImage?.metadataBase
      ? new URL(settings.seo?.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
    openGraph: {
      images: shareGraphic ? [shareGraphic] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const louiseDisplay = localFont({
  src: '../public/fonts/LouizeDisplay-Regular-205TF.woff2',  // Go up one level from app/ to reach nextjs-app/
  variable: '--font-louise'
})

const circularFont = localFont({
  src: '../public/fonts/CircularXXSub-Regular.woff',
  variable: '--font-circular'
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: layout } = await sanityFetch({
    query: layoutQuery,
    // Metadata should never contain stega
    stega: false,
  });

  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${circularFont.variable} ${louiseDisplay.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen pt-8">
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />
              <VisualEditing />
            </>
          )}
          <SanityLive onError={handleError} />
          <Header />
          <main className="">{children}</main>
          <Footer {...layout.footer as FooterProps}/>
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
