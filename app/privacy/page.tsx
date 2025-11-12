"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="cursor-pointer">
              <Logo size="sm" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: November 12, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PractiSight LLC (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our online reputation
                monitoring service for dental practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using PractiSight, you agree to the collection and use of
                information in accordance with this policy. If you have any
                questions or concerns, please contact us at{" "}
                <a
                  href="mailto:support@practisight.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  support@practisight.com
                </a>
                .
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We collect information that you provide directly to us and
                information that is automatically collected when you use our
                service:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Account Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you create an account, we collect your email address,
                    name, and password. This information is used to manage your
                    account and provide you with access to our service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Payment Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Payment processing is handled securely by Stripe. We do not
                    store your full credit card information on our servers.
                    Stripe collects and processes your payment details in
                    accordance with their own privacy policy and PCI-DSS
                    compliance standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Practice Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect information about your dental practice(s),
                    including practice name, location addresses, phone numbers,
                    and Google Place IDs. This information is necessary to
                    monitor reviews for your specific locations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Review Data
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect and store review data from Google, including
                    review text, ratings, reviewer names (as publicly displayed
                    on Google), and review timestamps. This data is necessary to
                    provide our monitoring and analytics services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Usage Data
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We automatically collect information about how you interact
                    with our service, including login times, features used,
                    pages viewed, and technical information such as your browser
                    type, IP address, and device information. This helps us
                    improve our service and troubleshoot issues.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Provide and Improve Our Service:</strong> To operate,
                  maintain, and enhance PractiSight&apos;s features and
                  functionality.
                </li>
                <li>
                  <strong>Process Payments:</strong> To process subscription
                  payments and manage billing through our payment processor,
                  Stripe.
                </li>
                <li>
                  <strong>Send Notifications and Alerts:</strong> To send you
                  email notifications about new reviews, account updates, and
                  important service announcements.
                </li>
                <li>
                  <strong>Analytics and Performance Monitoring:</strong> To
                  understand how users interact with our service and identify
                  areas for improvement.
                </li>
                <li>
                  <strong>AI-Powered Insights:</strong> For Professional tier
                  subscribers, we use OpenAI&apos;s GPT-4 to analyze review
                  sentiment and generate actionable recommendations.
                </li>
                <li>
                  <strong>Customer Support:</strong> To respond to your
                  questions, requests, and provide technical support.
                </li>
                <li>
                  <strong>Legal and Security:</strong> To detect, prevent, and
                  address fraud, security issues, and protect the rights and
                  safety of our users.
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take the security of your data seriously and implement
                industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Encryption:</strong> All data transmitted between your
                  browser and our servers is encrypted using SSL/TLS protocols.
                  Sensitive data is encrypted at rest in our databases.
                </li>
                <li>
                  <strong>Secure Data Storage:</strong> Your data is stored
                  securely using Supabase, a PostgreSQL-based platform with
                  robust security features and regular backups.
                </li>
                <li>
                  <strong>Access Controls:</strong> We implement strict access
                  controls to ensure that only authorized personnel can access
                  user data, and only when necessary for service operations.
                </li>
                <li>
                  <strong>Regular Security Audits:</strong> We conduct regular
                  security reviews and updates to maintain the integrity of our
                  systems.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                While we strive to protect your information, no method of
                transmission over the internet or electronic storage is 100%
                secure. We cannot guarantee absolute security but remain
                committed to protecting your data to the best of our ability.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PractiSight integrates with the following third-party services
                to provide our features:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Stripe
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use Stripe for secure payment processing. Stripe may
                    collect and process your payment information in accordance
                    with their{" "}
                    <a
                      href="https://stripe.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Google Places API
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use Google Places API to fetch review data for your
                    practice locations. Google&apos;s{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    applies to data collected through their API.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    OpenAI (Professional Tier)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For Professional tier subscribers, we use OpenAI&apos;s
                    GPT-4 to analyze review sentiment and generate insights.
                    Review data sent to OpenAI is processed according to
                    their{" "}
                    <a
                      href="https://openai.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Privacy Policy
                    </a>
                    . OpenAI does not use data submitted via their API to train
                    their models.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Supabase
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use Supabase for secure data storage and database
                    management. Data is stored in accordance with
                    Supabase&apos;s{" "}
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Resend
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use Resend for email delivery, including notifications
                    and account-related communications. Resend processes email
                    data in accordance with their{" "}
                    <a
                      href="https://resend.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Access Your Data:</strong> You can access and review
                  your account information and practice data at any time through
                  your PractiSight dashboard.
                </li>
                <li>
                  <strong>Request Data Deletion:</strong> You may request that
                  we delete your account and associated data by contacting us at{" "}
                  <a
                    href="mailto:support@practisight.com"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    support@practisight.com
                  </a>
                  . Some data may be retained for legal or business purposes as
                  required by law.
                </li>
                <li>
                  <strong>Opt-Out of Marketing Emails:</strong> You can
                  unsubscribe from marketing communications at any time by
                  clicking the &quot;unsubscribe&quot; link in our emails. You
                  will continue to receive essential service-related
                  communications.
                </li>
                <li>
                  <strong>Data Portability:</strong> You can request a copy of
                  your data in a portable format. Contact us at{" "}
                  <a
                    href="mailto:support@practisight.com"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    support@practisight.com
                  </a>{" "}
                  for assistance.
                </li>
                <li>
                  <strong>Correction:</strong> You can update or correct your
                  account information directly in your dashboard settings.
                </li>
              </ul>
            </section>

            {/* CCPA Compliance */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a California resident, you have additional rights
                under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Right to Know:</strong> You have the right to know
                  what personal information we collect, use, disclose, and sell
                  (we do not sell your data).
                </li>
                <li>
                  <strong>Right to Deletion:</strong> You have the right to
                  request deletion of your personal information, subject to
                  certain exceptions.
                </li>
                <li>
                  <strong>Right to Opt-Out of Sale:</strong> We do not sell your
                  personal information to third parties.
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> We will not
                  discriminate against you for exercising your CCPA rights.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:support@practisight.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  support@practisight.com
                </a>
                . We will verify your identity before processing your request.
              </p>
            </section>

            {/* GDPR Compliance */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                European Privacy Rights (GDPR)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), you have
                rights under the General Data Protection Regulation (GDPR):
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Legal Basis for Processing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We process your personal data based on the following legal
                    grounds:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                    <li>
                      <strong>Contract Performance:</strong> To provide our
                      service as agreed in our Terms of Service.
                    </li>
                    <li>
                      <strong>Legitimate Interests:</strong> To improve our
                      service, prevent fraud, and ensure security.
                    </li>
                    <li>
                      <strong>Consent:</strong> When you opt-in to marketing
                      communications or optional features.
                    </li>
                    <li>
                      <strong>Legal Obligations:</strong> To comply with legal
                      requirements and regulations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Data Retention
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal data for as long as your account is
                    active or as needed to provide our services. After account
                    deletion, we may retain certain information for legal,
                    accounting, or security purposes for up to 7 years.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    International Data Transfers
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your data may be transferred to and processed in the United
                    States and other countries where our service providers
                    operate. We ensure appropriate safeguards are in place for
                    international transfers, including Standard Contractual
                    Clauses approved by the European Commission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your GDPR Rights
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                    <li>Right to restriction of processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>
                      Right to withdraw consent (where processing is based on
                      consent)
                    </li>
                    <li>
                      Right to lodge a complaint with your local supervisory
                      authority
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                To exercise your GDPR rights, please contact us at{" "}
                <a
                  href="mailto:support@practisight.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  support@practisight.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    What Are Cookies?
                  </h3>
                  <p className="leading-relaxed">
                    Cookies are small text files that are placed on your device
                    when you visit our website. They help us provide you with a
                    better experience by remembering your preferences and
                    understanding how you use our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Types of Cookies We Use
                  </h3>

                  <div className="ml-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Essential Cookies (Always Active)
                      </h4>
                      <p className="leading-relaxed">
                        These cookies are necessary for the website to function
                        properly. They enable core functionality such as
                        security, authentication, and maintaining your session.
                        Without these cookies, our services cannot be provided.
                        These include:
                      </p>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Authentication cookies to keep you logged in</li>
                        <li>Security cookies to prevent fraud and abuse</li>
                        <li>
                          Session cookies for the SaaS application functionality
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Analytics Cookies
                      </h4>
                      <p className="leading-relaxed">
                        We use analytics cookies to understand how visitors
                        interact with our website. This helps us improve our
                        services and user experience. These cookies collect
                        information in aggregate form and do not identify
                        individual users.
                      </p>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>
                          <strong>Vercel Analytics:</strong> Privacy-friendly
                          analytics that doesn&apos;t track personal information
                        </li>
                        <li>
                          <strong>Google Analytics 4:</strong> Helps us
                          understand visitor behavior, traffic sources, and page
                          performance
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Payment Processing Cookies
                      </h4>
                      <p className="leading-relaxed">
                        When you make a payment, our payment processor (Stripe)
                        may set cookies to facilitate secure payment processing
                        and prevent fraud. These cookies are governed by
                        Stripe&apos;s privacy policy.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    How We Use Tracking Technologies
                  </h3>
                  <p className="leading-relaxed">
                    We use cookies and similar tracking technologies to:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Remember your login information and preferences</li>
                    <li>Understand how you use our website and services</li>
                    <li>
                      Analyze traffic patterns and improve our website
                      performance
                    </li>
                    <li>
                      Measure the effectiveness of our marketing campaigns
                    </li>
                    <li>
                      Ensure the security and integrity of our services
                    </li>
                    <li>Provide personalized content and recommendations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Third-Party Cookies
                  </h3>
                  <p className="leading-relaxed">
                    Some cookies are placed by third-party services that appear
                    on our pages. We use the following third-party services:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>
                      <strong>Google Analytics:</strong> To analyze website
                      traffic and user behavior
                    </li>
                    <li>
                      <strong>Stripe:</strong> To process payments securely
                    </li>
                    <li>
                      <strong>Vercel:</strong> For website hosting and basic
                      analytics
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-2">
                    These third parties have their own privacy policies that
                    govern their use of cookies and data collection.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your Cookie Choices
                  </h3>
                  <p className="leading-relaxed">
                    You have several options for managing cookies:
                  </p>

                  <div className="ml-4 mt-3 space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Browser Settings
                      </h4>
                      <p className="leading-relaxed">
                        Most web browsers automatically accept cookies, but you
                        can modify your browser settings to decline cookies if
                        you prefer. Here&apos;s how to manage cookies in common
                        browsers:
                      </p>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>
                          <strong>Chrome:</strong> Settings → Privacy and
                          Security → Cookies and other site data
                        </li>
                        <li>
                          <strong>Firefox:</strong> Settings → Privacy &
                          Security → Cookies and Site Data
                        </li>
                        <li>
                          <strong>Safari:</strong> Preferences → Privacy →
                          Manage Website Data
                        </li>
                        <li>
                          <strong>Edge:</strong> Settings → Cookies and site
                          permissions
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Google Analytics Opt-Out
                      </h4>
                      <p className="leading-relaxed">
                        You can opt out of Google Analytics tracking by
                        installing the{" "}
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          Google Analytics Opt-out Browser Add-on
                        </a>
                        .
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Do Not Track
                      </h4>
                      <p className="leading-relaxed">
                        Some browsers include a &quot;Do Not Track&quot; (DNT)
                        feature. While we respect your privacy choices, please
                        note that there is no industry consensus on how to
                        respond to DNT signals.
                      </p>
                    </div>
                  </div>

                  <p className="leading-relaxed mt-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <strong>Please note:</strong> Blocking or deleting cookies
                    may impact your ability to use certain features of our
                    website and SaaS application. Essential cookies cannot be
                    disabled as they are necessary for the service to function.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Cookie Duration
                  </h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>Session Cookies:</strong> Deleted when you close
                      your browser
                    </li>
                    <li>
                      <strong>Persistent Cookies:</strong> Remain on your device
                      for a set period (typically 1-2 years) or until you delete
                      them
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Updates to Cookie Policy
                  </h3>
                  <p className="leading-relaxed">
                    We may update this cookie policy from time to time to
                    reflect changes in our practices or for legal, operational,
                    or regulatory reasons. Any changes will be posted on this
                    page with an updated &quot;Last Updated&quot; date.
                  </p>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PractiSight is not intended for use by individuals under the age
                of 18. We do not knowingly collect personal information from
                children. Our service is designed for dental practice
                professionals and business owners. If we become aware that we
                have collected personal information from someone under 18, we
                will take steps to delete that information promptly. If you
                believe we may have collected information from a minor, please
                contact us at{" "}
                <a
                  href="mailto:support@practisight.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  support@practisight.com
                </a>
                .
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. When we make material changes, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
                <li>Notify you via email to the address associated with your account</li>
                <li>
                  Display a prominent notice on our service for at least 30 days
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we protect your information. Your
                continued use of PractiSight after changes are posted
                constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">
                  PractiSight LLC
                </p>
                <p className="text-gray-700 mb-1">
                  Email:{" "}
                  <a
                    href="mailto:support@practisight.com"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    support@practisight.com
                  </a>
                </p>
                <p className="text-gray-700 mt-4 text-sm">
                  We will respond to your inquiry within 5 business days.
                </p>
              </div>
            </section>

            {/* Final Note */}
            <section>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Your privacy matters to us.</strong> We are committed
                  to transparency and giving you control over your data. This
                  Privacy Policy is designed to help you understand what
                  information we collect, why we collect it, and what we do with
                  it. If anything is unclear or you have concerns, please
                  don&apos;t hesitate to reach out to our team.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo size="sm" variant="dark" />
              <p className="text-sm text-gray-400 mt-2">
                &copy; 2025 PractiSight LLC. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://app.practisight.com/support"
                className="hover:text-white transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
