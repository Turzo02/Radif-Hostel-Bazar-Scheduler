# Radif Hostel Bazar Scheduler

A modern, award-winning web application for managing shopping rotation schedules for Radif Hostel residents. Built with React, Vite, and Tailwind CSS v4, featuring a futuristic glassmorphism design with full dark/light mode support.

## 🌟 Features

### Core Functionality
- **Smart Scheduling**: Automatically generates balanced rotation schedules for hostel residents
- **Room Management**: Select/deselect individual rooms or all rooms at once
- **Date Selection**: Choose specific dates for schedule generation
- **Dynamic Schedule Display**: View generated schedules with room assignments
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Design Excellence
- **Glassmorphism UI**: Premium translucent design with blur effects
- **Theme Support**: Full dark/light mode with system preference detection
- **Smooth Animations**: Micro-interactions and transitions throughout
- **Award-Winning Interface**: Modern, intuitive user experience
- **Color Themes**: 
  - Light Mode: Green accents (`#10b981`)
  - Dark Mode: Yellow accents (`#f3ba2f`)

## 🚀 Technology Stack

### Frontend
- **React 19.2.0** - Modern React with hooks
- **Vite 7.3.1** - Fast development and building
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code quality and consistency
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx        # App header with theme toggle
│   ├── MonthSelector.jsx   # Month/year dropdown selectors
│   ├── RoomSelector.jsx    # Room selection grid
│   ├── DateSelector.jsx    # Date selection calendar
│   ├── ScheduleTable.jsx  # Schedule display table
│   └── ErrorMessage.jsx   # Error handling component
├── contexts/            # React contexts
│   └── ThemeContext.jsx   # Theme management
├── utils/               # Utility functions
│   └── constants.js      # App constants
├── hooks/               # Custom React hooks
│   └── useTheme.js       # Theme hook
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and design tokens
```

## 🎨 Design System

### Color Palette
- **Primary Text**: Adaptive based on theme
- **Secondary Text**: Muted variants
- **Accent Colors**: Green (light) / Yellow (dark)
- **Background**: Glassmorphism with blur effects
- **Borders**: Subtle theme-aware borders

### Typography
- **Font Family**: Hind Siliguri (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Hierarchy**: Clear visual structure

### Components
- **Glass Cards**: Translucent backgrounds with borders
- **Premium Cards**: Enhanced glassmorphism effects
- **Gradient Text**: Eye-catching headings
- **Hover Effects**: Scale, color, and transform transitions
- **Loading States**: Smooth animations and delays

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Local Development
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd smart-shopping-lottery-for-radif-hostel

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Usage Guide

### 1. Select Time Period
- Choose month and year from dropdown selectors
- Custom dropdowns with search functionality
- Visual feedback for selected options

### 2. Configure Rooms
- Toggle individual rooms on/off
- Use "Select All/Clear All" for bulk actions
- Visual indicators for active selections

### 3. Choose Dates
- Select specific dates from calendar grid
- Scroll through available dates
- "Select All/Clear All" for bulk selection

### 4. Generate Schedule
- Click "Generate Schedule" button
- Automatic room assignment balancing
- Visual confirmation of generated schedule

### 5. View Results
- Scroll through schedule entries
- See room assignments per date
- Hover effects for enhanced readability

## 🎯 Key Features Explained

### Smart Algorithm
- **Balanced Distribution**: Ensures fair room rotation
- **Conflict Prevention**: Avoids duplicate assignments
- **Optimization**: Minimizes scheduling conflicts

### Theme System
- **System Detection**: Respects OS dark/light preference
- **Persistent Storage**: Saves user theme choice
- **Smooth Transitions**: Animated theme switching

### Responsive Design
- **Mobile First**: Optimized for small screens
- **Adaptive Layout**: Grid adjustments per screen size
- **Touch Friendly**: Large tap targets on mobile

## 🔧 Customization

### Adding New Rooms
Edit `DEFAULT_ROOMS` in `src/utils/constants.js`:
```javascript
export const DEFAULT_ROOMS = [
  'Room 101',
  'Room 102',
  'Room 103',
  // Add new rooms here
];
```

### Modifying Colors
Update CSS variables in `src/index.css`:
```css
:root[data-theme="light"] {
  --accent-start: #10b981;  /* Green for light mode */
  --accent-end: #059669;
}

:root[data-theme="dark"] {
  --accent-start: #f3ba2f;  /* Yellow for dark mode */
  --accent-end: #eab308;
}
```

## 🐛 Troubleshooting

### Common Issues
1. **Calendar Not Loading**: Check date generation logic
2. **Theme Not Applying**: Verify ThemeContext wrapper
3. **Schedule Not Generating**: Ensure rooms and dates selected
4. **Mobile Layout Issues**: Check responsive breakpoints

### Performance Tips
- Use modern browsers for best performance
- Enable hardware acceleration in browser settings
- Clear cache if UI elements appear broken

## 🤝 Contributing

### Development Guidelines
- Follow existing code patterns and naming conventions
- Use Tailwind CSS v4 syntax (`text-(--variable)` not `text-[var(--variable)]`)
- Maintain glassmorphism design consistency
- Test on both light and dark themes
- Ensure mobile responsiveness

### Code Quality
- Run `npm run lint` before committing
- Follow React best practices
- Use semantic HTML elements
- Implement proper error boundaries

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set
- **Google Fonts** - For the Hind Siliguri typeface

---

**Built with ❤️ for Radif Hostel residents**
*Created by TurzO - Modern Web Development*
