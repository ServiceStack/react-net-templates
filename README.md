# react-net-templates

Shared React Tailwind Components for [react-templates.net](https://react-templates.net) project templates.

## Installation

```bash
npm install react-net-templates
```

## Usage

Import components and styles in your React application:

```tsx
import { GettingStarted, ShellCommand, AutoUis } from 'react-net-templates'
import 'react-net-templates/styles.css'
```

## Components

### GettingStarted

A complete project creation widget with template download and CLI instructions.

```tsx
import { GettingStarted, ReactLogo } from 'react-net-templates'

<GettingStarted
  template="react-spa"
  templateName="React SPA"
  runLabel="Run .NET and React"
  logo={<ReactLogo className="size-12" />}
/>
```

### ShellCommand

A styled shell command display with copy-to-clipboard functionality.

```tsx
import { ShellCommand } from 'react-net-templates'

<ShellCommand>npm install react-net-templates</ShellCommand>
```

### AutoUis

An image carousel showcasing ServiceStack's built-in Auto UIs including API Explorer, Locode, Admin UI, and more.

```tsx
import { AutoUis } from 'react-net-templates'

<AutoUis className="my-8" />
```

### Logo Components

SVG logo components for common technologies:

- `NextLogo` - Next.js logo
- `ReactLogo` - React logo
- `TypeScriptLogo` - TypeScript logo
- `TailwindLogo` - Tailwind CSS logo
- `ViteLogo` - Vite logo
- `ServiceStackLogo` - ServiceStack logo

```tsx
import { ReactLogo, TailwindLogo, TypeScriptLogo } from 'react-net-templates'

<ReactLogo className="size-12 text-blue-500" />
<TailwindLogo className="size-12" />
<TypeScriptLogo className="size-12" />
```

## Development

```bash
# Install dependencies
npm install

# Run development server with demo
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Type check
npm run type-check
```

## Peer Dependencies

- React 18.x or 19.x
- React DOM 18.x or 19.x

## License

BSD-3-Clause
