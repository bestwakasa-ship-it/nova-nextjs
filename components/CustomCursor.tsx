'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current; const follower = followerRef.current
    if (!cursor || !follower) return
    let mx = 0, my = 0, fx = 0, fy = 0, rafId: number
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx - 4 + 'px'; cursor.style.top = my - 4 + 'px'
    }
    const animate = () => {
      fx += (mx - fx - 16) * 0.15; fy += (my - fy - 16) * 0.15
      follower.style.left = fx + 'px'; follower.style.top = fy + 'px'
      rafId = requestAnimationFrame(animate)
    }
    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(3)'; follower.style.opacity = '0' })
      el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)'; follower.style.opacity = '1' })
    })
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId) }
  }, [])

  return (<><div className="cursor" ref={cursorRef} /><div className="cursor-follower" ref={followerRef} /></>)
}
