# 🚀 Career AI – Smart AI Career Coach

Career AI is an AI-powered career development platform designed to help students and professionals improve their skills, build strong resumes, prepare for interviews, and discover job opportunities easily.

---

# 📌 Project Overview

Career AI combines AI tools and modern full-stack technologies to provide smart career guidance and job preparation in one platform.

The platform helps users:

- Build ATS-friendly resumes
- Generate AI-based cover letters
- Prepare for interviews
- Access software engineering roadmaps
- Find job opportunities directly from LinkedIn
- Track career growth with AI suggestions

---

# ✨ Key Features

- 🤖 AI Career Guidance
- 📄 ATS-Friendly Resume Builder
- ✉️ AI Cover Letter Generator
- 🎯 Interview Preparation System
- 🧠 AI Performance Feedback
- 📚 Software Engineer Roadmaps
- 🎥 YouTube Learning Resources
- 💼 Direct LinkedIn Job Apply Links
- 🔄 Auto-updated Job Vacancies Every 7 Days
- 📊 Career Growth Insights

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** | Full-stack React framework |
| **React.js** | Frontend UI development |
| **Tailwind CSS** | Modern responsive styling |
| **Shadcn UI** | Clean UI components |
| **Prisma** | Database ORM |
| **PostgreSQL / Supabase** | Database backend |
| **Clerk** | User authentication |
| **Groq AI / OpenAI** | AI-powered features |
| **Inngest** | Background job automation |

---

# 📂 Folder Structure

```bash
CAREER-AI/
│
├── app/                # Application pages & routes
├── components/         # Reusable UI components
├── lib/                # Utility functions & configurations
├── prisma/             # Prisma database schema
├── public/             # Static assets
├── hooks/              # Custom React hooks
├── actions/            # Server actions
├── data/               # Static data
└── middleware.js       # Middleware configuration
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/tahiralimasi/CAREER-AI.git

cd CAREER-AI
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env.local` file and add:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

GROQ_API_KEY=
```

---

## 4️⃣ Run Database Migration

```bash
npx prisma generate

npx prisma db push
```

---

## 5️⃣ Start Development Server

```bash
npm run dev
```

Application will run on:

```bash
http://localhost:3000
```

---

# 👨‍💻 Developer

## Tahir Ali Masi

🔗 GitHub Repository:  
https://github.com/tahiralimasi/CAREER-AI

---
