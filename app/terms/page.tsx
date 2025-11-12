"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: November 12, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to PractiSight! These Terms of Service (&quot;Terms&quot;)
                govern your access to and use of the PractiSight platform and
                services provided by PractiSight LLC (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;). By accessing or using
                PractiSight, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read these Terms carefully before using our service. If
                you do not agree to these Terms, you may not access or use
                PractiSight.
              </p>
            </section>

            {/* 1. Acceptance of Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By creating an account, accessing our website, or using any of
                our services, you acknowledge that you have read, understood,
                and agree to be bound by these Terms, as well as our Privacy
                Policy. These Terms constitute a legally binding agreement
                between you and PractiSight LLC.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are using PractiSight on behalf of a dental practice or
                organization, you represent and warrant that you have the
                authority to bind that entity to these Terms, and references to
                &quot;you&quot; shall refer to both you as an individual and
                the entity you represent.
              </p>
            </section>

            {/* 2. Description of Service */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PractiSight is an online reputation monitoring platform
                designed specifically for dental practices. Our service
                provides the following features:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Real-Time Google Review Monitoring:</strong>{" "}
                  Continuous tracking of Google reviews for your practice
                  locations, with updates throughout the day.
                </li>
                <li>
                  <strong>AI-Powered Insights (Professional Tier):</strong>{" "}
                  Sentiment analysis and actionable recommendations generated
                  using GPT-4 technology to help you understand and respond to
                  patient feedback effectively.
                </li>
                <li>
                  <strong>Competitor Tracking (Professional Tier):</strong>{" "}
                  Monitor up to 5 competitor locations per practice location to
                  benchmark your performance and identify opportunities for
                  improvement.
                </li>
                <li>
                  <strong>Email Notifications and Alerts:</strong> Receive
                  instant notifications when new reviews are posted, helping
                  you respond promptly to patient feedback.
                </li>
                <li>
                  <strong>Analytics Dashboard:</strong> Access comprehensive
                  metrics, trends, and visualizations to track your online
                  reputation over time.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any
                aspect of the service at any time, with or without notice,
                though we will make reasonable efforts to notify users of
                material changes.
              </p>
            </section>

            {/* 3. Account Registration */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                3. Account Registration
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use PractiSight, you must create an account by providing
                accurate and complete information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>A valid email address</li>
                <li>Your name</li>
                <li>Information about your dental practice(s)</li>
                <li>Payment information for subscription billing</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  Provide accurate, current, and complete information during
                  registration
                </li>
                <li>
                  Maintain and promptly update your account information to keep
                  it accurate and current
                </li>
                <li>
                  Maintain the security and confidentiality of your account
                  credentials
                </li>
                <li>
                  Not share your account credentials with any third party
                </li>
                <li>
                  Notify us immediately of any unauthorized access to or use of
                  your account
                </li>
                <li>
                  Create only one account per dental practice organization
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You are responsible for all activity that occurs under your
                account, whether or not authorized by you. We are not liable
                for any loss or damage arising from your failure to maintain
                the security of your account credentials.
              </p>
            </section>

            {/* 4. Subscription Plans and Billing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                4. Subscription Plans and Billing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PractiSight offers the following subscription plans:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Starter Plan - $79/month
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Monitor up to 3 practice locations</li>
                    <li>Real-time Google review monitoring</li>
                    <li>Email notifications and alerts</li>
                    <li>Basic analytics dashboard</li>
                    <li>14-day free trial included</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Professional Plan - $179/month
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Monitor up to 10 practice locations</li>
                    <li>All Starter Plan features</li>
                    <li>AI-powered insights using GPT-4</li>
                    <li>Competitor tracking (up to 5 competitors per location)</li>
                    <li>Advanced analytics and reporting</li>
                    <li>14-day free trial included</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                By subscribing to PractiSight, you agree to the following
                billing terms:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Billing Cycle:</strong> Subscriptions are billed
                  monthly on a recurring basis. Your billing cycle begins on
                  the date you subscribe or when your free trial ends.
                </li>
                <li>
                  <strong>Payment Method:</strong> We accept major credit cards
                  processed securely through Stripe. You authorize us to charge
                  your payment method for all fees incurred.
                </li>
                <li>
                  <strong>Automatic Renewal:</strong> Your subscription will
                  automatically renew each month unless you cancel before the
                  next billing date.
                </li>
                <li>
                  <strong>Price Changes:</strong> We reserve the right to
                  change our pricing with at least 30 days&apos; notice. Price
                  changes will take effect at the start of your next billing
                  cycle after the notice period.
                </li>
                <li>
                  <strong>Failed Payments:</strong> If a payment fails, we will
                  attempt to process it again. After multiple failed attempts,
                  we may suspend or terminate your access to the service.
                </li>
                <li>
                  <strong>Taxes:</strong> All fees are exclusive of applicable
                  taxes, which you are responsible for paying.
                </li>
              </ul>
            </section>

            {/* 5. Free Trial Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5. Free Trial Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PractiSight offers a 14-day free trial for new customers.
                The following terms apply to free trials:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Credit Card Required:</strong> You must provide valid
                  payment information to start your free trial. Your credit
                  card will not be charged during the trial period.
                </li>
                <li>
                  <strong>Automatic Conversion:</strong> Unless you cancel
                  before the end of your 14-day trial period, your subscription
                  will automatically convert to a paid subscription, and your
                  payment method will be charged the applicable monthly fee.
                </li>
                <li>
                  <strong>One Trial Per Practice:</strong> Free trials are
                  limited to one per dental practice. We reserve the right to
                  deny trial access to customers who have previously used a
                  free trial.
                </li>
                <li>
                  <strong>Trial Modification Rights:</strong> We reserve the
                  right to modify or cancel the free trial program at any time
                  without prior notice.
                </li>
                <li>
                  <strong>Full Feature Access:</strong> During the trial
                  period, you will have access to all features included in your
                  selected plan.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To avoid being charged, you must cancel your subscription
                before the end of the 14-day trial period. Cancellation
                instructions are available in your account settings or by
                contacting support at{" "}
                <a
                  href="mailto:support@practisight.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  support@practisight.com
                </a>
                .
              </p>
            </section>

            {/* 6. Cancellation and Refunds */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                6. Cancellation and Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may cancel your PractiSight subscription at any time
                through your account settings or by contacting our support team.
                The following terms apply to cancellations:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>No Cancellation Fees:</strong> There are no fees or
                  penalties for canceling your subscription.
                </li>
                <li>
                  <strong>Access Until End of Billing Period:</strong> If you
                  cancel, you will retain access to PractiSight until the end
                  of your current billing period. No partial refunds will be
                  issued for unused time within a billing period.
                </li>
                <li>
                  <strong>No Refunds for Partial Periods:</strong> We do not
                  provide refunds or credits for partial months of service or
                  for periods when your account was inactive.
                </li>
                <li>
                  <strong>Data Retention:</strong> After cancellation, your
                  account data will be retained for 30 days, during which you
                  may reactivate your subscription without data loss. After 30
                  days, your data may be permanently deleted.
                </li>
                <li>
                  <strong>Reactivation:</strong> You may reactivate your
                  subscription at any time by logging into your account and
                  updating your billing information.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                In exceptional circumstances (such as service outages lasting
                more than 48 consecutive hours), we may provide prorated
                refunds or credits at our sole discretion.
              </p>
            </section>

            {/* 7. Acceptable Use Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                7. Acceptable Use Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to use PractiSight only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  Use the service for any illegal purpose or in violation of
                  any local, state, national, or international law
                </li>
                <li>
                  Harass, abuse, threaten, or intimidate any person or entity
                </li>
                <li>
                  Post or transmit any content that is fraudulent, false,
                  misleading, or deceptive
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the
                  service, other users&apos; accounts, or any systems or
                  networks connected to the service
                </li>
                <li>
                  Share your account credentials or allow any third party to
                  access your account
                </li>
                <li>
                  Reverse engineer, decompile, disassemble, or attempt to
                  derive the source code of the service
                </li>
                <li>
                  Use any automated system, including but not limited to
                  robots, spiders, or scrapers, to access the service
                </li>
                <li>
                  Interfere with or disrupt the service or servers or networks
                  connected to the service
                </li>
                <li>
                  Violate Google&apos;s Terms of Service or any third-party
                  service provider&apos;s terms
                </li>
                <li>
                  Use the service to solicit reviews, manipulate review
                  content, or engage in any deceptive review practices
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to investigate and take appropriate legal
                action against anyone who violates this Acceptable Use Policy,
                including suspending or terminating their account without
                refund.
              </p>
            </section>

            {/* 8. Data Ownership */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                8. Data Ownership
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The ownership of data is divided as follows:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your Data
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You retain all ownership rights to your practice
                    information, including practice name, location details, and
                    any content you create within the service. However, review
                    data obtained from Google is publicly available information
                    and is not exclusively owned by you or us.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Platform
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    PractiSight LLC owns all rights, title, and interest in and
                    to the PractiSight platform, software, analytics, AI
                    models, insights, aggregated data, and all related
                    intellectual property.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    License to Use Your Data
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    By using PractiSight, you grant us a non-exclusive,
                    worldwide, royalty-free license to use your practice data
                    solely for the purpose of providing and improving our
                    service. This includes processing your data through
                    third-party services like Google Places API and OpenAI.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Data Accuracy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for ensuring the accuracy of the data
                    you provide to us. We are not responsible for errors or
                    omissions in your practice information or for the accuracy
                    of review data obtained from third-party sources like
                    Google.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                9. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The PractiSight service, including its software, features,
                functionality, design, logos, trademarks, and content, is owned
                by PractiSight LLC and is protected by United States and
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  The PractiSight name, logo, and all related trademarks are
                  the property of PractiSight LLC
                </li>
                <li>
                  You may not use our trademarks, logos, or branding without
                  our prior written consent
                </li>
                <li>
                  Any content you create or upload to the service remains your
                  property, but you grant us a license to use it as necessary
                  to provide the service
                </li>
                <li>
                  We grant you a limited, non-exclusive, non-transferable
                  license to access and use the service for your internal
                  business purposes
                </li>
                <li>
                  Review data displayed in the service is sourced from public
                  Google reviews and is subject to Google&apos;s terms and
                  intellectual property rights
                </li>
              </ul>
            </section>

            {/* 10. Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                10. Third-Party Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PractiSight integrates with and relies on several third-party
                services to provide our features:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Google Places API
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use Google Places API to fetch review data for your
                    practice locations. Your use of PractiSight is subject to
                    Google&apos;s Terms of Service. Service interruptions,
                    changes, or limitations imposed by Google may affect
                    PractiSight&apos;s functionality.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Stripe Payment Processing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Payment processing is handled by Stripe, Inc. Your payment
                    information is subject to Stripe&apos;s Terms of Service
                    and Privacy Policy. We do not store your complete credit
                    card information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    OpenAI (Professional Tier)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For Professional tier subscribers, we use OpenAI&apos;s
                    GPT-4 to provide AI-powered insights. Review data is sent
                    to OpenAI for analysis, subject to their Terms of Use and
                    API Data Usage Policies.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                We are not responsible for the availability, functionality, or
                performance of these third-party services. Service
                interruptions, changes to third-party APIs, or termination of
                third-party services may impact PractiSight&apos;s
                functionality. We will make reasonable efforts to notify you of
                material changes to third-party integrations, but we are not
                liable for any disruptions caused by third-party service
                providers.
              </p>
            </section>

            {/* 11. Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE FOLLOWING
                LIMITATIONS APPLY:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>&quot;AS IS&quot; Service:</strong> PractiSight is
                    provided on an &quot;as is&quot; and &quot;as
                    available&quot; basis without warranties of any kind,
                    either express or implied, including but not limited to
                    warranties of merchantability, fitness for a particular
                    purpose, or non-infringement.
                  </li>
                  <li>
                    <strong>No Guarantee of Results:</strong> We do not
                    guarantee that using PractiSight will result in improved
                    reviews, increased patient satisfaction, or any specific
                    business outcomes.
                  </li>
                  <li>
                    <strong>Service Availability:</strong> We do not warrant
                    that the service will be uninterrupted, timely, secure, or
                    error-free. We may experience downtime for maintenance,
                    updates, or due to factors beyond our control.
                  </li>
                  <li>
                    <strong>Data Accuracy:</strong> While we strive to provide
                    accurate data, we do not warrant the accuracy, completeness,
                    or reliability of any data, content, or information
                    provided through the service.
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Limitation on Damages:</strong> In no event shall
                PractiSight LLC, its officers, directors, employees, or agents
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, including without limitation:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Lost profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Loss of business opportunities</li>
                <li>Costs of procurement of substitute services</li>
                <li>
                  Any other indirect or consequential loss or damage arising
                  out of or related to your use of the service
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Maximum Liability:</strong> Our total liability to you
                for any claims arising out of or related to these Terms or your
                use of the service shall not exceed the amount you paid to us
                in the three (3) months immediately preceding the event giving
                rise to the liability.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Force Majeure:</strong> We shall not be liable for any
                failure or delay in performance due to circumstances beyond our
                reasonable control, including but not limited to acts of God,
                natural disasters, war, terrorism, riots, embargoes, acts of
                civil or military authorities, fire, floods, accidents,
                network infrastructure failures, strikes, or shortages of
                transportation, facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            {/* 12. Indemnification */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                12. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless PractiSight
                LLC, its officers, directors, employees, agents, licensors, and
                service providers from and against any claims, liabilities,
                damages, judgments, awards, losses, costs, expenses, or fees
                (including reasonable attorneys&apos; fees) arising out of or
                relating to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Your violation of these Terms</li>
                <li>
                  Your use or misuse of the service, including any content you
                  submit or actions you take
                </li>
                <li>
                  Your responses to patient reviews or any communications made
                  through or in connection with the service
                </li>
                <li>
                  Your violation of any law, regulation, or the rights of any
                  third party
                </li>
                <li>
                  Your failure to comply with healthcare advertising
                  regulations, HIPAA, or other applicable professional
                  standards and regulations
                </li>
                <li>
                  Any claims that your use of the service infringes upon the
                  intellectual property rights of any third party
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You are solely responsible for the content of any responses you
                make to patient reviews and for ensuring that such responses
                comply with all applicable laws, regulations, and professional
                standards, including but not limited to HIPAA privacy
                requirements and state dental board regulations.
              </p>
            </section>

            {/* 13. Termination Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                13. Termination Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate this agreement under the following
                circumstances:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your Right to Terminate
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may terminate your subscription and close your account
                    at any time by following the cancellation process in your
                    account settings or by contacting our support team at{" "}
                    <a
                      href="mailto:support@practisight.com"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      support@practisight.com
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Right to Terminate
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    We may suspend or terminate your account immediately,
                    without prior notice or liability, for any reason,
                    including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Violation of these Terms or our Acceptable Use Policy</li>
                    <li>Non-payment of subscription fees</li>
                    <li>
                      Fraudulent, abusive, or illegal activity
                    </li>
                    <li>
                      Use of the service in a manner that could damage,
                      disable, or impair the service
                    </li>
                    <li>
                      Any conduct that we believe is harmful to other users,
                      third parties, or our business interests
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Effect of Termination
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Upon termination of your account:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Your right to access and use the service will immediately
                      cease
                    </li>
                    <li>
                      You will no longer receive email notifications or alerts
                    </li>
                    <li>
                      Your account data will be retained for 30 days, after
                      which it may be permanently deleted
                    </li>
                    <li>
                      You remain responsible for any outstanding fees or
                      charges incurred prior to termination
                    </li>
                    <li>
                      Sections of these Terms that by their nature should
                      survive termination will remain in effect, including but
                      not limited to liability limitations, indemnification,
                      and dispute resolution provisions
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 14. Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify or update these Terms at any
                time at our sole discretion. When we make changes, we will:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                <li>
                  Update the &quot;Last Updated&quot; date at the top of this
                  page
                </li>
                <li>
                  Provide notice of material changes via email to the address
                  associated with your account
                </li>
                <li>
                  Display a prominent notice within the service for at least 30
                  days before the changes take effect
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your continued use of PractiSight after the effective date of
                any changes to these Terms constitutes your acceptance of the
                modified Terms. If you do not agree to the modified Terms, you
                must stop using the service and cancel your subscription.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you cancel your subscription within 30 days of being
                notified of material changes to these Terms, we will provide a
                prorated refund for the unused portion of your subscription.
              </p>
            </section>

            {/* 15. Governing Law and Disputes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                15. Governing Law and Disputes
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Governing Law
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms shall be governed by and construed in
                    accordance with the laws of the Commonwealth of Virginia,
                    without regard to its conflict of law provisions.
                    PractiSight LLC is a limited liability company registered
                    in Virginia.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Jurisdiction and Venue
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Any legal action or proceeding arising out of or relating
                    to these Terms or your use of the service shall be brought
                    exclusively in the state or federal courts located in
                    Loudoun County, Virginia. You consent to the personal
                    jurisdiction of such courts and waive any objection to
                    venue in such courts.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Arbitration Agreement
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    For disputes involving claims of less than $10,000, you and
                    PractiSight agree to resolve such disputes through binding
                    arbitration in accordance with the Commercial Arbitration
                    Rules of the American Arbitration Association. The
                    arbitration shall take place in Leesburg, Virginia, or
                    remotely via videoconference.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The arbitrator&apos;s decision will be final and binding,
                    and judgment on the award may be entered in any court
                    having jurisdiction. This arbitration agreement does not
                    preclude either party from seeking provisional remedies in
                    aid of arbitration from a court of competent jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Class Action Waiver
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You agree that any dispute resolution proceedings will be
                    conducted only on an individual basis and not in a class,
                    consolidated, or representative action. You expressly waive
                    your right to participate in or bring class action lawsuits
                    against PractiSight LLC.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Time Limitation on Claims
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Any claim or cause of action arising out of or related to
                    your use of the service or these Terms must be filed within
                    one (1) year after the claim or cause of action arose, or
                    be forever barred.
                  </p>
                </div>
              </div>
            </section>

            {/* 16. Miscellaneous */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                16. Miscellaneous
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Entire Agreement
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms, together with our Privacy Policy, constitute
                    the entire agreement between you and PractiSight LLC
                    regarding your use of the service and supersede all prior
                    agreements and understandings, whether written or oral.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Severability
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms is found to be unlawful,
                    void, or unenforceable, that provision shall be deemed
                    severable from these Terms and shall not affect the
                    validity and enforceability of the remaining provisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Waiver
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our failure to enforce any right or provision of these
                    Terms will not be considered a waiver of those rights or
                    provisions. Any waiver of any provision of these Terms will
                    be effective only if in writing and signed by an authorized
                    representative of PractiSight LLC.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Assignment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may not assign or transfer these Terms or your rights
                    under these Terms without our prior written consent. We may
                    assign our rights and obligations under these Terms to any
                    party without your consent or notice to you, including but
                    not limited to in connection with a merger, acquisition,
                    reorganization, or sale of assets.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Third-Party Beneficiaries
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms do not create any third-party beneficiary
                    rights. No person or entity not a party to these Terms
                    shall have any right to enforce or rely upon any provision
                    of these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Headings
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The section headings in these Terms are for convenience
                    only and have no legal or contractual effect.
                  </p>
                </div>
              </div>
            </section>

            {/* 17. Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                17. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding
                these Terms of Service, please contact us:
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
                <p className="text-gray-700 mb-1">
                  Address: 907 Sawback Square, Leesburg, VA 20176
                </p>
                <p className="text-gray-700 mt-4 text-sm">
                  We will respond to your inquiry within 48 hours during
                  business days.
                </p>
              </div>
            </section>

            {/* Final Note */}
            <section>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Thank you for choosing PractiSight.</strong> We are
                  committed to providing you with a reliable and valuable
                  service to help you manage your online reputation. By using
                  PractiSight, you acknowledge that you have read, understood,
                  and agreed to be bound by these Terms of Service. If you have
                  any questions or need assistance, our support team is here to
                  help.
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
              <Link href="/terms" className="hover:text-white transition-colors">
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
