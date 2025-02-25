
# Username Generator

A sleek and modern web application that generates unique, memorable usernames for your online presence.

## Features

- **Random Username Generation**: Combines curated adjectives and nouns to create unique usernames
- **Customization Options**: 
  - Add random numbers (1-999)
  - Include special characters (!, _, ., -)
- **Clipboard Integration**: One-click copy functionality for generated usernames
- **History**: Keeps track of your recently generated usernames
- **Modern UI**: Clean, responsive design with smooth animations
- **Real-time Preview**: See generated usernames instantly

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **Shadcn/ui**: Modern UI component library
- **Vite**: Next-generation frontend build tool

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Navigate to the project directory:
```bash
cd username-generator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:8080`

## Project Structure

```
src/
├── components/
│   ├── GeneratedUsername.tsx   # Username display component
│   ├── UsernameGenerator.tsx   # Main generator component
│   └── ui/                     # Reusable UI components
├── utils/
│   └── usernameGenerator.ts    # Username generation logic
├── pages/
│   └── Index.tsx              # Main page
└── ...
```

## Usage

1. Visit the application in your browser
2. Toggle options for including numbers or special characters
3. Click "Generate Username" to create a new username
4. Click the copy icon next to any username to copy it to your clipboard
5. Generated usernames are displayed in a list with the most recent at the top

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

