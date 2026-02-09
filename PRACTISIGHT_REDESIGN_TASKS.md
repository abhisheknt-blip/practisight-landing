# PractiSight Landing Page Redesign — Claude Code Task File

## Context
- **Repo:** `practisight-landing`
- **Main file to edit:** `app/page.tsx` (~1,519 lines)
- **Stack:** Next.js 14, React 18, Tailwind CSS 3, TypeScript
- **Design system:** Blue-600/700 primary, existing Tailwind utility classes
- **Deployed on:** Vercel
- **Goal:** Redesign landing page copy and structure to convert cold email traffic into trial signups. We are NOT changing the visual design system (colors, fonts, shadows, spacing patterns). We ARE changing copy, section order, and adding/replacing sections.

**Important rules:**
- Keep all existing Tailwind classes and responsive patterns (lg:, md:, sm:) intact unless a section is being replaced entirely
- Keep all existing CSS animations (lines 24-62)
- Keep the MobileMenu component import and usage
- Keep all GA4 tracking/conversion functions
- Keep the header and footer structure (with minor text updates)
- After ALL tasks are complete, run `npm run build` to verify zero errors

---

## TASK 1: Update Hero Section (lines ~154-345)

### 1A. Change headline text

Find the headline (lines 160-163):
```
Your Next Patient Is Reading Your Reviews Right Now. What Are They Seeing?
```

Replace with:
```
Is Your Reputation Costing You Patients?
```

### 1B. Change sub-headline text

Find the sub-headline paragraph (lines 166-169):
```
PractiSight shows you exactly what your patients see — your reviews, your competitors' reviews, and exactly what to fix to win more new patients.
```

Replace with:
```
PractiSight tracks your reviews, monitors your competitors, and shows you exactly what to fix — so the next patient picks you, not the practice down the street.
```

### 1C. Replace the first stat box

Find the stat box showing "16.4%" with "Conversion improvements when you respond to reviews" (around lines 172-178).

Replace the stat number with: `$49/mo`
Replace the supporting text with: `Costs less than one hygiene appointment. One new patient pays for the entire year.`

Keep the second stat box ("90% / Of patients check Google reviews first") unchanged.

### 1D. Update CTAs

Find the primary CTA button "Start 14-Day Free Trial" in the hero section (around line 190).
Change button text to: `See Your Practice vs. Competitors — Free`
Keep the same href (`https://app.practisight.com/signup`) and onClick tracking.

Find the secondary CTA button "Schedule Demo" linking to `/contact` (around line 196).
Change button text to: `Watch 60-Second Demo`
Change the href to: `#demo`
Keep the same styling.

### 1E. Keep everything else in the hero as-is
- Dashboard mockup (rating 4.8, reviews 523, VS COMPETITORS chart)
- Floating notification card
- Trust signals (Built for dental practices, Setup in 5 minutes, Cancel anytime)
- All responsive classes and animations

---

## TASK 2: Replace Comparison Table Section (lines ~347-550)

Delete the entire comparison table section — the one with heading "Patients Review You. We Tell You What It Means." that contains the Google Alerts vs PractiSight table.

Replace it with this new section:

```tsx
{/* What PractiSight Finds Section */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        What PractiSight Finds in Your First Week
      </h2>
      <p className="text-xl text-gray-600">
        Real insights from real review data
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-l-4 border-red-500 p-6">
          <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Your front desk is your #1 blind spot
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            PractiSight&apos;s AI analyzed reviews and found &quot;rude receptionist&quot; mentioned 23 times across competing practices. One fixed it and jumped from 4.2 to 4.6 stars in 3 months.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-l-4 border-amber-500 p-6">
          <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            You respond in 5 days. They respond in 2 hours.
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Response time directly impacts patient choice. PractiSight alerts you the minute a review drops — so you never lose a patient to slow follow-up.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-l-4 border-green-500 p-6">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Great care. Bad wait times.
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your 4.8★ clinical rating is the best locally. But &quot;long waits&quot; appears 7x in your last 20 reviews. Fix this one thing and you dominate your market.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## TASK 3: Reorder and Rewrite Features Section (lines ~552-1152)

The features section has heading "Everything You Need in One Platform" with 3 feature blocks. Each block has text on one side and a visual mockup on the other.

### 3A. Reorder the features

Current order:
1. AI-Powered Intelligence / "Get Actionable Recommendations" (with AI Recommendations mockup)
2. Competitive Intelligence / "See How You Stack Up" (with Competitor Comparison mockup)
3. Smart Analytics / "Know What Patients Really Think" (with Top Positives/Issues mockup)

New order:
1. Competitive Intelligence (move from position 2 to position 1)
2. Smart Analytics (move from position 3 to position 2)
3. AI-Powered Intelligence (move from position 1 to position 3)

Move the entire blocks (text + mockup) together. Preserve the alternating layout pattern:
- Feature 1: text LEFT, mockup RIGHT
- Feature 2: mockup LEFT, text RIGHT
- Feature 3: text LEFT, mockup RIGHT

Adjust the `order-` classes on mobile if needed to maintain the pattern where text always appears above the mockup on mobile.

### 3B. Rewrite feature copy (text only, keep all mockup visuals exactly as-is)

**Feature 1 (Competitor Tracking — now first):**
- Change badge text from "Competitive Intelligence" to "Competitor X-Ray"
- Change badge colors from purple (`bg-purple-100 text-purple-800`) to red (`bg-red-100 text-red-800`) to stand out more
- Change heading from "See How You Stack Up" to "See Everything Your Competitors Don't Want You to Know"
- Change the 3 bullet items to:
  - **Compare ratings, volume, and response times** side-by-side with up to 5 local competitors
  - **Get alerted when a competitor's rating changes** — before they pull ahead
  - **Spot their weaknesses** and capitalize before they fix them

**Feature 2 (Smart Analytics — now second):**
- Keep badge text "Smart Analytics" and its green styling
- Change heading from "Know What Patients Really Think" to "Know Why Patients Leave Before They Do"
- Change the 3 bullet items to:
  - **AI reads every review** and surfaces the patterns you'd miss manually
  - **"Long wait times" mentioned 7 times this month?** You'll know on day one
  - **Track which staff members patients love** — and which ones cost you ratings

**Feature 3 (AI Recommendations — now third):**
- Keep badge text "AI-Powered Intelligence" and its blue styling
- Change heading from "Get Actionable Recommendations" to "Stop Guessing. Get a Fix-It List."
- Change the 3 bullet items to:
  - **Prioritized actions** based on what's actually hurting your ratings
  - **Specific to your reviews and your market** — not generic advice
  - **Like having a $200/hr practice consultant** for $49/mo

---

## TASK 4: Add Founder Section (NEW — insert between Features and Pricing)

After the features section ends (around line 1152) and before the pricing section begins (around line 1154), insert this new section:

```tsx
{/* Founder Section */}
<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <div className="grid md:grid-cols-5 gap-10 items-center">
      {/* Photo - 2 columns */}
      <div className="md:col-span-2 flex justify-center">
        <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
          <span className="text-5xl font-bold text-blue-600">AT</span>
        </div>
        {/* TODO: Replace the div above with an actual image tag once headshot is uploaded:
        <img src="/abhi-headshot.jpg" alt="Abhi Tiwari, founder of PractiSight" className="w-48 h-48 rounded-full object-cover shadow-lg" />
        */}
      </div>

      {/* Bio - 3 columns */}
      <div className="md:col-span-3">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-4">
          Built for Dentists, by Someone Who Gets It
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Hi, I&apos;m Abhi
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          I&apos;m a cybersecurity and compliance professional who saw dental practices losing patients to competitors with better online reputations — not better dentistry. I built PractiSight to give independent practices the competitive intelligence that big dental groups pay thousands for.
        </p>
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span className="text-sm">Your data is protected with bank-level encryption and the same security standards I apply to federal compliance work.</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## TASK 5: Update Pricing Section (lines ~1154-1327)

### 5A. Add ROI anchor text above the pricing card

Right after the pricing section's subtitle ("Everything you need to win more patients"), add this paragraph:

```tsx
<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
  The average dental patient is worth $1,500+ over their lifetime. PractiSight helps you keep the ones you&apos;re losing — for less than the cost of one hygiene appointment.
</p>
```

### 5B. Change plan name

Find "Standard Plan" and change to "Growth Plan".

### 5C. Update footer note

Find the launch pricing footer note (around line 1317-1319). Change it to:

```
Launch pricing: $49/month for your first 12 months. Standard rate of $99/month applies after. Limited to first 50 practices.
```

Remove any specific date reference (March 15, 2026).

---

## TASK 6: Add 2 New FAQ Questions (lines ~1329-1435)

Add these 2 new FAQ items to the existing accordion, after the current 4 questions. Follow the exact same accordion pattern (button with SVG chevron, hidden/shown div, same Tailwind classes) as the existing FAQ items:

**Question 5:** "How is this different from Birdeye or Podium?"
**Answer:** "Those platforms are all-in-one communication suites that cost $300+/month and take weeks to set up. PractiSight focuses on review intelligence and competitor tracking — the insights that actually win you patients. Setup takes 5 minutes, not 5 meetings."

**Question 6:** "I already respond to my reviews. Why do I need this?"
**Answer:** "Responding is table stakes. PractiSight tells you what your competitors' reviews reveal about their weaknesses, what patterns in your reviews cost you patients, and exactly what to fix first. It's the difference between playing defense and playing offense."

---

## TASK 7: Update Final CTA Section (lines ~1437-1466)

Find the heading "Ready to Win More Patients?" and change to:
"Your Competitors Won't Wait. Neither Should You."

Find the subtitle "See what your competitors are doing right—and what you can do better." and change to:
"See how your practice stacks up — free for 14 days."

Find the primary CTA "Start Free Trial →" and change to:
"See Your Practice vs. Competitors — Free"

Keep the secondary "Schedule Demo" button and its link to `/contact` in this section (it's useful as a final fallback).

---

## TASK 8: Update Footer (lines ~1468-1519)

Find "© 2025 PractiSight LLC" and change to "© 2026 PractiSight LLC"

---

## TASK 9: Final Verification

After all changes are complete:

1. Run `npm run build` and verify zero TypeScript/build errors
2. Count the sections and confirm this order:
   - Header
   - Hero (updated copy + CTAs)
   - "What PractiSight Finds in Your First Week" (new section, replaced comparison table)
   - Features: Competitor X-Ray → Smart Analytics → AI-Powered Intelligence (reordered + rewritten)
   - Founder section (new)
   - Pricing (updated copy)
   - FAQ (6 questions now)
   - Final CTA (updated copy)
   - Footer (© 2026)
3. Check that all internal links (#features, #pricing, /contact) still work
4. Check that no JSX has unescaped quotes or apostrophes (use &apos; and &quot;)
5. Verify the mobile menu still has correct links

If there are build errors, fix them before committing.
