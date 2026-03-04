import { useEffect, useState } from "react"
import "../assets/css/elements/status.css"

export default function Status() {
  // hidden par défaut pour éviter un bref flash sur les pages sans #home
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const target = document.getElementById("home")
    if (!target) {
      // si la section #home n'existe pas (autres pages), on cache le status
      setHidden(true)
      return
    }

    // Masque le status quand on quitte la section #home en tenant compte
    // d'une barre sticky en haut (offset en px)
    const stickyTop = 92
    // fraction de la section visible en dessous de laquelle on considère
    // qu'elle est quittée. Augmenter pour disparaître plus tôt (ex: 0.15)
    const VISIBILITY_THRESHOLD = .9
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // quand #home intersecte la viewport à plus de VISIBILITY_THRESHOLD
          // => afficher (hidden = false), sinon cacher (hidden = true)
          setHidden(!entry.isIntersecting || entry.intersectionRatio < VISIBILITY_THRESHOLD)
        })
      },
      { root: null, threshold: VISIBILITY_THRESHOLD, rootMargin: `-${stickyTop}px 0px 0px 0px` }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={"status" + (hidden ? " status-hidden" : "") } aria-hidden={hidden}>
      <span className="status-dot open"></span>
      <span className="status-text">À la recherche d'une alternance (dès septembre 2026) en informatique !</span>
    </div>
  )
}