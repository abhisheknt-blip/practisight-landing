"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import ProductWalkthrough from './components/ProductWalkthrough'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // GA4 Conversion Tracking
  const trackConversion = (label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "start_trial_click", {
        event_category: "engagement",
        event_label: label,
        value: 1,
      });
    }
  };

  return (
    <div className="bg-white">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .slide-in {
          animation: slideInRight 0.6s ease-out;
        }
        @keyframes pulse-animation {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .pulse-dot {
          animation: pulse-animation 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-blue-600 w-10 h-10 rounded-lg">
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-gray-900">Practi</span>
                <span className="text-blue-600">Sight</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Pricing
              </a>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Contact
              </Link>
              <a
                href="https://app.practisight.com"
                className="text-gray-700 hover:text-gray-900"
              >
                Sign In
              </a>
              <a
                href="https://app.practisight.com/signup"
                onClick={() => trackConversion("header_navigation")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Copy */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Your Next Patient Is Reading Your Reviews Right Now.{" "}
                <span className="text-blue-600">What Are They Seeing?</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                PractiSight shows you exactly what your patients see — your
                reviews, your competitors&apos; reviews, and exactly what to fix
                to win more new patients.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">16.4%</div>
                  <div className="text-sm text-gray-700">
                    Conversion improvements when you respond to reviews
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">90%</div>
                  <div className="text-sm text-gray-700">
                    Of patients check Google reviews first
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="https://app.practisight.com/signup"
                  onClick={() => trackConversion("hero_primary_cta")}
                  className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 shadow-lg text-center"
                >
                  Start 14-Day Free Trial
                </a>
                <a
                  href="#demo"
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-gray-300 text-lg font-semibold rounded-lg hover:border-blue-600 text-center"
                >
                  Watch 60-Second Demo
                </a>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Built for dental practices
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Setup in 5 minutes
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>

            {/* Right Column: Visual Proof */}
            <div className="relative">
              {/* Simplified Dashboard Preview */}
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm font-medium">
                    Your Dashboard
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-200">
                      <div className="text-xs font-semibold text-emerald-700 uppercase mb-1">
                        Rating
                      </div>
                      <div className="text-3xl font-bold text-emerald-700">
                        4.8★
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-xs font-semibold text-blue-700 uppercase mb-1">
                        Reviews
                      </div>
                      <div className="text-3xl font-bold text-blue-700">
                        523
                      </div>
                    </div>
                  </div>
                  {/* Comparison Chart */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-xs font-semibold text-gray-700 mb-3">
                      VS. COMPETITORS
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-gray-900">
                            Your Practice
                          </span>
                          <span className="font-bold text-blue-600">4.8★</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "96%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Competitor A</span>
                          <span className="text-gray-600">4.5★</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gray-400 h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Alert */}
              <div className="hidden lg:block absolute -right-4 top-1/4 bg-white rounded-lg shadow-xl border-l-4 border-green-500 p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1 animate-pulse"></div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      New 5★ review
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Just now • Westside Clinic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table: Why Not Google Alerts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Patients Review You. We Tell You What It Means.
            </h2>
            <p className="text-lg text-gray-600">See the difference</p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700"></th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">
                    Google Alerts
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 bg-blue-50">
                    PractiSight
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Review notifications
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-5 h-5 text-green-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg
                      className="w-5 h-5 text-green-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    AI sentiment analysis
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-5 h-5 text-red-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg
                      className="w-5 h-5 text-green-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Actionable recommendations
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-5 h-5 text-red-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg
                      className="w-5 h-5 text-green-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Competitor tracking
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-5 h-5 text-red-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg
                      className="w-5 h-5 text-green-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Multi-location dashboard
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-5 h-5 text-red-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg
                      className="w-5 h-5 text-green-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Walkthrough Demo */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See PractiSight in Action</h2>
            <p className="text-xl text-gray-600">Auto-playing walkthrough — hover to pause and explore</p>
          </div>
          <ProductWalkthrough />
        </div>
      </section>

      {/* Features Section with Images */}
      <section
        id="features"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for dental practices
            </p>
          </div>

          {/* Feature 1: AI Insights - Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-4">
                AI-Powered Intelligence
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Get Actionable Recommendations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>AI analyzes sentiment</strong> across all your
                    reviews
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Identifies patterns</strong> and recurring themes
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Prioritized by impact</strong> on patient
                    satisfaction
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    AI Recommendations
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        1
                      </div>
                      <p className="text-gray-800">
                        Improve appointment management to ensure that patients
                        receive the care they need in a timely manner.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        2
                      </div>
                      <p className="text-gray-800">
                        Train staff to avoid pushy sales tactics and focus on
                        patient comfort and needs.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        3
                      </div>
                      <p className="text-gray-800">
                        Implement a consistent staff training program to reduce
                        turnover and maintain a welcoming environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Competitor Tracking - Image Left */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 bg-white rounded-2xl shadow-2xl p-6">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Competitor Comparison
                </h4>

                {/* Rating Comparison */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Rating Comparison
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Compare ratings across all practices
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          Your Practice
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          4.8★
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700">
                          Smile Dental Center
                        </span>
                        <span className="text-sm text-gray-600">4.5★</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gray-400 h-3 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700">
                          Family Dentistry Plus
                        </span>
                        <span className="text-sm text-gray-600">4.3★</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gray-400 h-3 rounded-full"
                          style={{ width: "86%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Volume Chart */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Review Volume Comparison
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Total number of reviews per practice
                  </p>
                  <div className="flex items-end justify-around h-40 bg-gray-50 rounded-lg p-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-16 bg-gray-400 rounded-t-lg transition-all hover:bg-gray-500"
                        style={{ height: "55%" }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2 text-center">
                        Smile
                        <br />
                        Dental
                      </span>
                      <span className="text-xs font-bold text-gray-900">
                        387
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div
                        className="w-16 bg-blue-600 rounded-t-lg transition-all hover:bg-blue-700"
                        style={{ height: "85%" }}
                      ></div>
                      <span className="text-xs text-gray-900 mt-2 font-bold text-center">
                        Your
                        <br />
                        Practice
                      </span>
                      <span className="text-xs font-bold text-blue-600">
                        562
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div
                        className="w-16 bg-gray-400 rounded-t-lg transition-all hover:bg-gray-500"
                        style={{ height: "40%" }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2 text-center">
                        Family
                        <br />
                        Dent+
                      </span>
                      <span className="text-xs font-bold text-gray-900">
                        215
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sentiment Analysis */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Sentiment Analysis
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Positive vs negative review breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-xs text-gray-700 w-24">
                        Your Practice
                      </span>
                      <div className="flex-1 flex h-6 rounded-full overflow-hidden">
                        <div
                          className="bg-green-500"
                          style={{ width: "87%" }}
                        ></div>
                        <div
                          className="bg-yellow-400"
                          style={{ width: "8%" }}
                        ></div>
                        <div
                          className="bg-red-500"
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-green-600 ml-2">
                        87%
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-600 w-24">
                        Smile Dental
                      </span>
                      <div className="flex-1 flex h-6 rounded-full overflow-hidden">
                        <div
                          className="bg-green-400"
                          style={{ width: "79%" }}
                        ></div>
                        <div
                          className="bg-yellow-400"
                          style={{ width: "12%" }}
                        ></div>
                        <div
                          className="bg-red-400"
                          style={{ width: "9%" }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 ml-2">79%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-bold mb-4">
                Competitive Intelligence
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                See How You Stack Up
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Track up to 5 competitors</strong> automatically
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Side-by-side comparisons</strong> of ratings and
                    volume
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Market position insights</strong> in your area
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Smart Analytics */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold mb-4">
                Smart Analytics
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Know What Patients Really Think
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Analyze sentiment trends</strong> over time
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Spot emerging issues</strong> before they escalate
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Identify your strengths</strong> to double down on
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              {/* Top Positives & Staff Performance */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 mb-4">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    ></path>
                  </svg>
                  <h4 className="text-lg font-bold text-gray-900">
                    Top Positives
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1 flex items-center">
                      Friendly and compassionate staff
                      <svg
                        className="w-4 h-4 text-green-600 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">23 mentions</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-400 shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1 flex items-center">
                      Quality of dental care
                      <svg
                        className="w-4 h-4 text-green-600 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">18 mentions</p>
                  </div>
                </div>

                {/* Staff Performance */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-8 h-8 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                    <h4 className="text-lg font-bold text-gray-900">
                      Staff Performance
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <span className="font-medium text-gray-900">
                        Dr. Sarah Johnson
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        15 positive
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <span className="font-medium text-gray-900">
                        Dr. Michael Chen
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        12 positive
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Issues */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-red-100">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                  <h4 className="text-lg font-bold text-gray-900">
                    Top Issues
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-500 shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1 flex items-center">
                      Long wait times
                      <svg
                        className="w-4 h-4 text-red-600 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">
                      7 mentions in negative reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to win more patients
            </p>
          </div>

          <div className="rounded-2xl border-2 border-blue-600 overflow-hidden shadow-xl max-w-lg mx-auto">
            {/* Blue Top Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-center text-white">
              <div className="inline-block px-4 py-2 bg-amber-400 text-amber-900 rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
                Limited Time: 50% Off First Year
              </div>

              <h3 className="text-3xl font-bold mb-6">Standard Plan</h3>

              <div className="mb-4">
                <span className="text-6xl font-extrabold">$49</span>
                <span className="text-2xl">/month</span>
              </div>

              <div className="text-lg mb-3">for your first 12 months</div>

              <div className="text-blue-200 line-through text-lg mb-4">
                Regular price: $99/month
              </div>

              <div className="text-2xl font-bold text-yellow-400">
                Save $600 in year one
              </div>
            </div>

            {/* White Bottom Section */}
            <div className="bg-white p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Up to 10 practice locations
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Real-time review monitoring
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Instant email notifications
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>AI-powered insights</strong> & recommendations
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Track up to <strong>5 competitors</strong>
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Advanced analytics dashboard
                  </span>
                </div>
              </div>

              <a
                href="https://app.practisight.com/signup"
                onClick={() => trackConversion("pricing_standard_plan")}
                className="block w-full py-4 bg-blue-600 text-white text-center font-bold text-lg rounded-lg hover:bg-blue-700 shadow-lg mb-6"
              >
                Start 14-Day Free Trial
              </a>

              <div className="text-center space-y-2 text-sm text-gray-600">
                <p>✓ Cancel anytime</p>
                <p>✓ 14-day money-back guarantee</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-600 max-w-2xl mx-auto">
            <p>
              <strong>Launch pricing:</strong> $49/month for your first 12
              months. Standard rate of $99/month applies after. Offer ends March
              15, 2026 or after first 50 customers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900">
                How does the 14-day trial work?
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Sign up, add your practice location, and start monitoring
                immediately. You&apos;ll have full access to all features for 14
                days. We&apos;ll remind you before the trial ends.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900">
                Is my practice data secure?
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Yes. We use bank-level 256-bit encryption. Your data is never
                shared with third parties. We take patient privacy seriously.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900">
                Will this actually help me get more patients?
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Practices that respond to reviews see significantly higher
                patient conversion rates. PractiSight ensures you never miss a
                review and helps you respond strategically. Just one extra
                patient per month pays for the platform twice over.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-gray-900">
                Can I cancel anytime?
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Yes. Cancel anytime with no fees. You&apos;ll retain access
                until the end of your billing period. No questions asked.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Win More Patients?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            See what your competitors are doing right—and what you can do
            better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.practisight.com/signup"
              onClick={() => trackConversion("final_cta_section")}
              className="px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-lg"
            >
              Start Free Trial →
            </a>
            <a
              href="#demo"
              className="px-10 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 border-2 border-blue-500"
            >
              Watch 60-Second Demo
            </a>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center bg-blue-600 w-8 h-8 rounded-lg">
                  <svg
                    className="text-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-white">Practi</span>
                  <span className="text-blue-400">Sight</span>
                </span>
              </div>
              <p className="text-sm text-gray-400">
                © 2025 PractiSight LLC. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params: {
        event_category: string;
        event_label: string;
        value: number;
      }
    ) => void;
  }
}
