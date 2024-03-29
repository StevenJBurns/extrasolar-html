export class LoadingSpinner extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    this.innerHTML = `
      <style></style>
      <section>
        <h4>spinner</h4>
      </section>
    `;
  };
};