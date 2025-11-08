# PractiSight Landing Page

A professional landing page for PractiSight - AI-powered review monitoring and insights for dental practices.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Responsive design optimized for all devices
- SEO-friendly with proper meta tags
- Modern, clean aesthetic with professional medical/dental feel
- Real-time email waitlist signup (currently logs to console)
- Smooth animations and transitions
- Accessible navigation and forms

## Project Structure

```
practisight-landing/
├── app/
│   ├── page.tsx        # Main landing page
│   ├── layout.tsx      # Root layout with SEO metadata
│   └── globals.css     # Global styles with Tailwind
├── public/             # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Building for Production

```bash
npm run build
npm start
```

## Customization

- Primary color: Indigo-600 (#4F46E5)
- Customize colors in `tailwind.config.ts`
- Update meta tags in `app/layout.tsx`
- Modify content in `app/page.tsx`

## License

Copyright © 2024 PractiSight. All rights reserved.
