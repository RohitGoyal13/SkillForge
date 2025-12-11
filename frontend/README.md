# 🎓 SkillForge

<div align="center">

![SkillForge Banner](https://via.placeholder.com/1200x300/4F46E5/ffffff?text=SkillForge+-+Empowering+Learning+Through+Technology)

**A Modern Learning Management System Built for the Future**

[![Made with MERN](https://img.shields.io/badge/Made%20with-MERN-61DAFB?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Installation](#-installation) • [Configuration](#-configuration) • [Screenshots](#-screenshots)

</div>

---

## 📖 Overview

**SkillForge** is a comprehensive, full-stack Learning Management System (LMS) that revolutionizes online education. Built with the powerful MERN stack, SkillForge provides a seamless platform for educators to create and deliver engaging courses while offering students an intuitive learning experience with advanced features like semantic search, secure payments, and real-time content delivery.

Whether you're an instructor looking to share your expertise or a learner seeking to expand your knowledge, SkillForge provides all the tools you need in one elegant, performant platform.

---

## ✨ Features

### 🎯 For Instructors

- **Course Creation Studio**: Intuitive interface for creating and managing comprehensive courses
- **Rich Media Support**: Upload and manage video content, documents, and multimedia resources
- **Content Organization**: Structure courses with modules, lessons, and progressive learning paths
- **Analytics Dashboard**: Track student engagement, course performance, and revenue metrics
- **Flexible Pricing**: Set custom pricing for courses or offer them for free

### 👨‍🎓 For Students

- **Seamless Enrollment**: Quick and secure course enrollment with integrated payment processing
- **Intelligent Search**: AI-powered semantic search using Gemini API to find relevant courses
- **Progress Tracking**: Monitor your learning journey with detailed progress indicators
- **Interactive Learning**: Access high-quality video content with optimized streaming
- **Course Ratings**: Share feedback and rate courses to help other learners
- **Personalized Dashboard**: View all enrolled courses and continue learning from where you left off

### 🔐 Security & Authentication

- **Firebase OAuth Integration**: Secure authentication with Google and other OAuth providers
- **Secure Password Management**: Industry-standard encryption with password reset functionality
- **Protected Routes**: Role-based access control for instructors and students
- **Secure Payment Processing**: PCI-compliant payment handling through Razorpay

### 💰 Payment & Monetization

- **Razorpay Integration**: Seamless payment processing for course purchases
- **Multiple Payment Methods**: Support for cards, UPI, net banking, and wallets
- **Automated Enrollment**: Instant course access upon successful payment
- **Transaction History**: Complete payment records for both instructors and students

### 🚀 Performance Optimizations

- **Redux State Management**: Efficient global state management with Redux selectors
- **Optimized Rendering**: React.memo and useMemo for preventing unnecessary re-renders
- **Media Optimization**: Cloudinary integration for responsive image and video delivery
- **Database Indexing**: MongoDB query optimization for lightning-fast data retrieval
- **Lazy Loading**: Code splitting and lazy loading for improved initial load times

---

## 🛠 Tech Stack

### Frontend
- **React 18+**: Modern React with Hooks and functional components
- **Redux Toolkit**: Predictable state management with Redux DevTools
- **React Router**: Declarative routing for single-page application
- **Axios**: Promise-based HTTP client for API requests
- **Tailwind CSS / Material-UI**: Responsive and modern UI design

### Backend
- **Node.js**: JavaScript runtime for server-side execution
- **Express.js**: Fast, minimalist web framework
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: Elegant MongoDB object modeling
- **JWT**: JSON Web Tokens for secure authentication

### Third-Party Integrations
- **Firebase**: OAuth authentication and user management
- **Cloudinary**: Cloud-based media storage and optimization
- **Razorpay**: Payment gateway integration
- **Google Gemini API**: AI-powered semantic search capabilities
- **Nodemailer**: Email service for notifications and password resets

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (v5 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### API Keys Required

You'll need to obtain API keys for:

- Firebase (Authentication)
- Cloudinary (Media Storage)
- Razorpay (Payment Processing)
- Google Gemini API (Semantic Search)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/skillforge.git
cd skillforge
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=8000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/skillforge
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/skillforge

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Email Configuration (for password reset)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## 🏃‍♂️ Running the Application

### Development Mode

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000

### Production Build

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Start Production Server:**
```bash
cd backend
npm start
```

---

## 📁 Project Structure

```
skillforge/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── firebase.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   ├── paymentController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Course.js
│   │   └── Enrollment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── courseRoutes.js
│   │   └── paymentRoutes.js
│   ├── utils/
│   │   ├── cloudinary.js
│   │   └── gemini.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── course/
│   │   │   └── layout/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── CourseList.jsx
│   │   │   ├── CourseDetails.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── redux/
│   │   │   ├── slices/
│   │   │   └── store.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## 🎨 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x450/4F46E5/ffffff?text=Home+Page)

### Course Catalog
![Course Catalog](https://via.placeholder.com/800x450/10B981/ffffff?text=Course+Catalog)

### Course Details
![Course Details](https://via.placeholder.com/800x450/F59E0B/ffffff?text=Course+Details)

### Student Dashboard
![Student Dashboard](https://via.placeholder.com/800x450/8B5CF6/ffffff?text=Student+Dashboard)

### Instructor Studio
![Instructor Studio](https://via.placeholder.com/800x450/EC4899/ffffff?text=Instructor+Studio)

---

## 🔧 Key Implementation Details

### Redux State Management

```javascript
// Optimized selector with memoization
const selectCoursesByCategory = createSelector(
  [state => state.courses.items, (state, category) => category],
  (courses, category) => courses.filter(course => course.category === category)
);
```

### React Performance Optimization

```javascript
// Using React.memo to prevent unnecessary re-renders
const CourseCard = React.memo(({ course }) => {
  // Component implementation
});
```

### MongoDB Indexing

```javascript
// Optimized queries with indexes
courseSchema.index({ title: 'text', description: 'text' });
courseSchema.index({ category: 1, price: 1 });
courseSchema.index({ instructor: 1, createdAt: -1 });
```

### Semantic Search with Gemini

```javascript
// AI-powered course discovery
const searchCourses = async (query) => {
  const embedding = await geminiAPI.generateEmbedding(query);
  return await Course.find({
    $text: { $search: query }
  }).sort({ relevanceScore: -1 });
};
```

---

## 🤝 Contributing

We welcome contributions to SkillForge! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

Please ensure your code follows the project's coding standards and includes appropriate tests.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@rohitgoyal13](https://github.com/RohitGoyal13)
- Email: rohitgoyal4220@gmail.com

---

## 🙏 Acknowledgments

- **MongoDB** for the flexible database solution
- **Firebase** for seamless authentication
- **Cloudinary** for powerful media management
- **Razorpay** for secure payment processing
- **Google Gemini** for AI-powered search capabilities
- The amazing **open-source community** for inspiration and support

---

## 📧 Support

If you have any questions or need help with setup, please:

- Open an issue on GitHub
- Email: rohitgoyal4220@gmail.com

---

<div align="center">

**Made with ❤️ and ☕ by developers, for learners**

⭐ Star this repository if you find it helpful!

</div>