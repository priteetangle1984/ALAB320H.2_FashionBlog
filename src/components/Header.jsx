import React from 'react';


// Header component
function Header() {
  return (
    <header>
      <h1><a href="index.html">Sartre’s List</a></h1>
      <h2>Better-Dressed People</h2>
      <nav>
        <ul aria-label="Main Navigation" role="navigation">
          <li><a href="#">Women’s</a></li>
          <li><a href="#">Men’s</a></li>
          <li><a href="#">On the Street</a></li>
          <li><a href="#">The Catwalk</a></li>
          <li><a href="#">AdWatch</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;