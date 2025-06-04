# 🖋️ inkr.spot

**inkr.spot** is a decentralized, local-first writing and publishing app inspired by Twitter—but rebuilt for privacy, ownership, and offline-first performance.

## 📁 Project Structure

```
inkr.spot/
├── src/
│   ├── components/      # Reusable UI
│   ├── screens/         # Feed, Compose, View, etc.
│   ├── store/           # Zustand state
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Helpers, validators
│   ├── types/           # TypeScript types
│   └── constants/       # Static values
├── App.tsx
├── eslint.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Project Overview

This app is being built in **four modular phases**:

| Phase | Description                             | Status         |
| ----- | --------------------------------------- | -------------- |
| 1     | Local-only React Native App             | 🔧 In Progress |
| 2     | Rust Backend + Postgres + JWT Auth      | ⏳ Planned     |
| 3     | Substrate Blockchain Audit Layer        | ⏳ Planned     |
| 4     | Rust Microservice for AI Classification | ⏳ Planned     |

## ✅ Phase 1 – React Native (Expo) App

- Mobile-only (Expo + TypeScript)
- Fully local with no backend
- Content types:
  - Tweets (≤250 characters)
  - Posts (≤250 words)
  - Articles (≤750 words)
- Features:
  - Offline persistence via `AsyncStorage`
  - Zustand store + React Query
  - Form validation with React Hook Form + Yup
  - Image/media support via `expo-image-picker`
  - Native styling with Tailwind (`NativeWind`)
  - Testing with Jest + RTL
  - Linting and formatting with ESLint v9 + Prettier

### 🧠 Tech Stack

| Layer         | Tech                                 |
| ------------- | ------------------------------------ |
| Framework     | Expo (React Native + TypeScript)     |
| State         | Zustand + React Query                |
| Styling       | NativeWind (Tailwind CSS)            |
| Forms         | React Hook Form + Yup                |
| Storage       | AsyncStorage (local only)            |
| Media         | expo-image-picker                    |
| Notifications | expo-notifications                   |
| Testing       | Jest + @testing-library/react-native |
| Linting       | ESLint v9 (flat config) + Prettier   |

## 🛠️ Development Setup

```
# Install dependencies
npm install

# Run the app (choose platform)
npm run start
npm run ios
npm run android
```

Lint & Format

```
npm run lint       # Check for lint issues
npm run format     # Auto-format using Prettier
```

📜 License

??

🧑‍💻 Author

Alexthedar
