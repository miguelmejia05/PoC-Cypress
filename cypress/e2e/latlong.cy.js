describe("This is my first cypress test", () => {
    it("should have a title", () => {
        cy.visit("https://www.latlong.net/");
        cy.title().should("eq", "Latitude and Longitude Finder on Map Get Coordinates");
    });
});