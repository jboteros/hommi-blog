# Admin Dashboard Setup Guide

This is an admin dashboard built with Next.js, Firebase Authentication, and Tailwind CSS for blog management.

## Features

- 🔐 Firebase Authentication
- 📝 Blog post management (Create, Read, Update, Delete)
- 📊 Dashboard with statistics
- ⚙️ Settings management
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project

## Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password)
   - Create a Firestore database

3. Set up environment variables:
   Create a `.env.local` file in the root directory with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Authentication
- The app will redirect to `/login` if not authenticated
- Create a user account in Firebase Authentication
- Sign in with your email and password

### Dashboard
- View statistics and quick actions
- Navigate to different sections using the sidebar

### Blog Management
- **View Posts**: See all blog posts with status and view counts
- **Create Post**: Add new blog posts with title, excerpt, and content
- **Edit Posts**: Modify existing posts
- **Delete Posts**: Remove posts (with confirmation)

### Settings
- Manage profile information
- Configure blog settings (auto-save, auto-publish)
- Control notification preferences

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   │   ├── blog/         # Blog management
│   │   └── settings/     # Settings page
│   ├── login/            # Authentication
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   └── DashboardLayout.tsx
├── contexts/            # React contexts
│   └── AuthContext.tsx
└── lib/                 # Utility libraries
    └── firebase.ts
```

## Firebase Setup

### Authentication
1. In Firebase Console, go to Authentication > Sign-in method
2. Enable Email/Password authentication
3. Add your first user or enable sign-up

### Firestore Database
1. Go to Firestore Database
2. Create a database in test mode
3. Set up security rules for your use case

## Customization

### Styling
- The app uses Tailwind CSS for styling
- Modify colors and components in the respective files
- Icons are from Lucide React

### Adding Features
- Blog posts are currently using mock data
- To connect to Firestore, update the blog management functions
- Add more dashboard widgets as needed

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to your preferred platform (Vercel, Netlify, etc.)

3. Set environment variables in your deployment platform

## Security Notes

- Firebase security rules should be configured properly
- Environment variables should be kept secure
- Implement proper user roles and permissions as needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License. 