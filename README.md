# Weather App

This is a simple weather application built with React.js. It fetches weather data from the OpenWeatherMap API and displays it to the user.

## Features

- Displays current weather information including temperature, humidity, and wind speed.
- Uses Axios for making HTTP requests.
- Uses React Router DOM for navigation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Install dependencies for the frontend:

   ```bash
   cd weather-app
   npm install
   ```

3. Get an API key from OpenWeatherMap:
   
   - Sign up or log in to your account on [OpenWeatherMap](https://openweathermap.org/).
   - Once logged in, go to the API keys section to generate a new API key.

4. Add your API key to the file in the backend file Controller.java

5. Start the frontend development server:

   ```bash
   npm start
   ```

6. Open http://localhost:3000 in your browser to view the app.

7. Start the backend server:

   - Make sure you have Java and Maven installed on your system.
   - Navigate to the `backend` directory in your project:

     ```bash
     cd backend
     ```

   - Build the Spring Boot application:

     ```bash
     mvn clean install
     ```

   - Run the Spring Boot application:

     ```bash
     mvn spring-boot:run
     ```

8. The backend server should now be running on http://localhost:8080.

## Dependencies

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start): Declarative routing for React applications.
- [Spring Boot](https://spring.io/projects/spring-boot): Framework for building Java-based applications.

## Usage

- Enter a location in the search bar to view the weather information for that location.
- The application will display the current temperature, humidity, and wind speed.
- You can navigate to different pages using the provided links.

## Credits

This application was created by Tom Nelson.