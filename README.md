# Mixmi Profile

A decentralized profile platform built with Next.js, Stacks, and Tailwind CSS.

## Features

- 🔐 Stacks Wallet Authentication
- 👤 Customizable Profile
- 🎯 Spotlight Section for Projects & Collaborations
- 🎵 Media Embeds (YouTube, SoundCloud, Spotify, Apple Music)
- 🛍️ Shop Integration
- 🎨 Custom Profile Stickers
- 💾 Local Storage Persistence
- 🌗 Dark Mode

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn/ui Components
- Stacks.js
- React Image Crop

## Project Structure

app/
├── components/
│   ├── profile/
│   │   ├── MediaSection.tsx
│   │   ├── ShopSection.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── SpotlightSection.tsx
│   │   └── StickerSection.tsx
│   ├── media/
│   │   └── MediaEmbed.tsx
│   └── ui/
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       └── textarea.tsx
├── lib/
│   ├── auth.ts
│   └── example-content.ts
├── types/
│   └── stacks.d.ts
├── public/
│   └── images/
├── globals.css
├── layout.tsx
├── page.tsx
└── providers.tsx
├── .env.local
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json

## Recent Updates

### Component Refactoring
- ✅ Extracted SocialLinks into standalone component
- ✅ Created SpotlightSection component for projects
- ✅ Separated MediaSection and MediaEmbed components
- ✅ Improved code organization and maintainability
- ✅ Added proper TypeScript types for all components

### Next Steps
- [x] Extract Shop section into component
- [x] Extract Sticker section into component
- [ ] Create shared ImageUpload component
- [ ] Add error boundaries
- [ ] Improve loading states
- [ ] Add image optimization for uploads
- [ ] Implement proper error handling for media embeds
- [ ] Add unit tests for components

## Development Guidelines

1. Make minimal, incremental changes
2. Test thoroughly after each change
3. Document any modifications
4. Maintain working version commits

### Important Notes
- All core features functioning
- Components properly separated
- Media embeds working correctly
- Project structure improved




