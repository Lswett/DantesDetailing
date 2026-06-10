# Dante's Detailing

Production-ready starter website and web app for Dante's Detailing, a mobile auto detailing business serving Genesee County, Michigan.

## Stack

- Next.js App Router with TypeScript
- Prisma with SQLite for local development
- Server actions and API routes for persistence
- Structured starter data for services, pricing, gallery, testimonials, and memberships
- Generated mock vehicle/detailing imagery in `public/images`

## Setup

1. Install dependencies:

```bash
npm install
```

On this Windows machine, use `npm.cmd install` if PowerShell blocks `npm.ps1`.

2. Create environment file:

```bash
copy .env.example .env
```

3. Create and seed the database:

```bash
npm run db:migrate -- --name init
npm run db:seed
```

If Prisma's native migration engine fails on a locked-down Windows/OneDrive environment, use the local fallback:

```bash
npm run db:init
```

4. Start development:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Useful Scripts

- `npm run dev` - start the local dev server
- `npm run build` - generate Prisma client and build Next.js
- `npm run typecheck` - run TypeScript checks
- `npm run db:migrate` - run Prisma migrations
- `npm run db:seed` - load starter content

## Content Model

Starter content lives in `lib/site-data.ts` and is mirrored into the database by `prisma/seed.ts`.

Database models include:

- `Service`
- `PricingOption`
- `BookingRequest`
- `ContactMessage`
- `Testimonial`
- `GalleryImage`
- `MembershipPlan`
- `AdminUser`

## Admin/CMS

The `/admin` route is a placeholder dashboard with disabled CMS sections. It is intentionally not a customer account system. Owner authentication and editing workflows can be added later around the existing Prisma models.

## Deployment Notes

SQLite is suitable for local development. For production, switch `DATABASE_URL` to Postgres and update the Prisma datasource provider from `sqlite` to `postgresql`, then run a production migration.
