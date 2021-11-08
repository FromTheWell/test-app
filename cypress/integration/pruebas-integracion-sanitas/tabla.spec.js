describe('Tabla', () => {
    before(() => {
        cy.log('Iniciando test de integración de la tabla...');
    })

    beforeEach(() => {
        cy.visit('http://localhost:4200/');
    })

    it('Hace una búsqueda de un elemento', () => {
        // prueba de escritura en el input
        cy.get('.search-icon').click()
        cy.get('#search-input')
            .type('6184f33a8bcef262d35648c5').should('have.value', '6184f33a8bcef262d35648c5')
    })

    it('Hace una búsqueda que devuelve 0 elementos', () => {
        // prueba de escritura en el input
        cy.get('.search-icon').click()
        cy.get('#search-input').type('prueba')
        cy.get('.no-elements').contains('No existen elementos para la búsqueda realizada')
    })

    it('Modifica la paginación y muestra todos los elementos de la tabla', () => {
        // prueba de escritura en el input
        cy.get('.mat-select-arrow-wrapper').click()
        cy.get('#mat-select-0-panel').scrollTo('bottom', { duration: 2000 })
        cy.get('#mat-option-8').click()
        cy.get('.example-container').scrollTo('bottom', { duration: 10000 })
    })
});
