# Express EJS Boilerplate

This is a boilerplate project for building web applications using Express and EJS.

## Features

- **Express.js**: A minimal and flexible Node.js web application framework.
- **EJS**: Embedded JavaScript templating.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **Basic Project Structure**: Organized and ready to use.
- **Sample Routes, Controllers, Middlewares and Views**: Pre-configured examples to get you started quickly.

## Prerequisites

- **Bun.js**: Ensure you have Bun.js installed. You can download it from [bun.sh](https://bun.sh/).
- **npm**: Node package manager, which comes with Node.js.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/KeiAxiro/express-ejs-boilerplate.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd express-ejs-boilerplate
   ```
3. **Install dependencies**:
   ```sh
   bun install
   ```

## Usage

1. **Start the development server**:
   ```sh
   bun start
   ```
2. **Open your browser** and visit `http://localhost:3000` to see the application in action.

## Project Structure

```
express-ejs-boilerplate/
├── contollers/               # Controller definitions
├── middlewares/              # Middleware definitions
├── prisma/                   # Prisma schema and migrations
├── public/                   # Static files (CSS, JS, images)
├── routes/                   # Route definitions
│   └── api/                  # Api defitiions
│       └── indexApi.js       # Sample main API
│   └── index.js              # Sample main route
├── views/                    # EJS templates
│   └── index.ejs             # Main view
├── app.js                    # Main application file
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Prisma](https://www.prisma.io/)
