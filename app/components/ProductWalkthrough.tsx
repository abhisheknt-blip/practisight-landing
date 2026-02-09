"use client";

import { useState, useEffect, useCallback } from "react";

interface Slide {
  title: string;
  subtitle: string;
  color: string;
  bgGradient: string;
  content: React.ReactNode;
}

const slides: Slide[] = [
  {
    title: "Review Dashboard",
    subtitle: "All your reviews in one place",
    color: "blue",
    bgGradient: "from-blue-50 to-white",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-3 border border-emerald-200">
            <div className="text-xs font-semibold text-emerald-700 uppercase">
              Rating
            </div>
            <div className="text-2xl font-bold text-emerald-700">4.8★</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <div className="text-xs font-semibold text-blue-700 uppercase">
              Reviews
            </div>
            <div className="text-2xl font-bold text-blue-700">523</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
            <div className="text-xs font-semibold text-purple-700 uppercase">
              Response
            </div>
            <div className="text-2xl font-bold text-purple-700">2hr</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-900">
              Recent Reviews
            </span>
            <span className="text-xs text-green-600 font-medium">
              +3 today
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-600 truncate">
                &quot;Best dental experience ever...&quot;
              </span>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                2h ago
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-600 truncate">
                &quot;Dr. Chen is amazing with kids...&quot;
              </span>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                5h ago
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500">★★★☆☆</span>
              <span className="text-gray-600 truncate">
                &quot;Long wait but good care...&quot;
              </span>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                1d ago
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Competitor Intel",
    subtitle: "See how you stack up locally",
    color: "purple",
    bgGradient: "from-purple-50 to-white",
    content: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-3 border border-gray-200">
          <div className="text-xs font-semibold text-gray-700 mb-3 uppercase">
            Rating Comparison
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-900">
                  Your Practice
                </span>
                <span className="font-bold text-blue-600">4.8★</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "96%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Smile Dental Center</span>
                <span className="text-gray-600">4.5★</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-gray-400 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Family Dentistry Plus</span>
                <span className="text-gray-600">4.3★</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-gray-400 h-2.5 rounded-full"
                  style={{ width: "86%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-sm font-medium text-green-800">
              You&apos;re #1 in your area — keep it up!
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Insights",
    subtitle: "Actionable recommendations",
    color: "emerald",
    bgGradient: "from-emerald-50 to-white",
    content: (
      <div className="space-y-3">
        <div className="bg-white rounded-lg p-3 border-l-4 border-blue-600 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
              1
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Reduce wait times
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                7 mentions in negative reviews
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
              2
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Front desk training
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Staff tone mentioned 5 times
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-blue-400 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
              3
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Highlight Dr. Chen
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                15 positive mentions by name
              </p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 mt-2">
          <p className="text-xs text-amber-800">
            <span className="font-semibold">Impact estimate:</span> Fixing #1
            alone could improve your rating by ~0.2 stars
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Alerts",
    subtitle: "Never miss a review again",
    color: "red",
    bgGradient: "from-red-50 to-white",
    content: (
      <div className="space-y-3">
        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 animate-pulse" />
            <div>
              <p className="text-sm font-bold text-gray-900">
                New 5★ review received
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Google · Westside Clinic · Just now
              </p>
              <p className="text-xs text-gray-600 mt-1 italic">
                &quot;Absolutely wonderful experience...&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full mt-1.5" />
            <div>
              <p className="text-sm font-bold text-gray-900">
                Negative review alert
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Google · Downtown Office · 2h ago
              </p>
              <p className="text-xs text-gray-600 mt-1 italic">
                &quot;Had to wait 45 minutes past my...&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5" />
            <div>
              <p className="text-sm font-bold text-gray-900">
                Competitor gained 3 reviews
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Smile Dental · This week
              </p>
              <p className="text-xs text-gray-600 mt-1">
                They moved from 4.4★ to 4.5★
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const tabColors: Record<string, { active: string; indicator: string }> = {
  blue: { active: "bg-blue-50 text-blue-700 border-blue-300", indicator: "bg-blue-600" },
  purple: { active: "bg-purple-50 text-purple-700 border-purple-300", indicator: "bg-purple-600" },
  emerald: { active: "bg-emerald-50 text-emerald-700 border-emerald-300", indicator: "bg-emerald-600" },
  red: { active: "bg-red-50 text-red-700 border-red-300", indicator: "bg-red-600" },
};

export default function ProductWalkthrough() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, [isPaused, advance]);

  const current = slides[activeSlide];
  const colors = tabColors[current.color] ?? tabColors.blue;

  return (
    <div
      className="max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {slides.map((slide, i) => {
          const c = tabColors[slide.color] ?? tabColors.blue;
          const isActive = i === activeSlide;
          return (
            <button
              key={slide.title}
              onClick={() => setActiveSlide(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all whitespace-nowrap ${
                isActive
                  ? c.active
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {slide.title}
            </button>
          );
        })}
      </div>

      {/* Slide content */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Title bar */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <div className="text-white/80 text-sm font-medium">
            {current.title}{" "}
            <span className="text-white/50">— {current.subtitle}</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Content area */}
        <div className={`p-6 bg-gradient-to-br ${current.bgGradient} min-h-[320px]`}>
          {current.content}
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 px-5 py-3 bg-gray-50 border-t border-gray-100">
          {slides.map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full bg-gray-200 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? colors.indicator
                    : i < activeSlide
                      ? "bg-gray-400"
                      : "bg-transparent"
                }`}
                style={
                  i === activeSlide
                    ? { width: "100%", transition: isPaused ? "none" : "width 4s linear" }
                    : { width: i < activeSlide ? "100%" : "0%" }
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pause hint */}
      <p className="text-center text-xs text-gray-400 mt-3">
        {isPaused ? "Paused — click a tab or move away to resume" : "Hover to pause"}
      </p>
    </div>
  );
}
