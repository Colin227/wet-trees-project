# 🌿 Enviro-Sensor Backend

This is the backend API for the **Enviro-Sensor** project, built with [NestJS](https://nestjs.com/). It receives real-time environmental data from Raspberry Pi Pico W devices, stores it in a PostgreSQL database, and powers a web-based dashboard for monitoring.

---

## 📦 Features

- 📬 Receives and stores environment readings (temperature, humidity, moisture)
- 🧠 Serves dynamic device config (e.g. reporting interval, debug mode)
- 🧾 Provides historical data for graphing and trend analysis
- 🗂️ Organizes devices by site and zone
- 📊 Dashboard endpoints for live stats and charts
- 🔐 JWT-based authentication (with Angular frontend support)
- 🌐 WebSocket support for live updates

---

## 🛠️ Tech Stack

- **Framework:** NestJS
- **Database:** PostgreSQL (via TypeORM)
- **WebSocket:** `@nestjs/websockets`, `socket.io`
- **Auth:** Passport + JWT
- **Config:** `@nestjs/config` + `.env` file
- **Scheduling:** `@nestjs/schedule` for background tasks (e.g. tree status updates)

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL
- Yarn or npm

### Install

```bash
yarn install
# or
npm install
```

### Environment Setup

Create a .env file:
```dotenv
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=youruser
DB_PASSWORD=yourpassword
DB_NAME=envirodb

JWT_SECRET=supersecret
JWT_EXPIRES_IN=3600s
```

### Run the App
```bash
# start dev server
npm run start:dev
```

## 🔧 Project Structure
```
src/
├── auth/                 # Login, JWT, guards
├── users/                # User registration and profile
├── devices/              # Device registry and config
├── environment-readings/ # Sensor reading ingestion and queries
├── dashboard/            # Dashboard summaries and charts
├── zones/                # Logical zones within sites
├── sites/                # Physical sites
├── watering-events/      # Watering history per zone
├── tree-health-logs/     # Manual or automated health updates
├── schedules/            # Cron jobs for daily processing
└── app.module.ts         # App entry point
```

