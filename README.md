# Star War Universe Project

This repository contains a project architecture that includes multiple packages, such as
`@etraveli/starwar-universe-app` and `@etraveli/ui-library`. With the ability to build, test, and develop specific
packages independently, it provides a scalable and modular structure.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Prerequisites](#prerequisites)
6. [Installation](#installation)
7. [Running the Application](#running-the-application)
8. [Scripts](#scripts)
9. [Testing](#testing)
10. [Contributing](#contributing)
11. [License](#license)

---

## Overview

This project includes:

- A functional app called `Starwar Universe App` which likely focuses on Star Wars-related data and components.
- A shared `UI Library` for reusable UI components that ensures design consistency across the app.

Both sub-packages are developed using a modular structure and can be managed independently with the help of `pnpm`
workspaces.

---

## Features

- **Modular Design**: Independent packages for the app (`@etraveli/starwar-universe-app`) and UI library (
  `@etraveli/ui-library`).
- **Reusable UI Components**: UI library (
  `@etraveli/ui-library`) of reusable and extendable UI components.
- **Efficient Development Environment**: Parallel package development using `pnpm` workspaces.
- **Testing Support**: Individual test environments for both the app and the library.
- **Storybook Integration** (for the `UI Library`): Enables development and visualization of UI components in isolation.

---

## Technologies Used

- **RushJs**: A scalable monorepo manager for the web.
- **React**: Frontend JavaScript library.
- **TypeScript**: Type safety for JavaScript code.
- **Pnpm**: Monorepo package management.
- **Vitest**: For running tests.
- **Storybook**: For visual testing and isolating UI components.
- **Vite**: For lightweight builds and fast development.

---

## Folder Structure

The repository is structured into logical packages for modularity and scalability:

```plaintext
project/
├── packages/
│   ├── starwar-universe-app/  # Main App
│   │   ├── src/               # Source code
│   │   ├── tests/             # Unit tests for the app
│   │   └── package.json
│   │
│   ├── ui-library/            # Reusable UI Library
│   │   ├── src/               # Component library source files
│   │   ├── tests/             # Unit tests for the UI library
│   │   ├── .storybook/        # Storybook configuration
│   │   └── package.json
│   │
│   └── ...
└── package.json               # Monorepo package.json
```

---

## Prerequisites

Before starting, make sure the following tools are installed on your system:

1. **Install pnpm**: Ensure that the latest `pnpm` version is installed.
   ```bash
   npm install -g pnpm@8.15.6
   ```

2. **Install Rush**: Rush is used for managing monorepo tasks.
   ```bash
   npm install -g @microsoft/rush
   ```

You can verify your installations using:

```bash
pnpm --version
rush --version
```

---

## Installation

After ensuring the prerequisites are met:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/narenpatil11/starwar-universe.git
   cd starwar-universe
   ```

2. **Install dependencies** using `rush`:
   ```bash
   rush update
   ```

This will set up all required dependencies across packages.

---

## Running the Application

To run specific packages:

1. **Starwar Universe App in development mode**:
   ```bash
   pnpm dev:app
   ```

2. **UI Library Storybook**:
   ```bash
   pnpm dev:lib
   ```

---

## Scripts

The `package.json` contains key scripts to manage the workspace packages:

| **Command** | **Functionality**                                           |
|-------------|-------------------------------------------------------------|
| `dev:app`   | Runs the development server for the `Starwar Universe App`. |
| `dev:lib`   | Starts Storybook for the `UI Library` package.              |
| `test:app`  | Runs tests for the `Starwar Universe App`.                  |
| `test:lib`  | Runs tests for the `UI Library`.                            |
| `build:lib` | Builds the `UI Library`.                                    |
| `build:app` | Builds the `Starwar Universe App`.                          |

To execute scripts, use:

```bash
pnpm <script_name>
```

For example:

```bash
pnpm test:app
```

---

## Testing

Testing is supported across all packages using **Vitest**. Each package has its own test suite.

### Running Tests:

1. Run tests for the app:
   ```bash
   pnpm test:app
   ```

2. Run tests for the UI library:
   ```bash
   pnpm test:lib
   ```

The test files are located in the `__tests__` directories of each respective package.

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature details"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## Creator

This project is created By Narendra Patil

---
