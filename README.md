# Interactive 3D Earth Simulation

This project features a photorealistic and interactive 3D Earth simulation built using Three.js, complemented by a 2D Leaflet.js map for navigation. It's designed as a technical demonstration and an educational tool to visualize geographical data in a compelling way.

## Features

-   **Interactive 3D Earth:** Explore a detailed 3D model of Earth with day/night cycles, clouds, and atmospheric effects.
-   **Dynamic Lighting:** Real-time adjustment of night lights based on the sun's position.
-   **Starfield Background:** A vast, immersive starfield surrounding the Earth.
-   **Integrated 2D Map (Leaflet.js):** A small, interactive 2D map displaying geographical markers.
-   **Seamless Navigation:** Click on markers in the 2D map to smoothly fly the 3D camera to the corresponding location on the globe.
-   **Post-processing Effects:** Utilizes Three.js post-processing for enhanced visual quality (e.g., bloom).
-   **Automated Testing:** Unit tests for core utility functions using Jest.
-   **Continuous Integration:** GitHub Actions workflow to automatically run tests on every push and pull request.

## Technologies Used

-   **Three.js:** For 3D rendering and scene management.
-   **Leaflet.js:** For the interactive 2D map.
-   **JavaScript (ES Modules):** Core logic and interactivity.
-   **HTML5 & CSS3:** Structure and styling.
-   **Jest:** JavaScript testing framework.
-   **Babel:** JavaScript compiler for ES Module compatibility in testing.
-   **GitHub Actions:** For Continuous Integration (CI).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

-   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GamesDotdev/TestRepo.git
    cd TestRepo
    ```

2.  **Install Node.js dependencies:**
    This project uses `npm` to manage development dependencies (like Jest and Babel).
    ```bash
    npm install
    ```

## Running the Application

To view the 3D Earth simulation, you need to serve the `photorealistic_earth.html` file using a local web server. Directly opening the HTML file from your file system (`file://` protocol) can lead to issues with module imports and resource loading due to browser security restrictions (CORS).

### Recommended Method: Using a Local Web Server

1.  **Install `http-server` (if you don't have it):**
    ```bash
    npm install -g http-server
    ```
    (You might need `sudo` on macOS/Linux or run your terminal as Administrator on Windows for global installation).

2.  **Start the server from the project root directory:**
    ```bash
    http-server .
    ```

3.  **Open in your browser:**
    The server will typically start on `http://localhost:8080`. Open your web browser and navigate to `http://localhost:8080/photorealistic_earth.html`.

### Alternative Method (Less Recommended for Development):

If you prefer not to use a local server, you can try opening `photorealistic_earth.html` directly in your browser. However, be aware that this might cause issues, especially with module imports. Some browsers might require specific security settings to allow local file access.

## Debugging the "Black Screen" Issue

If you see a black screen or the simulation doesn't load correctly, it's likely due to JavaScript errors or resources failing to load. Here's how to debug:

1.  **Open Developer Tools:**
    -   **Chrome/Edge/Firefox:** Right-click anywhere on the page and select "Inspect" or "Inspect Element", then go to the "Console" tab.
    -   **Safari:** Enable the "Develop" menu in Safari Preferences > Advanced, then go to Develop > Show JavaScript Console.

2.  **Check the Console for Errors:**
    -   Look for red error messages. These will often tell you which file and line number the error occurred on. Common errors include:
        -   `Failed to load module script`: Indicates an issue with ES module imports (often resolved by using a local web server).
        -   `Uncaught ReferenceError`: A variable or function was used before it was defined.
        -   `CORS policy`: Cross-Origin Resource Sharing issues, typically when loading textures or GeoJSON data from different domains without proper headers (less likely for this project, but possible if external resources change).

3.  **Check the Network Tab:**
    -   In Developer Tools, go to the "Network" tab.
    -   Reload the page.
    -   Look for any resources (textures, scripts, GeoJSON data) that failed to load (indicated by red text or a failed status code).

## Running Tests

To run the unit tests for the project, use the following command:

```bash
npm test
```

This will execute the Jest tests defined in the `__tests__` directory.

## Continuous Integration (CI)

This project uses GitHub Actions for CI. Whenever you push code to the `dev` or `master` branch, or create a pull request, the workflow defined in `.github/workflows/ci.yml` will automatically:

1.  Check out the code.
2.  Set up Node.js.
3.  Install dependencies using `npm ci` (ensuring consistent installations).
4.  Run the Jest tests.

You can view the status of these runs in the "Actions" tab of your GitHub repository. This helps ensure that new changes don't break existing functionality.
