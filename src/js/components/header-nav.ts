export class HeaderNav extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    this.innerHTML = `
    <style>
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0a0a23;
      height: 4rem;
      padding: 0.25rem;
    }

    ul {
      display: flex;
      padding: 0;
      list-style: none;
    }
    
    a {
      margin: 0 25px;
      font-weight: 700;
      text-decoration: none;
      color: #FFF;
    }
    
    a:visited {
      color: #FFF
    }

    a:hover {
      color: yellow;
      padding-bottom: 0.5rem;
    }
  </style>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="data.html">Data</a></li>
          <li><a href="visualization.html">Visualization</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </nav>
    `;
  };
};

// customElements.define('header-nav', HeaderNav);
