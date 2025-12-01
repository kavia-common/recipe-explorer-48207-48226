import React from 'react';
import { oceanTheme } from '../theme';

// PUBLIC_INTERFACE
/**
 * Search input for filtering recipes.
 * 
 * @param {string} value - Current search text
 * @param {function} onChange - Callback when input changes
 */
function SearchBar({ value, onChange }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0 1.5rem 0' }}>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Search recipes"
        placeholder="Search recipes..."
        style={{
          padding: '0.95rem 1.6rem',
          width: '100%',
          maxWidth: 430,
          fontSize: '1rem',
          border: `1.5px solid ${oceanTheme.colors.primary}`,
          borderRadius: oceanTheme.borderRadius,
          outline: 0,
          boxShadow: '0 1px 5px rgba(37,99,235,0.05)',
          color: oceanTheme.colors.text,
          backgroundColor: oceanTheme.colors.surface,
          transition: oceanTheme.transition
        }}
      />
    </div>
  );
}

export default SearchBar;
