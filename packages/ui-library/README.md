# UI Library (`@etraveli/ui-library`)

The **UI Library** is a reusable component library built for the `Etraveli` project. This library contains modular,
reusable, and themeable components to ensure consistent design and functionality across different applications.

---

## Table of Contents

1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Development](#development)
6. [Testing](#testing)
7. [Contributing](#contributing)

---

## Overview

The **UI Library** provides the building blocks for application-level layouts, widgets, and visual elements. It
includes:

- Predefined reusable components (e.g., buttons, modals, forms, typography).
- Customization capabilities to enable theming and flexibility.
- Fully documented components using **Storybook** for easy previewing and integration.

---

## Folder Structure

```plaintext
ui-library/
├── lib/
│   ├── components/       # Core UI components
│   ├── styles/           # Shared styles (e.g., variable definitions, mixins)
│   ├── utils/            # Helper functions
│   └── index.ts          # Export entry point
│
├── __test__/             # Unit tests for components
├── .storybook/           # Configuration for Storybook
├── stories/              # Stories 
├── dist/                 # Distribution folder (generated after build)
├── package.json          # Configuration specific to this library
└── README.md             # Documentation for the library
```

---

## Installation

To install the `@etraveli/ui-library` package in your project:

**Using pnpm:**

```bash
pnpm add @etraveli/ui-library
```

**Using npm:**

```bash
npm install @etraveli/ui-library --save
```

**Using yarn:**

```bash
yarn add @etraveli/ui-library
```

---

## Usage

Once installed, you can integrate the components from the UI library into your project. Below is an example:

### Example

```tsx
import React from 'react';
import {Button} from '@etraveli/ui-library';

const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the App!</h1>
            <Button onClick={() => alert('Hello!')}>Click Me</Button>
        </div>
    );
};

export default App;
```

### Theming and Customization

The UI Library allows you to customize themes and styles globally. You can override variables in your project to match
your design system. Check the **Storybook** documentation for more details.

---

## Development

If you want to make changes to the library locally, here’s how to set up the development environment:

### Step 1: Navigate to the `packages/ui-library` directory

```bash
cd packages/ui-library
```

### Step 2: Install Dependencies

Ensure you have Rush and pnpm installed globally. Then run:

```bash
rush update
```

### Step 3: Run Storybook

Start the Storybook server to preview and develop components in isolation:

```bash
pnpm dev
```

This will open the Storybook interface in your default browser. You can view and test the components visually.

---

## Testing

All components are thoroughly unit tested using **Vitest**. To run unit tests for the UI library:

```bash
pnpm test
```

Test cases are located in the `tests/` directory, covering the key functionality of each component.

---

## Contributing

Contributions to the UI library are welcome! Please follow the guidelines to ensure consistency and maintainability.

### Guidelines

1. **Fork and Clone the Repository**
   ```bash
   git clone https://github.com/narenpatil11/starwar-universe.git
   cd starwar-universe
   ```

2. **Create a New Branch**
   ```bash
   git checkout -b feature/my-feature
   ```

3. **Make Changes**
    - Add or modify components inside the `src` directory.
    - Write tests for new or modified components in the `tests` directory.
    - Update or add documentation (both in Storybook and this README if needed).

4. **Run Tests**
   ```bash
   pnpm test
   ```

5. **Submit a Pull Request**
   Push your changes and open a pull request to the main repository.

---

### Additional Resources

- **Storybook Documentation**: Fully interactive component documentation is available in Storybook.
- For support, open an issue in the GitHub repository.

---
