# 🤖 AI Expert Career

AI Expert Career is a comprehensive platform designed for the AI community, providing expert consultant services, structured learning paths through courses, and educational insights via blogs. The platform features advanced dashboards for users, admins, and consultants to manage their professional growth and service delivery.

---

## 🚀 Key Features

### 🏢 Multi-Role Dashboards

- **Admin Dashboard**:
  - **User Management**: Monitor and manage user accounts and roles.
  - **Course Center**: Full control over course creation, categories, and promotional banners.
  - **Blog Engine**: Direct educational content strategy with a modular blog system.
  - **Operations**: Manage AI consultant appointments and schedules.
  - **Marketing & Growth**: Distribute promo codes and broadcast newsletter updates.
  - **Moderation**: Review oversight and system-wide notification broadcasting.
- **User Dashboard**:
  - **Learning Hub**: Personal space to access and track enrolled course progress.
  - **Session Management**: Quick overview and management of booked AI consultant sessions.
  - **Communication**: Notification center for system updates and personalized alerts.
  - **Profile Control**: Secure account management and profile customization.
- **Consultant Dashboard**:
  - **Professional Identity**: Specialized tools for AI experts to manage their public profile, showcase expertise, and handle professional engagements.

### 📚 Educational Ecosystem

- **AI Consultant Services**: Connect with industry experts for personalized guidance.
- **Course Management**: A variety of free and premium courses tailored for AI advancement.
- **Interactive Blog**: Latest news, tutorials, and insights from the AI world.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React](https://reactjs.org/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **State & Data**: [TanStack React Query](https://tanstack.com/query) & Context API
- **Backend Services**: [Firebase](https://firebase.google.com/) (Auth & Backend)
- **Analytics**: React GA4 (Google Analytics)
- **Additional Tools**: Axios, React Hook Form, SweetAlert2, React Toastify, Swiper, Framer Motion (Lottie).

-----

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (Images, SVGs, etc.)
├── components/      # Reusable UI components
│   ├── common/      # Auth, Loaders, Terms & Conditions
│   ├── layout/      # Main and Dashboard layouts
│   ├── pages/       # feature-specific page components
│   └── router/      # Routing logic (React Router Dom)
├── Context/         # Context API providers (Auth, Notifications, etc.)
├── Dashboard/       # Dashboard modules (Admin, User, Consultant)
├── firebase/        # Firebase configuration
├── hooks/           # Custom React hooks
├── App.jsx          # Root component
└── main.jsx         # Entry point
```

---

## ⚙️ Local Setup

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation Steps

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/AI-Expert-Career-client.git
    cd AI-Expert-Career-client
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Environment Configuration**:
    Create a `.env.local` file in the root directory and add your credentials:

    ```env
    VITE_Image_Upload_token=YOUR_IMGBB_API_KEY
    MEASUREMENT_ID=YOUR_GOOGLE_ANALYTICS_ID
    # Add other Firebase/API keys as required
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

---

## 📄 License

This project is private and for internal use.

---

_Built with ❤️ by AI Expert Career Team_
