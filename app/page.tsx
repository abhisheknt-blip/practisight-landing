"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, just console.log the email
    console.log("Waitlist signup:", email);

    // Simulate API call
    setTimeout(() => {
      setSubmitMessage("Thank you! You've been added to the waitlist.");
      setEmail("");
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="sm" />
            <div className="flex items-center gap-4">
              <a
                href="https://app.practisight.com/login"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sign In
              </a>
              <a
                href="https://app.practisight.com/signup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'start_trial_click', {
                      event_category: 'engagement',
                      event_label: 'header_navigation',
                      value: 1
                    });
                  }
                }}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
              Monitor Your Practice&apos;s
              <span className="block text-blue-600">Online Reputation</span>
              <span className="block">in Real-Time</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
              AI-powered review monitoring and insights for dental practices
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://app.practisight.com/signup"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'start_trial_click', {
                      event_category: 'engagement',
                      event_label: 'hero_primary_cta',
                      value: 1
                    });
                  }
                }}
              >
                Start Free Trial
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Setup in 5 minutes</span>
              </div>
            </div>

            {/* Hero Visual Element */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      4.8
                    </div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      156
                    </div>
                    <div className="text-sm text-gray-600">Reviews</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      98%
                    </div>
                    <div className="text-sm text-gray-600">Response Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage your online reputation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you stay on top of what patients are
              saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track Google reviews in real-time as they come in. Get
                instant notifications when new reviews are posted so you can
                respond quickly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get actionable recommendations powered by GPT-4. Understand
                sentiment trends, identify issues early, and receive suggested
                responses.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Competitor Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See how you stack up against competitors in your area. Benchmark
                your performance and discover opportunities to improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that&apos;s right for your practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 relative hover:border-blue-300 transition-colors">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starter
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-extrabold text-gray-900">
                    $79
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">
                  Perfect for single or small practices
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Up to 3 locations</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Real-time review monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Email notifications</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Basic analytics dashboard
                  </span>
                </li>
              </ul>
              <a
                href="https://app.practisight.com/signup"
                className="block w-full py-3 px-6 text-center rounded-lg font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'start_trial_click', {
                      event_category: 'engagement',
                      event_label: 'pricing_starter_plan',
                      value: 1
                    });
                  }
                }}
              >
                Get Started
              </a>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-600 relative hover:shadow-2xl transition-shadow">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                  Most Popular
                </span>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Professional
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-extrabold text-gray-900">
                    $179
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">
                  For growing practices with multiple locations
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Up to 10 locations</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Everything in Starter</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>AI-powered insights & recommendations</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Competitor analysis</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Advanced analytics & reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
              <a
                href="https://app.practisight.com/signup"
                className="block w-full py-3 px-6 text-center rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'start_trial_click', {
                      event_category: 'engagement',
                      event_label: 'pricing_professional_plan',
                      value: 1
                    });
                  }
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about PractiSight
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {/* Question 1 */}
            <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                How long does setup take?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Setup takes less than 5 minutes. Just sign up, add your Google Business Profile location, and we&apos;ll start monitoring reviews immediately. No technical knowledge required, no software to install.
              </div>
            </details>

            {/* Question 2 */}
            <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                Do I need to install anything?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                No installation needed. PractiSight is a cloud-based service - just log in from any device with your web browser. Access your dashboard from your computer, tablet, or phone.
              </div>
            </details>

            {/* Question 3 */}
            <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                Can I cancel anytime?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Yes, you can cancel your subscription at any time with no cancellation fees. You&apos;ll retain access until the end of your current billing period. No questions asked, no hassle.
              </div>
            </details>

            {/* Question 4 */}
            <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                Do you offer discounts for multiple locations?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Our Professional plan ($179/month) includes up to 10 locations at a great value - that&apos;s less than $18 per location. For practices with more than 10 locations, contact us at support@practisight.com for custom enterprise pricing.
              </div>
            </details>

            {/* Question 5 */}
            <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                Is my practice data secure?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Absolutely. We use bank-level 256-bit encryption, secure cloud infrastructure, and never share your data with third parties. All data is stored and handled in compliance with HIPAA best practices. Your patients&apos; privacy is our priority.
              </div>
            </details>
          </div>

          {/* CTA after FAQ */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a
              href="https://app.practisight.com/support"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Email Signup / Waitlist Section */}
      <section
        id="waitlist"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-blue-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get the latest updates, tips, and best practices for managing your
            online reputation.
          </p>

          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </button>
            </div>
            {submitMessage && (
              <div className="mt-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                <p className="text-white font-medium">{submitMessage}</p>
              </div>
            )}
          </form>

          <p className="mt-6 text-sm text-blue-200">
            No spam, ever. We respect your privacy.
          </p>
        </div>
      </section>

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
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
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
