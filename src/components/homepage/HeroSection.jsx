import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';

export default function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center flex-col items-center flex">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
          Intercept & Modify HTTP Requests
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
          Requestly lets developers Modify Headers, Redirect URLs, Switch Hosts, Mock API Response, Delay Network requests, and much more.
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="/browser-extension/chrome"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              Get Started with Extension
            </Link>
            <Link
              href="/desktop-app/mac"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              Get started with Desktop App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
