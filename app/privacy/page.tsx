import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - ActMate",
  description: "Privacy Policy for ActMate",
};

export default function PrivacyPage(): JSX.Element {
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
          <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
              <p>
                ActMate ("we", "our", or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways:</p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, and other contact
                  information you provide when creating an account.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use the app, including
                  features accessed and time spent in the app.
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating system, unique device
                  identifiers, and mobile network information.
                </li>
                <li>
                  <strong>Content Data:</strong> Scripts, lines, recordings, and other content you
                  create or upload within the app.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>provide, maintain, and improve our services;</li>
                <li>process your transactions and send related information;</li>
                <li>send you technical notices and support messages;</li>
                <li>respond to your comments and questions;</li>
                <li>monitor and analyze trends and usage;</li>
                <li>detect, prevent, and address technical issues.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">4. Data Storage and Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect
                your personal information. Your data is stored securely and is only accessible to
                authorized personnel. However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">5. Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following situations:</p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>with your consent;</li>
                <li>to comply with legal obligations;</li>
                <li>to protect and defend our rights or property;</li>
                <li>with service providers who assist us in operating our app, subject to confidentiality agreements.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>access and receive a copy of your personal data;</li>
                <li>rectify inaccurate or incomplete data;</li>
                <li>request deletion of your personal data;</li>
                <li>object to processing of your personal data;</li>
                <li>request restriction of processing your personal data;</li>
                <li>request transfer of your data to another service.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide you with our
                services and as described in this Privacy Policy. We will also retain and use your
                information to comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">8. Children's Privacy</h2>
              <p>
                Our service is not intended for children under the age of 13. We do not knowingly
                collect personal information from children under 13. If you are a parent or
                guardian and believe your child has provided us with personal information, please
                contact us.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                updated" date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through the
                app or our support channels.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


