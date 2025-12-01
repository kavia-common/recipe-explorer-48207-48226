import React from 'react';
import { oceanTheme } from '../theme';

// PUBLIC_INTERFACE
/**
 * Card for displaying a recipe in grid/list.
 * @param {Object} recipe
 * @param {Function} onSelect
 */
function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      tabIndex={0}
      role="button"
      aria-pressed="false"
      aria-label={`View recipe: ${recipe.title}`}
      onClick={() => onSelect(recipe)}
      onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && onSelect(recipe)}
      style={{
        background: oceanTheme.colors.surface,
        borderRadius: oceanTheme.cardRadius,
        boxShadow: oceanTheme.colors.shadow,
        padding: '1.2rem',
        margin: '10px',
        minWidth: 225,
        maxWidth: 320,
        flex: '1 1 220px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        outline: `2px solid transparent`,
        border: `1.5px solid ${oceanTheme.colors.border}`,
        transition: oceanTheme.transition
      }}
      onMouseOver={e => (e.currentTarget.style.boxShadow = oceanTheme.colors.cardHover)}
      onMouseOut={e => (e.currentTarget.style.boxShadow = oceanTheme.colors.shadow)}
    >
      <div style={{
        height: 184,
        borderRadius: '13px',
        overflow: 'hidden',
        marginBottom: 16,
        background: oceanTheme.colors.background,
        boxShadow: '0 2px 10px rgba(37,99,235,0.07)'
      }}>
        <img
          src={recipe.image}
          alt={`${recipe.title} preview`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{
        fontSize: '1.13rem',
        fontWeight: 700,
        color: oceanTheme.colors.text,
        marginBottom: 6,
        wordBreak: 'break-all'
      }}>
        {recipe.title}
      </div>
      <div style={{
        color: oceanTheme.colors.secondary,
        fontWeight: 500,
        fontSize: '0.99rem'
      }}>
        {recipe.category}
      </div>
    </div>
  );
}

export default RecipeCard;
