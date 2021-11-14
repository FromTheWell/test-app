describe("Tabla", () => {
  before(() => {
    cy.log("Iniciando test de integración de la tabla...");
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/");
    cy.wait(10000);
  });

  it("Hace una búsqueda de un elemento", () => {
    // prueba de escritura en el input
    cy.get(".mat-icon").click();
    cy.get("#search-input").type("ad").should("have.value", "ad");
  });

  it("Hace una búsqueda que devuelve 0 elementos", () => {
    // prueba de escritura en el input
    cy.get(".mat-icon").click();
    cy.get("#search-input").type("prueba");
  });

  it("Hacer scroll hasta abajo", () => {
    // prueba de escritura en el input

    cy.get(".grid-content").scrollTo("bottom", { duration: 4000 });
  });
});
