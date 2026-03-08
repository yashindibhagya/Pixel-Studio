'use client'

import { useState, useEffect, useRef, createContext, useContext } from 'react'

type CursorContextType = {
  setHovered: (v: boolean) => void
}

const CursorContext = createContext<CursorContextType | null>(null)

export function useCursorHover() {
  const ctx = useContext(CursorContext)
  if (!ctx) return {}
  return {
    onMouseEnter: () => ctx.setHovered(true),
    onMouseLeave: () => ctx.setHovered(false),
  }
}

export function Cursor({ children }: { children: React.ReactNode }) {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const ringTarget = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      ringTarget.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animateRing = () => {
      ringPos.current.x += (ringTarget.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (ringTarget.current.y - ringPos.current.y) * 0.12
      setRing({ x: ringPos.current.x, y: ringPos.current.y })
      rafRef.current = requestAnimationFrame(animateRing)
    }
    rafRef.current = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const run = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }
    run()
    const id = setTimeout(run, 500)
    return () => {
      observer.disconnect()
      clearTimeout(id)
    }
  }, [])

  return (
    <CursorContext.Provider value={{ setHovered }}>
      <div
        className={`cursor ${hovered ? 'hovered' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden
      />
      <div className="cursor-ring" style={{ left: ring.x, top: ring.y }} aria-hidden />
      {children}
    </CursorContext.Provider>
  )
}
