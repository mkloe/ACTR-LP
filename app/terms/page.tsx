import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - ActMate",
  description: "Terms of Service for ActMate",
};

export default function TermsPage(): JSX.Element {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-12 md:px-12 md:py-20">
        <Link
          href="/"
          className="mb-8 inline-block text-gray-400 transition-colors hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="space-y-8 text-white">
          <h1 className="text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ActMate, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of ActMate for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained in ActMate;</li>
                <li>remove any copyright or other proprietary notations from the materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password.
                You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">4. Content</h2>
              <p>
                You retain all rights to any content you create, upload, or store using ActMate. By
                using our service, you grant us a license to store and process your content solely
                for the purpose of providing the service to you.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">5. Prohibited Uses</h2>
              <p>You may not use ActMate:</p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>in any way that violates any applicable law or regulation;</li>
                <li>to transmit any malicious code or viruses;</li>
                <li>to impersonate or attempt to impersonate another user;</li>
                <li>in any manner that could damage, disable, or impair the service.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">6. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the service immediately,
                without prior notice, for conduct that we believe violates these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">7. Disclaimer</h2>
              <p>
                The materials on ActMate are provided on an "as is" basis. ActMate makes no
                warranties, expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">8. Limitation of Liability</h2>
              <p>
                In no event shall ActMate or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use ActMate.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">9. Changes to Terms</h2>
              <p>
                ActMate reserves the right to revise these terms of service at any time without
                notice. By using this service you are agreeing to be bound by the then current
                version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">10. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us through
                the app or our support channels.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


