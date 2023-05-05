class LandingPage {

  private placeNameTextBox: string;
  private latitudeTextBox: string;
  private longitudeTextBox: string;
  private latLongLabel : string;
  private gpsLatitudeLabel : string;
  private gpsLongitudeLabel : string;
  private findButton: string;

  constructor() {
    this.placeNameTextBox = "#place";
    this.latitudeTextBox = "#lat";
    this.longitudeTextBox = "#lng";
    this.latLongLabel = "#latlngspan";
    this.gpsLatitudeLabel = "#dms-lat";
    this.gpsLongitudeLabel = "#dms-lng";
    this.findButton = "#btnfind";
  }

  public visitLandingPage(): void {
    cy.visit("");
  }

  public getCoordinates(placeName: string): void {
    //My apologies for implementing this, i wanted to wait for a specific request but it contained an unhandled exception, so i ignored just once for the purpose of this test
    cy.once('uncaught:exception', () => false);
    cy.get(this.placeNameTextBox).should('be.visible');
    cy.get(this.placeNameTextBox).focus();
    cy.get(this.placeNameTextBox).type(placeName);
    cy.intercept(/\/reload\?/).as('reload');
    cy.get(this.findButton).click();
  }

  public checkCoordinates(latitude: string, longitude : string): void {
    cy.wait('@reload');
    cy.get(this.latitudeTextBox).should('have.value', latitude);
    cy.get(this.longitudeTextBox).should('have.value', longitude);
  }
}

export { LandingPage };