import React, { useState, useRef } from 'react';
import { Popover } from 'react-tiny-popover';
import '/src/assets/css/elements/wordpopover.css';

const WordPopover = ({ word, title, location, imageSrc }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Nouvel état pour gérer l'animation de sortie
  const timerRef = useRef(null); // Pour nettoyer le timeout si on revient vite sur le mot

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current); // Annule la fermeture si on revient
    setIsClosing(false);
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    // 1. On active l'état de fermeture (déclenche l'animation CSS .closing)
    setIsClosing(true);

    // 2. On attend 300ms (durée de l'animation) avant de retirer l'élément du DOM
    timerRef.current = setTimeout(() => {
      setIsPopoverOpen(false);
      setIsClosing(false);
    }, 300); 
  };

  const popoverContent = (
    // On ajoute dynamiquement la classe 'closing' si l'état isClosing est vrai
    <div 
      className={`popover-card ${isClosing ? 'closing' : ''}`}
      onMouseEnter={handleMouseEnter} // Permet de garder ouvert si on survole la popup elle-même
      onMouseLeave={handleMouseLeave}
    >
      <div className="popover-image-wrapper">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="popover-image" />
        ) : (
          <div className="popover-placeholder">Aperçu</div>
        )}
      </div>

      <div className="popover-info">
        <h4 className="popover-title">{title}</h4>
        <div className="popover-location-row">
          <span role="img" aria-label="location" className="popover-icon">📍</span>
          <span className="popover-location-text">{location}</span>
        </div>
      </div>
    </div>
  );

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['left', 'top', 'bottom', 'right']}
      padding={10}
      onClickOutside={handleMouseLeave}
      content={popoverContent}
      containerStyle={{ zIndex: '99999' }}
    >
      <span
        className="popover-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {word}
      </span>
    </Popover>
  );
};

export default WordPopover;