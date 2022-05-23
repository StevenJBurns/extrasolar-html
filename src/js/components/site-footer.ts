export class SiteFooter extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    this.innerHTML = `
      <style>
        h4 {
          padding: 2rem;
          text-align: center;
          background-color: #0F0F0F;
          color: #D0D0D0
        }
      </style>
      <section>
        <h4>\u00A9 ${new Date().getFullYear()} Steven J Burns</h4>
      </section>
    `;
  };
};
