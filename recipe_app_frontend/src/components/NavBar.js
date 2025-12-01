import React from 'react';
import { oceanTheme } from '../theme';

// PUBLIC_INTERFACE
/**
 * Responsive top navigation bar for Recipe Explorer.
 *
 * @param {string} title - Application title
 */
function NavBar({ title }) {
  return (
    <nav
      style={{
        width: '100%',
        background: oceanTheme.colors.surface,
        borderBottom: `1.5px solid ${oceanTheme.colors.border}`,
        boxShadow: oceanTheme.colors.shadow,
        padding: '0.7rem 0',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 20
      }}
      aria-label="Main navigation"
    >
      <div style={{
        marginLeft: '2rem',
        fontWeight: 800,
        fontSize: '1.45rem',
        color: oceanTheme.colors.primary,
        fontFamily: "'Segoe UI', 'Roboto', Arial, sans-serif"
      }}>
        {title}
      </div>
    </nav>
  );
}

export default NavBar;
