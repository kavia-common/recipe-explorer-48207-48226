import React, { useState, useMemo, useEffect } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import { oceanTheme } from './theme';
import { getApiBaseUrl, getPlaceholderRecipes } from './data/utils';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Fetch recipes—if no API, use placeholder
  useEffect(() => {
    async function fetchRecipes() {
      const apiBase = getApiBaseUrl();
      // If no API, use placeholder
      if (!apiBase) {
        setRecipes(getPlaceholderRecipes());
        return;
      }
      try {
        const resp = await fetch(`${apiBase}/recipes`);
        if (!resp.ok) throw new Error('Bad Response');
        const data = await resp.json();
        setRecipes(Array.isArray(data) ? data : getPlaceholderRecipes());
      } catch {
        setRecipes(getPlaceholderRecipes());
      }
    }
    fetchRecipes();
  }, []);

  // Client-side recipe filtering
  const filteredRecipes = useMemo(() =>
    recipes.filter(r =>
      r.title.toLowerCase().includes(search.trim().toLowerCase()) ||
      (r.category && r.category.toLowerCase().includes(search.trim().toLowerCase()))
    ), [recipes, search]
  );

  // Shadow/gradient for main background, apply global Ocean Professional theme
  useEffect(() => {
    document.body.style.background = oceanTheme.colors.background;
    document.body.style.color = oceanTheme.colors.text;
    document.body.style.fontFamily = "Roboto, 'Segoe UI', Arial, sans-serif";
  }, []);

  // PUBLIC_INTERFACE
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        background: oceanTheme.colors.background,
        color: oceanTheme.colors.text,
        fontFamily: "Roboto, 'Segoe UI', Arial, sans-serif"
      }}
    >
      <NavBar title="Recipe Explorer" />
      <div style={{
        width: '100%',
        background: oceanTheme.colors.gradient,
        boxShadow: oceanTheme.colors.shadow,
        padding: '0 0 1.5rem 0',
        transition: oceanTheme.transition
      }}>
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <main style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '0 0 3.5rem 0',
        transition: oceanTheme.transition
      }}>
        <RecipeGrid recipes={filteredRecipes} onSelect={setSelectedRecipe} />
      </main>
      {selectedRecipe &&
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      }
    </div>
  );
}

export default App;
