import { LandingPage } from "../pages/index";
import places from '../fixtures/places.json';

const landingPage = new LandingPage();

describe("Check coordinates", () => {
    it("Should provide the right coordinates from a place with its given name", () => {
        landingPage.visitLandingPage();
        landingPage.getCoordinates(places.placeName1);
    });
});