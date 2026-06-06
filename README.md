# LearnX Dashboard

## Overview

LearnX Dashboard is a futuristic student learning dashboard built using Next.js App Router, Supabase, Tailwind CSS, TypeScript, and Framer Motion.

The application demonstrates modern frontend architecture with server-side data fetching, animated UI interactions, responsive design, and reusable component patterns.

---

## Tech Stack

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Supabase
* Lucide React Icons

---

## Architecture

The application follows a component-driven architecture.

### Layout Components

* Sidebar
* MobileBottomNav

### Dashboard Components

* HeroTile
* CourseTile
* ActivityTile

### Motion Components

* AnimatedGrid
* AnimatedItem

This separation keeps animation logic independent from UI components and improves maintainability.

---

## Server / Client Component Split

### Server Components

The main dashboard page is implemented as a Server Component.

Course data is fetched from Supabase on the server using:

```ts
const courses = await getCourses();
```

This improves performance and reduces unnecessary client-side requests.

### Client Components

Interactive components use the `"use client"` directive:

* Sidebar
* MobileBottomNav
* CourseTile
* ActivityTile
* AnimatedGrid
* AnimatedItem

These components require client-side state, animations, or user interactions.

---

## Data Layer

Course information is stored in Supabase using the following schema:

* id (uuid)
* title (text)
* progress (integer)
* icon_name (text)
* created_at (timestamp)

Data is fetched dynamically and rendered into animated course cards.

---

## Animations

Framer Motion is used for:

* Staggered page load animations
* Animated progress bars
* Card hover interactions
* Sidebar active state transitions
* Mobile navigation transitions

Spring physics are used throughout the interface for smooth interactions.

---

## Responsive Design

### Desktop

* Full sidebar navigation
* Multi-column Bento Grid

### Tablet

* Icon-only sidebar
* Responsive two-column layout

### Mobile

* Bottom navigation bar
* Single-column stacked layout

---

## Loading & Error Handling

### Loading

Skeleton loading states are implemented using loading.tsx with animated placeholders.

### Error Handling

An error boundary is implemented using error.tsx with retry functionality.

---

## Challenges Faced

* Managing Framer Motion TypeScript typings during production builds.
* Preventing layout shifts while maintaining hover interactions.
* Creating a responsive Bento Grid that adapts cleanly across desktop, tablet, and mobile breakpoints.
* Integrating Supabase data while preserving a clear server/client component boundary.

---

## Setup

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
