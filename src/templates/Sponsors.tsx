/* eslint-disable react-dom/no-unsafe-target-blank */
import Image from 'next/image';

import { LogoCloud } from '@/features/landing/LogoCloud';
import { Section } from '@/features/landing/Section';

export const Sponsors = () => (
  <Section>
    <LogoCloud text="Our Partners">
      <a
        href=""
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/assets/images/clerk-logo-dark.png"
          alt="Titan"
          width="128"
          height="37"
        />
      </a>

      <a
        href=""
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/assets/images/crowdin-dark.png"
          alt="GAF"
          width="128"
          height="26"
        />
      </a>

      <a
        href=""
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/assets/images/sentry-dark.png"
          alt="Home Depot"
          width="128"
          height="38"
        />
      </a>

      <a href="">
        <Image
          src="/assets/images/nextjs-boilerplate-saas.png"
          alt="Lowes"
          width="128"
          height="30"
        />
      </a>
    </LogoCloud>
  </Section>
);
