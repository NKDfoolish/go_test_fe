# Student Scores Dashboard

This project is a React application designed to display student scores and statistics. It provides a user-friendly interface for searching students, viewing their details, and analyzing subject statistics.

## Features

- Search for students by registration number.
- View detailed information about each student, including their scores in various subjects.
- Display statistics for individual subjects, including high scores, average scores, and low scores.
- Visualize statistics of all subjects in chart format.
- List the top students based on their scores.

## Technologies Used

- React
- React Hooks
- Tailwind CSS (for styling)
- Axios (for API calls)

## Project Structure

```
student-scores-dashboard
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StudentSearch.jsx
│   │   ├── StudentDetails.jsx
│   │   ├── SubjectStatistics.jsx
│   │   ├── AllSubjectsChart.jsx
│   │   └── TopStudentsTable.jsx
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   ├── StudentPage.jsx
│   │   └── StatisticsPage.jsx
│   ├── services
│   │   └── api.js
│   ├── utils
│   │   ├── formatters.js
│   │   └── constants.js
│   ├── App.jsx
│   ├── index.jsx
│   └── App.css
├── package.json
├── .gitignore
├── README.md
└── tailwind.config.js
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd student-scores-dashboard
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Use the search bar to find students by their registration number.
- Click on a student's name to view detailed information and scores.
- Navigate to the statistics page to view subject statistics and top students.

## License

This project is licensed under the MIT License.