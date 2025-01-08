/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import CtaAnchor from "./ctaAnchor";
export default function RpoCertified() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-6xl mx-auto relative bg-gray-800 rounded-lg p-6">
        <div class="overflow-hidden relative">
          <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 class="text-3xl font-extrabold text-white dark:text-white sm:text-4xl">
              <span class="block">
                CyberAB Registered Practitioner Organization
              </span>
              <span class="block text-indigo-500"></span>
            </h2>
            <p class="text-lg mt-4 text-gray-400">
              The Registered Practitioner Organization designation is for
              organizations that could provide services within the defense
              supply chain as an advisory firm or as a Managed Service Provider
              (MSP).
            </p>
            <div class="lg:flex-shrink-0">
              <div class="mt-12 inline-flex rounded-md shadow">
                <CtaAnchor text="Schedule Initial Consultation" />
              </div>
            </div>
          </div>
          <img
            src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/i5q/3u7/43g/The%20CyberAB%20-%20CyberAB%20Registered%20Practitioner%20Organization%20%28RPO%29%20-%202025-01-06%20%281%29.png"
            class="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block p-12"
          />
        </div>
      </div>
    </div>
  );
}
