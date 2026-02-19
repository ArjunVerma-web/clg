# Student Portal - CarryOver Form Implementation Plan

## Project Overview
- **Project Name**: Shobhit University Student Portal - CarryOver Form
- **Type**: Single Page Web Application (HTML/CSS/JS)
- **Core Functionality**: A form for students to submit CarryOver requests with student details, academic details, and subject details
- **Target Users**: Students of Shobhit University, Gangoh

## UI/UX Specification

### Layout Structure
- **Header**: University logo, university name, and portal title
- **Main Content**: Form container with three sections
- **Footer**: Copyright and university details

### Visual Design

#### Color Palette
- **Primary**: #1a365d (Deep Blue - University theme)
- **Secondary**: #2c5282 (Medium Blue)
- **Accent**: #c53030 (Red - for highlights)
- **Background**: #f7fafc (Light gray)
- **Form Background**: #ffffff (White)
- **Text Primary**: #1a202c (Dark gray)
- **Text Secondary**: #718096 (Medium gray)
- **Border**: #e2e8f0 (Light border)

#### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Header Title**: 28px, bold
- **Section Titles**: 20px, semibold
- **Form Labels**: 14px, medium
- **Input Text**: 14px, regular

#### Spacing
- **Container Max Width**: 800px
- **Section Padding**: 24px
- **Form Group Margin**: 16px
- **Input Padding**: 12px

### Components

#### Header
- University logo (left aligned)
- University name: "Shobhit University, Gangoh"
- Portal title: "CarryOver Form"

#### Form Sections

1. **Student Details Section**
   - Student Name (text input, required)
   - Father's Name (text input, required)
   - Roll Number (text input, required)
   - Enrollment Number (text input, required)
   - Contact Number (tel input, required)

2. **Academic Details Section**
   - Course (dropdown: B.Tech, M.Tech, B.Sc, M.Sc, BBA, MBA, etc.)
   - Semester (dropdown: 1-8)
   - Year (text input)
   - Semester Type (radio buttons: Even/Odd)

3. **Subject Details Section**
   - Subject Name (text input, required)
   - Subject Code (text input, required)
   - Add More Subject button (for multiple subjects)

#### Submit Button
- Full width
- Primary color background
- "Submit CarryOver Request" text

### Interactive Behaviors
- Form validation on submit
- Hover effects on buttons
- Focus states on inputs
- Responsive design for mobile

## Functionality Specification

### Core Features
1. Form data collection with validation
2. Multiple subject entry capability
3. Responsive design
4. Form reset functionality
5. Success message on submission

### User Interactions
- Fill in all required fields
- Select/add multiple subjects if needed
- Submit form
- See success confirmation

## Acceptance Criteria
1. ✅ Logo displays correctly from the provided URL
2. ✅ All form fields are present and functional
3. ✅ Form validates required fields
4. ✅ Responsive on mobile and desktop
5. ✅ Clean, professional appearance matching university theme

## Status: COMPLETED ✅

The Student Portal CarryOver Form has been successfully created with:
- Header with Shobhit University logo and name
- Student Details section (Name, Father's Name, Roll Number, Enrollment Number, Contact)
- Academic Details section (Course, Semester, Year, Semester Type)
- Subject Details section with dynamic add/remove functionality
- Form validation and success message
- Responsive design

