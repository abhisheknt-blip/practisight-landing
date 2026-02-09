import { useState, useEffect } from "react";

const views = [
  { id: "dashboard", label: "Dashboard", caption: "Your practice reputation at a glance — ratings, reviews, and trends updated in real time." },
  { id: "competitors", label: "Competitors", caption: "See exactly how you stack up against local competitors. Ratings, volume, and sentiment — side by side." },
  { id: "insights", label: "AI Insights", caption: "AI analyzes every review and tells you what's working, what's not, and exactly what to fix first." },
  { id: "reviews", label: "Reviews", caption: "Every review in one place. Flagged by sentiment, prioritized by urgency. Never miss one again." },
];

/* ───── tiny shared helpers ───── */
const Sidebar = ({ active }: { active: string }) => {
  const items = [
    { icon: "📊", label: "Dashboard" },
    { icon: "📝", label: "Reviews" },
    { icon: "💡", label: "Insights" },
    { icon: "⚔️", label: "Competitors" },
    { icon: "📍", label: "Locations" },
    { icon: "🔔", label: "Alerts" },
  ];
  return (
    <div className="w-36 bg-white border-r border-gray-100 py-4 flex-shrink-0 hidden md:block">
      <div className="px-3 mb-6 flex items-center gap-1.5">
        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
        </div>
        <span className="font-bold text-sm"><span className="text-gray-900">Practi</span><span className="text-blue-600">Sight</span></span>
      </div>
      {items.map((it) => (
        <div key={it.label} className={`flex items-center gap-2 px-3 py-1.5 mx-2 rounded text-xs ${it.label.toLowerCase() === active ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-500"}`}>
          <span className="text-sm">{it.icon}</span>{it.label}
        </div>
      ))}
    </div>
  );
};

const MetricCard = ({ title, value, sub, color = "text-gray-900", icon }: { title: string; value: string; sub?: string; color?: string; icon?: React.ReactNode }) => (
  <div className="bg-white rounded-lg border border-gray-100 p-3 flex-1 min-w-0">
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs text-gray-500 truncate">{title}</span>
      {icon && <span className="text-xs">{icon}</span>}
    </div>
    <div className={`text-xl font-bold ${color}`}>{value}</div>
    {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
  </div>
);

/* ───── DASHBOARD VIEW ───── */
const DashboardView = () => {
  const ratingData = [4.2, 4.25, 4.3, 4.35, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8];
  const volumeData = [12, 18, 15, 22, 28, 25, 32, 30, 35, 38, 42, 45];
  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];
  const reviews = [
    { name: "Jessica Miller", date: "2/8/2026", stars: 1, text: "Front desk lady was very rude. When I asked about pricing she made me feel bad. Do not recommend.", sentiment: "negative", urgent: true },
    { name: "David Thompson", date: "2/7/2026", stars: 5, text: "Dr. Mitchell is amazing! Came for a second opinion on an implant. No pain, great results. Highly recommend!", sentiment: "positive" },
    { name: "Maria Garcia", date: "2/5/2026", stars: 5, text: "Excellent care from Dr. Mitchell and her team. The office is clean and welcoming. Very professional.", sentiment: "positive" },
  ];

  return (
    <div className="flex h-full bg-gray-50">
      <Sidebar active="dashboard" />
      <div className="flex-1 p-4 overflow-hidden">
        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-900">Good afternoon, Dr. Mitchell</h2>
          <p className="text-xs text-gray-500">Here&apos;s your practice reputation overview</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="text-xs text-gray-500 mb-1">⭐ AVERAGE RATING</div>
            <div className="flex items-center justify-center">
              <div className="relative w-14 h-14">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                  <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                  <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="96, 100"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">4.8</div>
              </div>
            </div>
            <div className="text-center text-xs text-green-600 font-medium mt-1">Excellent</div>
            <div className="text-center text-xs text-gray-400">Based on 523 reviews</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="text-xs text-gray-500 mb-1">⚠️ RESPONSE RATE</div>
            <div className="text-2xl font-bold text-green-600 text-center mt-2">72%</div>
            <div className="text-xs text-gray-400 text-center mt-1">376 of 523 reviews</div>
            <div className="text-xs text-gray-400 text-center">Industry avg: 45%</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="text-xs text-gray-500 mb-1">💬 UNANSWERED REVIEWS</div>
            <div className="text-2xl font-bold text-amber-500 text-center mt-2">2</div>
            <div className="text-xs text-gray-400 text-center mt-1">Reviews need your reply</div>
            <div className="mt-1.5">
              <button className="w-full bg-amber-500 text-white text-xs py-1 rounded font-medium">Respond Now →</button>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="text-xs text-gray-500 mb-1">😊 SENTIMENT SCORE</div>
            <div className="text-2xl font-bold text-green-600 text-center mt-2">89%</div>
            <div className="text-xs text-gray-400 text-center mt-1">positive sentiment</div>
            <div className="space-y-0.5 mt-1.5 text-xs">
              <div className="flex justify-between"><span>● Positive</span><span>467 (89%)</span></div>
              <div className="flex justify-between text-amber-500"><span>● Neutral</span><span>35 (7%)</span></div>
              <div className="flex justify-between text-red-500"><span>● Negative</span><span>21 (4%)</span></div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold">Rating Trend</span>
              <div className="flex gap-1">
                {["1M","3M","6M","1Y"].map((p,i)=>(
                  <span key={p} className={`text-xs px-1.5 py-0.5 rounded ${i===2?"bg-blue-600 text-white":"text-gray-400"}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="h-20 flex items-end gap-0.5">
              {ratingData.map((v,i)=>(
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-blue-100 rounded-t relative" style={{height:`${(v-4)*125}%`}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t opacity-80"/>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {months.filter((_,i)=>i%3===0).map(m=><span key={m} className="text-xs text-gray-400">{m}</span>)}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold">Review Volume</span>
              <div className="flex gap-1">
                {["1M","3M","6M","1Y"].map((p,i)=>(
                  <span key={p} className={`text-xs px-1.5 py-0.5 rounded ${i===2?"bg-blue-600 text-white":"text-gray-400"}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="h-20 flex items-end gap-1">
              {volumeData.map((v,i)=>(
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="w-full rounded-t" style={{height:`${(v/45)*100}%`, background: i >= 10 ? '#3b82f6' : '#93c5fd'}}/>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {months.filter((_,i)=>i%3===0).map(m=><span key={m} className="text-xs text-gray-400">{m}</span>)}
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <div className="text-sm font-bold mb-2">Recent Reviews</div>
          <div className="space-y-2">
            {reviews.map((r,i)=>(
              <div key={i} className={`flex gap-2 p-2 rounded-lg border-l-3 ${r.sentiment==="negative"?"border-l-red-500 bg-red-50/30":"border-l-green-500 bg-green-50/30"}`} style={{borderLeftWidth:'3px'}}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${r.sentiment==="negative"?"bg-red-400":"bg-blue-400"}`}>
                  {r.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">{r.name}</span>
                    <span className="text-xs text-gray-400">{r.date}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${r.sentiment==="negative"?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`}>{r.sentiment}</span>
                    {r.urgent && <span className="text-xs px-1.5 py-0.5 rounded bg-red-600 text-white font-medium">Needs Response</span>}
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5 truncate">{r.text}</p>
                </div>
                <div className="flex-shrink-0">
                  {"★".repeat(r.stars).padEnd(5,"☆").split("").map((s,j)=>(
                    <span key={j} className={`text-xs ${s==="★"?"text-yellow-400":"text-gray-200"}`}>{s==="★"?"★":"★"}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ───── COMPETITORS VIEW ───── */
const CompetitorsView = () => {
  const competitors = [
    { rank: 1, name: "Riverside Family Dental", rating: 4.8, reviews: 523, sentiment: 89, you: true },
    { rank: 2, name: "Smile Dental Center", rating: 4.5, reviews: 387, sentiment: 79 },
    { rank: 3, name: "Family Dentistry Plus", rating: 4.3, reviews: 215, sentiment: 72 },
    { rank: 4, name: "Northern VA Dental Clinic", rating: 4.1, reviews: 98, sentiment: 65 },
  ];

  return (
    <div className="flex h-full bg-gray-50">
      <Sidebar active="competitors" />
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-bold text-gray-900">Competitor Comparison</h2>
            <p className="text-xs text-gray-500">Compare your performance against competitors and market trends</p>
          </div>
          <span className="text-xs text-gray-400">3 of 5 tracked &nbsp;⚙️ Manage Competitors</span>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <MetricCard title="Your Rating" value="⭐ 4.8" sub="Avg: 4.3" icon="📈"/>
          <MetricCard title="Review Volume" value="523" sub="Avg: 233" icon="📈"/>
          <MetricCard title="Positive Sentiment" value="89%" sub="Avg: 76%" color="text-green-600" icon="📈"/>
        </div>

        {/* Rankings Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="text-sm font-bold mb-1">Competitor Rankings</div>
            <div className="text-xs text-gray-400 mb-2">All practices sorted by rating</div>
            <table className="w-full text-xs">
              <thead><tr className="text-gray-400 border-b"><th className="text-left py-1">Rank</th><th className="text-left">Practice Name</th><th>Rating</th><th>Reviews</th><th>Positive %</th></tr></thead>
              <tbody>
                {competitors.map(c=>(
                  <tr key={c.rank} className={`border-b border-gray-50 ${c.you?"bg-blue-50":""}`}>
                    <td className="py-1.5 font-medium">#{c.rank}</td>
                    <td className="font-medium">{c.name} {c.you && <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded ml-1">You</span>}</td>
                    <td className="text-center">⭐ {c.rating}</td>
                    <td className="text-center">{c.reviews}</td>
                    <td className="text-center">{c.sentiment}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="text-sm font-bold mb-1">Sentiment Analysis</div>
            <div className="text-xs text-gray-400 mb-3">Breakdown of positive, neutral, and negative reviews</div>
            {competitors.map(c=>(
              <div key={c.name} className="mb-2">
                <div className="text-xs text-gray-600 mb-0.5 truncate">{c.you ? "You" : c.name.split(' ').slice(0,2).join(' ')}</div>
                <div className="flex h-4 rounded-full overflow-hidden">
                  <div className="bg-green-500" style={{width:`${c.sentiment}%`}}/>
                  <div className="bg-yellow-400" style={{width:`${Math.min(15, 100-c.sentiment-5)}%`}}/>
                  <div className="bg-red-500" style={{width:`${100-c.sentiment-Math.min(15,100-c.sentiment-5)}%`}}/>
                </div>
              </div>
            ))}
            <div className="flex gap-3 mt-2 text-xs text-gray-400">
              <span>🟩 Positive</span><span>🟨 Neutral</span><span>🟥 Negative</span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="text-sm font-bold mb-2">Rating Comparison</div>
            <div className="space-y-2">
              {competitors.map(c=>(
                <div key={c.name} className="flex items-center gap-2">
                  <span className="text-xs w-20 truncate text-gray-600">{c.you ? "You" : c.name.split(' ')[0]}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
                    <div className={`h-full rounded-full flex items-center justify-end pr-2 text-xs text-white font-medium ${c.you?"bg-blue-600":"bg-gray-400"}`} style={{width:`${(c.rating/5)*100}%`}}>
                      {c.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-3">
            <div className="text-sm font-bold mb-2">Review Volume Comparison</div>
            <div className="flex items-end gap-3 h-24 mt-2">
              {competitors.map(c=>(
                <div key={c.name} className="flex-1 flex flex-col items-center">
                  <div className={`w-full rounded-t ${c.you?"bg-blue-500":"bg-gray-300"}`} style={{height:`${(c.reviews/523)*100}%`}}/>
                  <span className="text-xs text-gray-500 mt-1 font-medium">{c.reviews}</span>
                  <span className="text-xs text-gray-400 truncate w-full text-center">{c.you ? "You" : c.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ───── INSIGHTS VIEW ───── */
const InsightsView = () => (
  <div className="flex h-full bg-gray-50">
    <Sidebar active="insights" />
    <div className="flex-1 p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-base font-bold text-gray-900">AI Insights</h2>
          <p className="text-xs text-gray-500">AI-powered analysis of your reviews</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-xs border rounded px-2 py-1 text-gray-600"><option>Last 6 Months</option></select>
          <button className="text-xs text-blue-600 border border-blue-200 rounded px-2 py-1 font-medium">🔄 Refresh Insights</button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <MetricCard title="Reviews Analyzed" value="147"/>
        <MetricCard title="Average Rating" value="4.8/5.0"/>
        <MetricCard title="Overall Sentiment" value="89%" color="text-green-600" sub="Positive"/>
      </div>

      {/* AI Summary */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-3">
        <div className="flex items-center gap-1.5 mb-1"><span>✨</span><span className="text-sm font-bold text-gray-900">AI Summary:</span></div>
        <p className="text-xs text-gray-700 leading-relaxed">Riverside Family Dental has strong patient satisfaction driven by Dr. Mitchell&apos;s clinical expertise (mentioned in 68% of positive reviews) and compassionate staff. However, <span className="font-semibold text-red-600">wait times are an emerging concern</span> — mentioned negatively 7 times in the last month, up from 2 the previous month. Front desk interactions also show a slight downward trend. Addressing these two areas could improve your rating from 4.8 to an estimated 4.9.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
        {/* Top Positives */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <div className="text-sm font-bold mb-2">👍 Top Positives</div>
          <div className="space-y-1.5">
            {[
              { text: "Friendly and compassionate staff", count: 23 },
              { text: "Quality of dental care", count: 18 },
              { text: "Clean and modern office", count: 12 },
              { text: "Painless procedures", count: 9 },
            ].map((item,i) => (
              <div key={i} className="flex items-center justify-between bg-green-50 rounded px-2.5 py-1.5">
                <span className="text-xs font-medium text-green-800">{item.text} 📈</span>
                <span className="text-xs text-green-600">{item.count} mentions</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Issues */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <div className="text-sm font-bold mb-2">⚠️ Top Issues</div>
          <div className="space-y-1.5">
            {[
              { text: "Long wait times", count: 7, trend: "↑ trending up" },
              { text: "Front desk attitude", count: 4, trend: "new this month" },
              { text: "Billing confusion", count: 2, trend: "stable" },
            ].map((item,i) => (
              <div key={i} className="flex items-center justify-between bg-red-50 rounded px-2.5 py-1.5">
                <span className="text-xs font-medium text-red-800">{item.text} 📉</span>
                <div className="text-right">
                  <div className="text-xs text-red-600">{item.count} mentions</div>
                  <div className="text-xs text-red-400">{item.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staff + Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <div className="text-sm font-bold mb-2">👥 Staff Performance</div>
          {[
            { name: "Dr. Sarah Mitchell", reviews: 45, badge: "positive", color: "green" },
            { name: "Dr. James Chen", reviews: 28, badge: "positive", color: "green" },
            { name: "Lisa (Front Desk)", reviews: 8, badge: "mixed", color: "amber" },
          ].map((s,i) => (
            <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
              <span className="text-xs text-gray-700">{s.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">{s.reviews} reviews</span>
                <span className={`text-xs px-1.5 py-0.5 rounded bg-${s.color}-100 text-${s.color}-700`}>{s.badge}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <div className="text-sm font-bold mb-2">🎯 AI Recommendations</div>
          {[
            "Address wait times: Review scheduling to reduce average patient wait from 22 to under 10 minutes.",
            "Front desk training: Implement customer service coaching focused on empathy and pricing transparency.",
            "Leverage Dr. Mitchell's reputation: Feature patient testimonials highlighting her expertise in marketing.",
          ].map((rec,i) => (
            <div key={i} className="flex gap-2 mb-2">
              <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${i===0?"bg-red-500":i===1?"bg-amber-500":"bg-blue-500"}`}>{i+1}</span>
              <p className="text-xs text-gray-700 leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ───── REVIEWS VIEW ───── */
const ReviewsView = () => {
  const reviews = [
    { name: "Jessica Miller", initials: "JM", date: "2/8/2026", stars: 1, sentiment: "negative", text: "Front desk lady has very bad manners. When I asked her to layout the pricing for the exam, cleaning, x-ray, she made me feel bad saying we are not selling you anything. I didn't even get a chance to see a doctor. Do not recommend.", urgent: true, color: "bg-red-400" },
    { name: "David Thompson", initials: "DT", date: "2/7/2026", stars: 5, sentiment: "positive", text: "Dr. Mitchell is amazing! I came for a second opinion regarding a tooth that was recommended for extraction and replacement with an implant. The tooth was fixed and is doing well — no pain, no implants. Highly recommend!", color: "bg-blue-400" },
    { name: "Maria Garcia", initials: "MG", date: "2/5/2026", stars: 5, sentiment: "positive", text: "Dr. Mitchell and her staff are excellent at what they do! It's such a pleasure to visit their office. The level of care, expertise and how sophisticated they are makes them stand out.", color: "bg-purple-400" },
    { name: "Robert Wilson", initials: "RW", date: "2/3/2026", stars: 5, sentiment: "positive", text: "Not only is Dr. Mitchell very respectful, she's also a great listener. She listens to exactly what you tell her and offers professional advice in your best interest. The premises are very clean and inviting.", color: "bg-teal-400" },
    { name: "Amanda Chen", initials: "AC", date: "1/29/2026", stars: 4, sentiment: "positive", text: "Great dental work overall. Dr. Chen was thorough and gentle. Only reason for 4 stars is the wait time — had to wait 35 minutes past my appointment time. Otherwise excellent.", color: "bg-indigo-400" },
  ];

  return (
    <div className="flex h-full bg-gray-50">
      <Sidebar active="reviews" />
      <div className="flex-1 p-4 overflow-hidden">
        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-900">Reviews</h2>
          <p className="text-xs text-gray-500">523 total reviews</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-100 p-3 mb-3">
          <input className="w-full text-xs border rounded px-2.5 py-1.5 text-gray-500 bg-gray-50" placeholder="🔍 Search reviews by name or content..." readOnly/>
          <div className="flex gap-2 mt-2">
            {["All Locations","All Time","All Ratings","All Sentiments"].map(f=>(
              <span key={f} className="text-xs border rounded px-2 py-1 text-gray-500 bg-white">{f} ▾</span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {reviews.map((r,i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 p-3" style={{borderLeftWidth:'3px', borderLeftColor: r.sentiment==="negative"?"#ef4444":"#22c55e"}}>
              <div className="flex items-start gap-2">
                <div className={`w-8 h-8 rounded-full ${r.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{r.initials}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gray-900">{r.name}</span>
                    <span className="text-xs text-gray-300">Google</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${r.sentiment==="negative"?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`}>{r.sentiment}</span>
                    <span className="text-xs text-gray-400">{r.date}</span>
                    <span className="flex-shrink-0">{Array(5).fill(0).map((_,j)=><span key={j} className={`text-xs ${j<r.stars?"text-yellow-400":"text-gray-200"}`}>★</span>)}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed line-clamp-2">{r.text}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-blue-600 font-medium cursor-pointer">↗ Reply on Google</span>
                    <span className="text-xs text-gray-400 cursor-pointer">Mark as Reviewed</span>
                    {r.urgent && <span className="text-xs px-1.5 py-0.5 rounded bg-red-600 text-white font-medium">Needs Response</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ───── MAIN WALKTHROUGH COMPONENT ───── */
export default function ProductWalkthrough() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const INTERVAL = 6000; // 6s per view

  useEffect(() => {
    if (paused) return;
    const tick = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActive(a => (a + 1) % views.length);
          return 0;
        }
        return prev + (100 / (INTERVAL / 50));
      });
    }, 50);
    return () => clearInterval(tick);
  }, [paused, active]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setProgress(0);
    setPaused(false);
  };

  const viewComponents = [
    <DashboardView key="d" />,
    <CompetitorsView key="c" />,
    <InsightsView key="i" />,
    <ReviewsView key="r" />,
  ];

  return (
    <div
      className="max-w-5xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab Navigation */}
      <div className="flex gap-1 mb-4 bg-gray-100 rounded-lg p-1 max-w-lg mx-auto">
        {views.map((v, i) => (
          <button
            key={v.id}
            onClick={() => handleTabClick(i)}
            className={`flex-1 relative text-xs font-medium py-2 px-3 rounded-md transition-all duration-200 ${
              i === active ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {v.label}
            {i === active && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 mx-2 bg-gray-200 rounded overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-none"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Dashboard Frame */}
      <div className="rounded-xl border border-gray-200 shadow-xl overflow-hidden bg-white" style={{ height: "480px" }}>
        {/* Browser chrome */}
        <div className="bg-gray-100 border-b border-gray-200 px-3 py-1.5 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded px-3 py-0.5 text-xs text-gray-400 text-center border border-gray-200">
            app.practisight.com
          </div>
        </div>

        {/* Content */}
        <div className="h-full overflow-hidden">
          {viewComponents[active]}
        </div>
      </div>

      {/* Caption */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500 transition-all duration-300">{views[active].caption}</p>
      </div>
    </div>
  );
}
