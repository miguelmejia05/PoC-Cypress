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
    cy.get(this.placeNameTextBox).type(placeName);
    cy.get(this.findButton).click();
  }
}

export { LandingPage };