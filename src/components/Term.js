import React, { useState, useEffect, forwardRef } from 'react';
import Note from './Note';

function Term({ word, symbol }, ref) {
  const [isHovered, setHovered] = useState(false);
  const [currentTerm, setCurrentTerm] = useState('');
  const [currentSymbol, setCurrentSymbol] = useState('');

  useEffect(() => {
    if (ref.current && word) {
      ref.current[word].addEventListener('mouseover', handleMouseover);
      ref.current[word].addEventListener('mouseout', handleMouseout);

      return () => {
        ref.current[word].removeEventListener('mouseover', handleMouseover);
        ref.current[word].removeEventListener('mouseout', handleMouseout);
      };
    }
  }, [ref.current, word]);

  const handleMouseover = () => {
    setHovered(true);
    setCurrentTerm(word);
    setCurrentSymbol(symbol);
  };
  
  const handleMouseout = () => {
    setHovered(false);
    setCurrentTerm('');
    setCurrentSymbol('');
  };

  return (
    <>
      <span ref={(elem) => (ref.current[word] = elem)} className="term">
        {word}
      </span>
      {isHovered ? <Note word={currentTerm} symbol={currentSymbol} /> : null}
    </>
  );
}

const forwarded = forwardRef(Term);
export default forwarded;
