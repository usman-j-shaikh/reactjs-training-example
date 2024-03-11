import React from 'react';

export default function Note({ word, symbol }) {
    const checkTerm = (term) => {
        switch (term) {
            case 'technology':
                return `Technology is the application of conceptual knowledge for achieving practical goals, especially in a reproducible way.`;
            case 'artificial intelligence':
                return `Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of living beings, primarily of humans.`;
            default:
                return null;
        }
    };

    return (
        <p className="note">
            <span className="note-title">
                {word} {symbol ? symbol : '-'}
            </span>
            <span>{checkTerm(word)}</span>
        </p>
    );
}
