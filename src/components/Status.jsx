import { useEffect, useState } from "react"
import "../assets/css/elements/status.css"

export default function Status() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const target = document.getElementById("skills")
    if (!target) return

    // trigger when the top of #works crosses the sticky top (64px)
    const stickyTop = 92
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHidden(true)
          } else {
            setHidden(false)
          }
        })
      },
      { root: null, threshold: 0, rootMargin: `-${stickyTop}px 0px 0px 0px` }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={"status" + (hidden ? " status-hidden" : "") } aria-hidden={hidden}>
      <span className="status-dot open"></span>
      <span className="status-text">À la recherche d'un stage de 3 mois en informatique !</span>
    </div>
  )
}