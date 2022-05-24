export class HeaderNav extends HTMLElement {
    constructor() {
        super();
    }
    ;
    async connectedCallback() {
        this.innerHTML = `
      <style>
        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0F0F0F;
          padding: 0.25rem;
          height: 4rem;
        }

        ul {
          display: flex;
          list-style: none;
          padding: 0;
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
          <li><a href="/data">Data</a></li>
          <li><a href="/systems">Systems</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    `;
    }
    ;
}
;
