# Web3 Dashboard - Design Showcase

A modern, responsive Web3 dashboard interface designed with a focus on user experience and visual appeal. This project demonstrates my skills in creating beautiful, functional interfaces for blockchain and cryptocurrency applications.

## 📸 Screenshots

<!-- Tabs for screenshots -->
<div align="center">
  <div style="margin-bottom: 20px;">
    <input type="radio" id="screenshot1" name="screenshot-tabs" checked>
    <label for="screenshot1">Dashboard View</label>
    
    <input type="radio" id="screenshot2" name="screenshot-tabs">
    <label for="screenshot2">Portfolio View</label>
    
    <div class="screenshot-container">
      <div class="screenshot" id="screenshot1-content">
        <img src="/img/web3dashboard1.png" alt="Web3 Dashboard - Main View">
      </div>
      <div class="screenshot" id="screenshot2-content">
        <img src="/img/web3dashboard2.png" alt="Web3 Dashboard - Portfolio View">
      </div>
    </div>
  </div>
</div>

<details>
  <summary>ℹ️ How to view screenshots</summary>
  <p>Click on the tab labels above to switch between different views of the dashboard. The first tab shows the main dashboard view, while the second tab displays the portfolio view.</p>
</details>

<style>
  /* Hide radio buttons */
  input[type="radio"] {
    display: none;
  }
  
  /* Style tab labels */
  label {
    display: inline-block;
    padding: 8px 16px;
    margin: 0 2px;
    cursor: pointer;
    background: #2d3748;
    color: #e2e8f0;
    border-radius: 4px 4px 0 0;
    font-size: 0.9em;
  }
  
  /* Show active tab */
  input[type="radio"]:checked + label {
    background: #4a5568;
    color: white;
  }
  
  /* Hide all content by default */
  .screenshot {
    display: none;
    margin-top: 10px;
    text-align: center;
  }
  
  /* Show only the active content */
  #screenshot1:checked ~ .screenshot-container #screenshot1-content,
  #screenshot2:checked ~ .screenshot-container #screenshot2-content {
    display: block;
  }
  
  /* Style the images */
  .screenshot img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Container for the tabbed interface */
  .screenshot-container {
    padding: 20px;
    background: #1a202c;
    border-radius: 0 8px 8px 8px;
    margin-top: -1px;
  }
  
  /* Hide the details marker in summary */
  details summary {
    list-style: none;
    cursor: pointer;
    color: #63b3ed;
    margin: 10px 0;
  }
  
  details summary::-webkit-details-marker {
    display: none;
  }
  
  details[open] summary {
    margin-bottom: 10px;
  }
</style>


## 🎨 Design Highlights

### Visual Design
- **Dark Theme UI** with carefully selected color gradients for depth and contrast
- **Responsive Layout** that adapts seamlessly across all device sizes
- **Micro-interactions** and smooth animations for enhanced user engagement
- **Custom UI Components** with attention to detail and consistency

### Technical Implementation
- Built with **Next.js 13+** and **TypeScript** for type safety
- Styled with **Tailwind CSS** for rapid, maintainable styling
- Animated with **Framer Motion** for buttery-smooth transitions
- Component-based architecture for maximum reusability

## ✨ Key Features

- **Interactive Data Visualization**
- **Mock Market Data** display (demonstration only)
- **Responsive Grid Layout**
- **Playful Animations** featuring an interactive butterfly decoration
- **Dark/Light Mode** ready (coming soon)
- **Accessible** interface following WCAG guidelines

## 🛠️ Technical Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context
- **Type Safety**: TypeScript
- **Icons**: Lucide Icons
- **Font**: Geist (optimized with next/font)

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/web3-dashboard.git
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Design Decisions

- **Color Scheme**: Chose a dark theme with blue accents to reduce eye strain during extended use
- **Typography**: Used Geist font for its modern, clean aesthetic and excellent readability
- **Spacing**: Implemented a consistent 8px grid system for visual harmony
- **Motion**: Added subtle animations to guide user attention and improve perceived performance

## 🖥️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

💡 **Note**: This is a design showcase. For a production application, additional security measures and error handling would be implemented.


