'use client'
import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let animId: number
    let renderer: import('three').WebGLRenderer | null = null

    import('three').then(THREE => {
      const canvas = canvasRef.current; if (!canvas) return
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(window.innerWidth, window.innerHeight)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 5

      const N = 2000
      const geo = new THREE.BufferGeometry()
      const pos = new Float32Array(N * 3), col = new Float32Array(N * 3)
      for (let i = 0; i < N; i++) {
        const theta = Math.random() * Math.PI * 2, phi = Math.acos(2 * Math.random() - 1), r = 2 + Math.random() * 3
        pos[i*3] = r*Math.sin(phi)*Math.cos(theta); pos[i*3+1] = r*Math.sin(phi)*Math.sin(theta); pos[i*3+2] = r*Math.cos(phi)
        const t = Math.random(); col[i*3] = 0; col[i*3+1] = t*0.78+(1-t)*0.6; col[i*3+2] = t+(1-t)*0.8
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
      const mat = new THREE.PointsMaterial({ size: 0.015, vertexColors: true, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false })
      const particles = new THREE.Points(geo, mat)
      scene.add(particles)
      scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({ color: 0x003a4a, transparent: true, opacity: 0.15 })))

      const rings = [
        [2.5, 0.004, 0x00c8ff, 0.3, Math.PI/4, 0],
        [3.2, 0.003, 0x00ffb3, 0.2, Math.PI/3, Math.PI/6],
        [4.0, 0.002, 0x0080ff, 0.15, Math.PI/6, Math.PI/4],
      ].map(([r, tube, color, opacity, rx, ry]) => {
        const m = new THREE.Mesh(new THREE.TorusGeometry(r as number, tube as number, 16, 100), new THREE.MeshBasicMaterial({ color: color as number, transparent: true, opacity: opacity as number }))
        m.rotation.x = rx as number; m.rotation.y = ry as number; scene.add(m); return m
      })

      let mx = 0, my = 0
      const onMouse = (e: MouseEvent) => { mx = (e.clientX/window.innerWidth-0.5)*0.3; my = (e.clientY/window.innerHeight-0.5)*0.3 }
      window.addEventListener('mousemove', onMouse)
      const onResize = () => { camera.aspect = window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer?.setSize(window.innerWidth, window.innerHeight) }
      window.addEventListener('resize', onResize)

      let t = 0
      const tick = () => {
        animId = requestAnimationFrame(tick); t += 0.001
        particles.rotation.y = t*0.3+mx; particles.rotation.x = my*0.5
        rings[0].rotation.z = t*0.4; rings[1].rotation.z = -t*0.3; rings[2].rotation.z = t*0.2
        rings.forEach(r => { r.rotation.x += 0.001; r.rotation.y += 0.0005 })
        renderer!.render(scene, camera)
      }
      tick()

      return () => { window.removeEventListener('mousemove', onMouse); window.removeEventListener('resize', onResize) }
    })
    return () => { cancelAnimationFrame(animId); renderer?.dispose() }
  }, [])

  return <canvas ref={canvasRef} id="hero-canvas" />
}
