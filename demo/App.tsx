import { useState, useEffect } from 'react'
import { ShellCommand, AutoUis, GettingStarted, NextLogo, ReactLogo, TypeScriptLogo, TailwindLogo, ViteLogo, ServiceStackLogo } from '../src'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 py-12 px-4 transition-colors">
      <div className="mx-auto space-y-8">
        {/* Header with Dark Mode Toggle */}
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            React Tailwind Components Demo
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
        {/* logos */}
        <div className="flex justify-center space-x-4">
          <NextLogo className="size-12 text-black" />
          <ReactLogo className="size-12" />
          <TypeScriptLogo className="size-12" />
          <TailwindLogo className="size-12" />
          <ViteLogo className="size-12" />
          <ServiceStackLogo className="size-12" />
        </div>

        {/* Getting Started */}
        <GettingStarted template="react-static" className="mx-auto" />

        {/* ShellCommand Examples */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">ShellCommand</h2>
          <ShellCommand>npm install @react-net-templates</ShellCommand>
          <ShellCommand className="my-4">npx create-net react-static MyProject</ShellCommand>
        </div>

        {/* AutoUis Carousel */}
        <div className="max-w-7xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">AutoUis</h2>
          <AutoUis />
        </div>
      </div>
    </div>
  )
}

export default App

