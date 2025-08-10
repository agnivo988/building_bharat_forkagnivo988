# 🏗️ Building Bharat

A modern web application built with Next.js frontend and Node.js backend, featuring a beautiful homepage with animated hero sections.

## 📁 Project Structure

```
building_bharat/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js app router
│   │   ├── components/      # React components
│   │   └── lib/            # Utility functions
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
├── backend/                  # Node.js backend server
│   ├── index.js             # Server entry point
│   └── package.json         # Backend dependencies
└── README.md                # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **Git**

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd building_bharat
```

### 2. Install Dependencies

#### Frontend Dependencies
```bash
cd frontend
npm install
```

#### Backend Dependencies
```bash
cd ../backend
npm install
```

### 3. Run the Application

#### Start the Backend Server
```bash
# From the backend directory
cd backend
npm run dev
```
The backend will start on `http://localhost:5000`

#### Start the Frontend Development Server
```bash
# From the frontend directory (in a new terminal)
cd frontend
npm run dev
```
The frontend will start on `http://localhost:3000`

## 🛠️ Development

### Frontend (Next.js)

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v3
- **Components**: shadcn/ui components
- **Animations**: Framer Motion
- **Language**: TypeScript

#### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

#### Key Components
- `Header.tsx` - Navigation component
- `HeroSection.tsx` - Main hero section
- `AnimatedHero.tsx` - Animated hero elements

### Backend (Node.js)

- **Runtime**: Node.js
- **Server**: Express.js
- **Package Manager**: npm

#### Available Scripts
```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
```

## 🌐 Environment Variables

### Frontend
No environment variables are required for basic functionality.

### Backend
Create a `.env` file in the backend directory if needed:
```env
PORT=5000
NODE_ENV=development
```

## 📱 Features

- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Clean, professional interface
- **Smooth Animations** - Framer Motion powered
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

## 🔧 Configuration Files

- `frontend/tailwind.config.js` - Tailwind CSS configuration
- `frontend/next.config.ts` - Next.js configuration
- `frontend/components.json` - shadcn/ui configuration
- `frontend/postcss.config.js` - PostCSS configuration

## 🚨 Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Change the port in the respective package.json files
   - Or kill the process using the port

2. **Dependencies Issues**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **Build Errors**
   - Ensure Node.js version is 18+
   - Clear Next.js cache: `rm -rf .next`

### Frontend Issues

- **Tailwind CSS not working**: Check if `postcss.config.js` exists
- **Image loading errors**: Verify `next.config.ts` has correct image domains
- **TypeScript errors**: Ensure all dependencies are properly installed

### Backend Issues

- **Server not starting**: Check if port 5000 is available
- **Module not found**: Verify all dependencies are installed

## 📚 Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **nodemon** - Development server

## 🤝 Contributing

1. Fork the repository
2. work on dev branch: `git checkout -b dev`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin dev`
6. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Search existing issues
3. Create a new issue with detailed information

---

**Happy Coding! 🚀**
