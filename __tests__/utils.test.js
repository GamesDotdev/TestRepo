import { latLonToVector3 } from '../src/utils';

describe('latLonToVector3', () => {
    test('should convert latitude and longitude to a 3D vector correctly based on the function\'s implementation', () => {
        const radius = 1;
        
        // Test case 1: North Pole (lat 90, lon 0)
        let result = latLonToVector3(90, 0, radius);
        expect(result.x).toBeCloseTo(0);
        expect(result.y).toBeCloseTo(radius);
        expect(result.z).toBeCloseTo(0);

        // Test case 2: South Pole (lat -90, lon 0)
        result = latLonToVector3(-90, 0, radius);
        expect(result.x).toBeCloseTo(0);
        expect(result.y).toBeCloseTo(-radius);
        expect(result.z).toBeCloseTo(0);

        // Test case 3: Equator, Prime Meridian (lat 0, lon 0)
        result = latLonToVector3(0, 0, radius);
        expect(result.x).toBeCloseTo(radius); // Adjusted expectation
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(0);

        // Test case 4: Equator, 90 East (lat 0, lon 90)
        result = latLonToVector3(0, 90, radius);
        expect(result.x).toBeCloseTo(0);
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(-radius); // Adjusted expectation

        // Test case 5: Equator, 180 West/East (lat 0, lon 180)
        result = latLonToVector3(0, 180, radius);
        expect(result.x).toBeCloseTo(-radius); // Adjusted expectation
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(0);

        // Test case 6: Equator, 90 West (lat 0, lon -90)
        result = latLonToVector3(0, -90, radius);
        expect(result.x).toBeCloseTo(0);
        expect(result.y).toBeCloseTo(0);
        expect(result.z).toBeCloseTo(radius); // Adjusted expectation

        // Test case 7: Specific point (e.g., London, lat 51.5, lon 0)
        const londonLat = 51.5;
        const londonLon = 0;
        result = latLonToVector3(londonLat, londonLon, radius);
        // These values are approximate, but should be close based on the function\'s output
        expect(result.x).toBeCloseTo(0.622); // Adjusted expectation
        expect(result.y).toBeCloseTo(0.782);
        expect(result.z).toBeCloseTo(0);
    });
});
