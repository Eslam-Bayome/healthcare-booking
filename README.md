# Healthcare Appointment Booking Platform

A modern, accessible, and responsive healthcare appointment booking interface built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This project demonstrates a fully functional front-end implementation of a healthcare appointment booking system, featuring:

- Doctor directory with filtering capabilities
- Interactive booking modal
- Appointment management
- Fully responsive design
- Accessibility-first approach

## 🤖 AI Tools Utilized

This project leveraged various AI tools to enhance development efficiency:

1. **GitHub Copilot**

   - Component scaffolding
   - TypeScript type definitions
   - Accessibility implementations

2. **ChatGPT**

   - Mock data generation
   - Component architecture planning
   - Accessibility best practices
   - Code review and optimization

3. **Claude/Anthropic**

   - Component structure optimization
   - TypeScript type refinements
   - UI/UX improvements

4. **V0.dev**
   - Initial component design
   - Responsive layout patterns
   - Shadcn/UI integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

## 🎨 Features

### Doctor Directory

- Filterable list of doctors
- Specialty and availability filters
- Responsive doctor cards with key information
- Accessible navigation and interaction

### Booking System

- Interactive booking modal
- Time slot selection
- Appointment confirmation
- Real-time availability updates

### Appointment Management

- View all booked appointments
- Appointment details display
- Responsive layout across devices

## 🌟 Technical Highlights

- **Framework**: Next.js 14 with App Router
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React useState for local state
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader optimization

## 🔄 Known Limitations & Future Improvements

1. **Current Limitations**

   - Mock data only (no backend integration)
   - Appointment booking without authentication
   - Limited filtering options
   - User appointment get removed after refresh
   - Limited appointment management features
   - Basic error handling

2. **Planned Improvements**
   - Backend integration
   - User authentication
   - Advanced filtering options
   - Real-time availability updates
   - Appointment reminders
   - Calendar integration

## 🧪 Testing

```bash
# Run tests
npm run test
# or
yarn test
```

## 📚 Project Structure

```
├── app/                  # Next.js app directory
├── components/          # React components
├── lib/                 # Utilities and types
├── hooks/              # Custom React hooks
├── styles/             # Global styles
└── public/             # Static assets
```
