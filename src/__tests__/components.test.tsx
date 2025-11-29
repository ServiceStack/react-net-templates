import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ShellCommand from '@/components/ShellCommand'
import GettingStarted from '@/components/GettingStarted'
import NextLogo from '@/components/NextLogo'
import ReactLogo from '@/components/ReactLogo'
import ViteLogo from '@/components/ViteLogo'
import TailwindLogo from '@/components/TailwindLogo'
import TypeScriptLogo from '@/components/TypeScriptLogo'
import ServiceStackLogo from '@/components/ServiceStackLogo'

describe('ShellCommand', () => {
  it('should render children as command text', () => {
    render(<ShellCommand>npm install</ShellCommand>)
    expect(screen.getByText('npm install')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <ShellCommand className="custom-class">test command</ShellCommand>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('should have a copy button', () => {
    render(<ShellCommand>npm test</ShellCommand>)
    expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument()
  })
})

describe('GettingStarted', () => {
  it('should render with default project name', () => {
    render(<GettingStarted template="nextjs" />)
    expect(screen.getByDisplayValue('MyProject')).toBeInTheDocument()
  })

  it('should display the template command', () => {
    render(<GettingStarted template="nextjs" />)
    expect(screen.getByText(/npx create-net nextjs/)).toBeInTheDocument()
  })

  it('should display custom template name', () => {
    render(<GettingStarted template="react-spa" templateName="React SPA" />)
    expect(screen.getByText('React SPA')).toBeInTheDocument()
  })

  it('should display custom run label', () => {
    render(<GettingStarted template="nextjs" runLabel="Start Development" />)
    expect(screen.getByText('Start Development')).toBeInTheDocument()
  })
})

describe('Logo Components', () => {
  it('should render NextLogo', () => {
    const { container } = render(<NextLogo className="test-class" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveClass('test-class')
  })

  it('should render ReactLogo', () => {
    const { container } = render(<ReactLogo className="test-class" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveClass('test-class')
  })

  it('should render ViteLogo', () => {
    const { container } = render(<ViteLogo className="test-class" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveClass('test-class')
  })

  it('should render TailwindLogo', () => {
    const { container } = render(<TailwindLogo className="test-class" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveClass('test-class')
  })

  it('should render TypeScriptLogo', () => {
    const { container } = render(<TypeScriptLogo className="test-class" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveClass('test-class')
  })

  it('should render ServiceStackLogo', () => {
    const { container } = render(<ServiceStackLogo className="test-class" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveClass('test-class')
  })
})

