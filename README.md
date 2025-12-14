# EduPulse - Educational Platform Frontend

A modern, responsive educational platform built with React, inspired by PW Live.

## Features Implemented

### ✅ Core Features
- **Multi-page Navigation** with React Router
- **Beautiful UI** with gradient animations and modern design
- **Banner Carousel** with manual image configuration
- **Shopping Cart** system with local storage
- **Payment Gateway** integration ready (Razorpay/Stripe)
- **Mobile Responsive** with hamburger menu
- **30+ API Endpoints** structure ready for backend

### 📄 Pages
1. **Home** - Banner carousel, stats, popular courses
2. **Courses** - Course listing with enroll functionality
3. **Books** - Book store with add to cart & buy now
4. **Cart** - Shopping cart with quantity management
5. **Checkout** - Payment gateway integration
6. **Login/Register** - Authentication pages
7. **Profile** - User profile page
8. **Other Pages** - Vidyapeeth, Upskilling, Real Test, Classes, Power Batch, Contact

### 🎨 Design Features
- Gradient color schemes
- Water flow animation in footer
- Smooth transitions and hover effects
- Card-based layouts
- Responsive grid systems
- Beautiful form styling

## How to Run

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## Manual Image Configuration

### Logo
Place your logo image at \`public/logo.png\` (recommended size: 200x200px)

### Banner Images
Edit banner images in \`src/pages/Home.jsx\`:
\`\`\`javascript
const banners = [
  {
    id: 1,
    title: "Your Title",
    subtitle: "Your Subtitle",
    image: "/path/to/your/image.jpg", // Change this
    // ... other properties
  }
];
\`\`\`

### Course/Book Images
Replace image URLs in respective page files with your own images.

## API Integration

All API endpoints are defined in \`src/utils/api.js\`:
- Auth APIs (login, register, logout, etc.)
- User APIs (profile, update, etc.)
- Courses APIs (get, enroll, etc.)
- Books APIs (get, search, etc.)
- Cart APIs (add, update, remove, etc.)
- Order APIs (create, get, cancel, etc.)
- Payment APIs (initiate, verify, etc.)
- And 20+ more endpoints...

To connect to backend:
1. Update \`VITE_API_URL\` in \`.env\` file
2. Uncomment API calls in components
3. Update Razorpay key in Checkout page

## Payment Gateway Setup

### Razorpay Integration
1. Sign up at https://razorpay.com
2. Get your API Key
3. Add to \`public/index.html\`:
\`\`\`html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
\`\`\`
4. Update key in \`src/pages/Checkout.jsx\`

## Project Structure

\`\`\`
frontend/
├── src/
│   ├── components/     # Reusable components (Header, Footer)
│   ├── pages/          # All page components
│   ├── context/        # React Context (Cart, Auth)
│   ├── utils/          # API utilities
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static files (add logo here)
└── package.json        # Dependencies
\`\`\`

## Technologies Used

- **React 19** - UI library
- **React Router** - Routing
- **Axios** - HTTP client
- **Framer Motion** - Animations (ready to use)
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## Next Steps (Backend Integration)

1. Set up backend API server
2. Connect all API endpoints
3. Implement real authentication
4. Connect payment gateway
5. Add real database
6. Deploy to production

## Notes

- All images use Unsplash placeholders - replace with your own
- Payment gateway is in demo mode - integrate Razorpay/Stripe
- Cart data stored in localStorage
- Mobile responsive tested on common devices
- Cross-browser compatible

## Customization

### Colors
Edit CSS variables in \`src/App.css\`:
\`\`\`css
:root {
  --primary-color: #5b4ff5;
  --secondary-color: #ff6b9d;
  /* ... more colors */
}
\`\`\`

### Fonts
Add Google Fonts in \`index.html\` and update font-family in CSS.

## Support

For any issues or questions, contact: support@edupulse.com

---

**Built with ❤️ for EduPulse**
