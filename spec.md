# Personal Portfolio Website

## Overview
A clean, minimal personal portfolio website showcasing Mahendra Babu's skills, projects, and experience as a B.Tech 2nd-year student and intern, with content dynamically populated from resume data.

## Visual Design
- Simple, beginner-friendly design with clean typography and minimal aesthetics
- Dual theme support: light and dark mode with smooth transitions
- Soft color palette using pastel or neutral tones
- Clean layout with consistent spacing and readable fonts
- No gradients, glow effects, or glass-morphism
- Simple card layouts with subtle borders and clean backgrounds
- Modest hover effects with gentle transitions

## Interactive Features
- Dark/light mode toggle with local storage persistence
- Simple fade-in animations for sections on scroll
- Gentle hover effects for buttons and cards (subtle lift or color change)
- Smooth transitions throughout the interface
- No animated backgrounds or complex visual effects

## Content Sections

### Hero Section
- Display Mahendra Babu's name and role extracted from resume
- Profile photo using "suit.jpg" image
- Personal tagline based on resume content
- Action buttons: "View Projects" and "Download Resume" (links to resume.pdf)

### About Me
- Brief introduction highlighting B.Tech student status and internship experience from resume
- Remove the four boxes/cards that appear after the About section

### Skills
- Display skills organized in three categories:
  - **Frontend:** HTML, CSS, JavaScript
  - **Backend:** Java, Python, Node.js, MongoDB
  - **Tools:** Git/GitHub, VS Code, Postman
- Simple tag-based layout with category headers
- No percentage progress indicators or progress bars
- Clean, minimal styling consistent with overall design
- Tags displayed as simple cards or badges under each category

### Projects
- Display only two specific projects:
  1. Personal Portfolio (with project image)
  2. GGU Chatbot (a chatbot for Godavari Global University, with project image)
- Remove GitHub and Demo buttons from project cards
- Remove all listed technologies under each project
- Each card displays: project title, description, and project image only

### Education Section
- Separate section displaying academic background extracted from resume
- Clean timeline-style layout for educational details
- B.Tech program details
- Improved content to sound more natural and organized
- Add a third point describing schooling history

### Experience Section
- Separate section displaying internship and work experience extracted from resume
- Clean timeline-style layout for professional experience
- Include internship completed in 2026 at the company "Future Interns"
- Other internship details and any work experience listed

### Contact
- Contact form with fields: name, email, message
- Contact information:
  - Email: mahendraaraveeti2006@gmail.com
  - Contact: +91 9703194548
  - Location: Rajahmundry, Andhra Pradesh
- JavaScript form validation with simple success feedback

### Footer
- Social media links:
  - LinkedIn: www.linkedin.com/in/
  - GitHub: https://github.com/Araveetimahendra
  - Twitter: https://x.com/mahendraar99988
  - Facebook: https://www.facebook.com/share/1AZ9qnH7HK/
  - Instagram: https://www.instagram.com/mahendraaraveeti?igsh=d3Z1M282NDYycmpw
- Footer text: "© 2026 All rights reserved by Mahendra Araveeti."
- Remove all Caffeine attribution

## Backend Requirements
- PDF parsing functionality to extract content from "Mahendra_Babu_Resume (3)-1.pdf" and "Mahendra_Babu_Resume (3).pdf"
- Data extraction for: personal information, skills, projects, education, internship experience, contact details
- API endpoints to serve parsed resume data to frontend
- Resume file serving for download functionality
- Store updated contact information and experience details
- Store and serve the specific skills data organized by categories (Frontend, Backend, Tools)

## Technical Requirements
- Resume parsing and content extraction from PDF files
- Dynamic content population based on extracted resume data
- Responsive design for all screen sizes
- Local storage for theme preference
- Form validation and user feedback
- Resume download functionality using actual resume files
- Error-free JavaScript execution
- Optimized for Internet Computer deployment
- Content language: English

## File Structure
- Backend: Resume parsing, data extraction, and API endpoints
- Frontend: HTML structure, CSS styling, JavaScript functionality with dynamic content loading
