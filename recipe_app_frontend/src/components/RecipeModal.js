import React from 'react';
import { oceanTheme } from '../theme';

// PUBLIC_INTERFACE
/**
 * Modal for displaying detailed recipe info.
 * @param {Object} recipe
 * @param {Function} onClose
 */
function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${recipe.title} details`}
      tabIndex={-1}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(17,24,39,0.43)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: oceanTheme.colors.surface,
          minWidth: 320,
          maxWidth: 540,
          width: '90%',
          borderRadius: oceanTheme.cardRadius,
          padding: '2.4rem 1.6rem 1.2rem 1.6rem',
          boxShadow: '0 4px 32px rgba(37,99,235,0.19), 0 2px 10px rgba(245,158,11,0.09)',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          aria-label="Close Recipe Details"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 17,
            right: 10,
            background: 'transparent',
            border: 'none',
            fontSize: 28,
            cursor: 'pointer',
            color: oceanTheme.colors.primary,
            zIndex: 100
          }}
        >×</button>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: '100%',
            maxHeight: 230,
            objectFit: 'cover',
            borderRadius: 13,
            marginBottom: 18,
            boxShadow: '0 1.5px 10px rgba(37,99,235,0.06)'
          }}
        />
        <div style={{
          fontWeight: 800,
          fontSize: '1.33rem',
          color: oceanTheme.colors.text,
          marginBottom: 7
        }}>
          {recipe.title}
        </div>
        <div style={{
          color: oceanTheme.colors.secondary,
          fontWeight: 500,
          fontSize: '1rem',
          marginBottom: 15
        }}>
          {recipe.category}
        </div>
        <div>
          <strong>Ingredients</strong>
          <ul style={{
            margin: '7px 0 13px 16px',
            color: '#1857b3'
          }}>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <strong>Steps</strong>
          <ol style={{
            color: oceanTheme.colors.text,
            margin: '7px 0 0 18px'
          }}>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
