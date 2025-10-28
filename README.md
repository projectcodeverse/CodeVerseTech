# CodeVerseTech - Full Stack Web Application

**Innovate. Create. Connect. Empowering the Future of Tech** 🚀

A modern full-stack web application for CodeVerse, showcasing services, internship programs, and project portfolio.

## 🛠️ Tech Stack

- **Frontend**: React.js + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **Routing**: React Router
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Animations**: AOS (Animate On Scroll)

## 📁 Project Structure

```
CodeVerseTech/
├── backend/
│   ├── models/
│   │   ├── Contact.js
│   │   └── Internship.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── internships.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Footer.tsx
    │   │   └── Navbar.tsx
    │   ├── pages/
    │   │   ├── About.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Home.tsx
    │   │   ├── Internship.tsx
    │   │   ├── Projects.tsx
    │   │   └── Services.tsx
    │   ├── utils/
    │   │   └── api.ts
    │   ├── App.tsx
    │   └── index.css
    ├── .env
    └── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/codeverse?retryWrites=true&w=majority
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

## 📊 Database Collections

### Internships Collection
```javascript
{
  name: String,
  email: String,
  college: String,
  domain: String,
  resumeUrl: String,
  message: String,
  createdAt: Date
}
```

### Contacts Collection
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date
}
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Form Handling**: Contact and internship application forms
- **API Integration**: RESTful APIs for data management
- **Real-time Notifications**: Toast notifications for user feedback
- **Project Portfolio**: Filterable project showcase
- **SEO Friendly**: Optimized for search engines

## 🌐 Pages

1. **Home** - Hero section, stats, services preview, testimonials
2. **About** - Mission, vision, team, company timeline
3. **Services** - Detailed service offerings and process
4. **Internship** - Program details and application form
5. **Projects** - Portfolio with filtering capabilities
6. **Contact** - Contact form and company information

## 🔧 API Endpoints

### Internships
- `POST /api/internships` - Submit internship application
- `GET /api/internships` - Get all applications (admin)

### Contact
- `POST /api/contact` - Submit contact form

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

### Backend (Render/Railway)
1. Connect GitHub repository
2. Set environment variables
3. Deploy with auto-scaling

## 🎯 Future Enhancements

- [ ] Admin dashboard for managing applications
- [ ] Email notifications
- [ ] Certificate generation
- [ ] Dark/Light mode toggle
- [ ] Blog section
- [ ] Multi-language support

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support, email projectcodeverse@gmail.com or join our community.

---

**CodeVerseTech** - Empowering the Future of Tech 🚀
