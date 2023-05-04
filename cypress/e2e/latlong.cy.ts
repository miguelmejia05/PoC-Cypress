import { LandingPage } from "../pages/index";
import places from '../fixtures/places.json';

const landingPage = new LandingPage();
//The coordinates for the cities are probably not right because i got the max daily quota from the page so i had to search them on google
const cities = places.cities

describe("Check coordinates", () => {
    cities.forEach((city) => {
        it("Should provide the right coordinates from a place with its given name", () => {
            landingPage.visitLandingPage();
            landingPage.getCoordinates(city.placeName);
            landingPage.checkCoordinates(city.latitude, city.longitude);
        });
    });
});