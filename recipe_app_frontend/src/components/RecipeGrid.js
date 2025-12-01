import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
/**
 * Responsive grid/list for recipes.
 * @param {Array} recipes
 * @param {Function} onSelect
 */
function RecipeGrid({ recipes, onSelect }) {
  if (!recipes || recipes.length === 0) {
    return (
      <div style={{
        color: '#999',
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: '1.1rem',
        margin: '2rem 0'
      }}>
        No recipes found.
      </div>
    );
  }
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px',
      width: '100%',
      padding: '0 1.6rem'
    }}>
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default RecipeGrid;
