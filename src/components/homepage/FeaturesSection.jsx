import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import FirefoxIcon from '../../icons/FirefoxIcon';
import RedirectRuleIcon from '../../icons/RedirectRuleIcon';
import Head from '@docusaurus/Head';
import { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import HeadersRuleIcon from '@site/src/icons/HeadersRuleIcon';
import ResponseRuleIcon from '../../icons/ResponseRuleIcon';
import InsertScriptRuleIcon from '@site/src/icons/InsertScriptRuleIcon';
import SafariIcon from '@site/src/icons/SafariIcon';
import TerminalIcon from '@site/src/icons/TerminalIcon';
import MobileIcon from '@site/src/icons/MobileIcon';
import ReplayIcon from '@site/src/icons/ReplayIcon';
import PuzzleIcon from '@site/src/icons/PuzzleIcon';
import ApiIcon from '@site/src/icons/ApiIcon';

function FeatureCard({href, Icon, title, content, alternate=false, comingSoon=false}) {

  const router = useHistory()

  return (
    <div className={clsx("flex-1 p-6 px-8 lg:rounded-3xl hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white cursor-pointer", !alternate ? "bg-secondary-800": "")}
    onClick={() => router.push(href)}
    >
      <h4>
        { Icon?(<span><Icon className="h-6 w-6" /> </span>):null }
        { title } {comingSoon? <span className="text-sm">(Coming Soon)</span>: null}
      </h4>
      <p className="text-sm leading-relaxed text-text-400">
        { content }
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  const { colorMode } = useColorMode();
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section }) {
    return (
      <div
        className={clsx(
          'flex-auto cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold capitalize',
          visibleSection === section
            ? 'bg-primary text-white'
            : 'text-black dark:text-white'
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
        {section}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-building">
      <Head>
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-light.png" />
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-dark.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          <h2 className="my-0 font-jakarta lg:text-3xl">
            Debug Like a Pro
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
              <Pill section="browser extension" />
              <Pill section="desktop app" />
              <Pill section="session recording" />
              <Pill section="mock server" />
            </div>
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="browser extension"
          id="browser extension"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Browser Extension</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
            Lightweight Web Debugging Proxy to Modify HTTPs Request & Response. Supported in all major browsers.
            </p>
          </div>
          <div className='flex flex-col lg:flex-row flex-[6]'>

            <FeatureCard title="Redirect Request" content="Redirect APIs/Scripts from one environment to another (e.g. Prod to Staging)." Icon={RedirectRuleIcon} href="/browser-extension/chrome/http-modifications/redirect-rule" />
            <FeatureCard title="Modify Headers" content="Add, Delete or Override Request & Response Headers." Icon={HeadersRuleIcon} href="/browser-extension/chrome/http-modifications/headers-rule" alternate={true} />
            <FeatureCard title="Modify API Response" content="Develop frontend when backend isn't ready or Modify existing API response on production environment." Icon={ResponseRuleIcon} href="/browser-extension/chrome/http-modifications/response-rule" />
            <FeatureCard title="Insert Scripts" content="Inject custom scripts/styles on external webpages for testing/demo purposes." Icon={InsertScriptRuleIcon} href="/browser-extension/chrome/http-modifications/script-rule" alternate={true} />

          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="desktop app"
          id="desktop app"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Desktop App</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Cross Platform Desktop App with all the Network debugging capabilities. Supports Mac, Windows, Linux.
            </p>
          </div>
          <div className='flex flex-col lg:flex-row flex-[6]'>

            <FeatureCard title="Debug Safari" content="Inspect & Modify requests from Safari Browser." Icon={SafariIcon} href="/desktop-app/mac/getting-started/setup/safari" />
            <FeatureCard title="Mobile Debugger" content="Inspect & Modify your requests from Android/IOS Browsers and apps." Icon={MobileIcon} href="/desktop-app/mac/getting-started/setup/android" alternate={true} />
            <FeatureCard title="Debug Backend" content="Inspect & Modify requests from your backend systems." Icon={TerminalIcon} href="/desktop-app/mac/getting-started/setup/nodejs" />
            

          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="session recording"
          id="session recording"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Session Recording</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Data Rich Bug Reporting
            </p>
            <Link className="text-sm" href="/session-recording">
              Learn More &rarr;
            </Link>
          </div>
          <div className='flex flex-col lg:flex-row flex-[6]'>

            <FeatureCard title="Automatic Record Sessions" content="Directly replay the session without trying to reproduce it again." Icon={ReplayIcon} href="/session-recording/record#steps" />
            <FeatureCard title="Network & Console Logs" content="Makes the bug report data rich by stitching the console & network logs with the video in the browsing session." Icon={HeadersRuleIcon} href="/session-recording" alternate={true} />
            <FeatureCard comingSoon={true} title="Integrations" content="Directly send bug reports to Jira, Slack, Linear and many more." Icon={PuzzleIcon} href="/session-recording" />
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mock server"
          id="mock server"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Mock & File Server</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Easiest & quickest way to host mock APIs & Files (JS, CSS, HTMl) on cloud. One click integration with Requestly Rules.
            </p>
            <Link href="mocks" className="text-sm">
              Learn More &rarr;
            </Link>
          </div>
          <div className='flex flex-col lg:flex-row flex-[6]'>

            <FeatureCard title="Mock APIs" content="Get working mock REST APIs with custom statuses, route, headers, body, HTTPS Method.." Icon={ApiIcon} href="/mocks/mock-server/getting-started" />
            <FeatureCard title="File Server" content="Get working Mock files (JS/CSS/HTML) and use them anywhere for debugging.." Icon={HeadersRuleIcon} href="/mocks/file-server/getting-started" alternate={true} />
          </div>
        </div>
      </div>
      <div className="text-center text-text-400">
        <p>
          Found any issue?{' '}
          <Link href="https://github.com/requestly/requestly/issues">Report Here</Link>
        </p>
      </div>
    </section>
  );
}
