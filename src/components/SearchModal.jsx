import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { searchIndex } from "../data/searchIndex";
import "./SearchModal.css";

function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchIndex.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const descMatch = item.description.toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
      return titleMatch || descMatch || keywordMatch;
    });

    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="search-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search NectarShell..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="search-results">
          {query.trim() && results.length === 0 && (
            <div className="search-no-results">
              No results found for "{query}"
            </div>
          )}

          {results.length > 0 && (
            <ul className="search-results-list">
              {results.map((result, index) => (
                <li key={index}>
                  <Link to={result.path} className="search-result-item" onClick={onClose}>
                    <span className="search-result-title">{result.title}</span>
                    <span className="search-result-desc">{result.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          
          {!query.trim() && (
            <div className="search-suggestions">
              <h3>Popular Searches</h3>
              <div className="search-tags">
                <button onClick={() => setQuery("Web Development")}>Web Development</button>
                <button onClick={() => setQuery("Payroll")}>Payroll Services</button>
                <button onClick={() => setQuery("Careers")}>Careers</button>
                <button onClick={() => setQuery("Cloud")}>Cloud Solutions</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
