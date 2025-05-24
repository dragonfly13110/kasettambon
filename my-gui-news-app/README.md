# My GUI News App

## Overview
My GUI News App is an Electron-based application that allows users to easily add news content through a graphical user interface. The application updates a JSON file (`newsData.json`) with the new news entries, making it simple to manage and display news content.

## Project Structure
```
my-gui-news-app
├── src
│   ├── main.ts          # Main entry point of the application
│   ├── renderer.ts      # User interface logic and event handling
│   ├── index.html       # HTML structure for the GUI
│   └── data
│       └── newsData.json # Stores news content in JSON format
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Documentation for the project
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd my-gui-news-app
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   To start the application, use:
   ```bash
   npm start
   ```

## Usage Guidelines
- Open the application to access the GUI.
- Fill in the fields for the news title, summary, date, and image URLs.
- Click the "Submit" button to add the news item.
- The news content will be automatically saved to `newsData.json`.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.