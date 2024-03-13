package com.weatherapp.tom.nelson;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000") // Allow requests from http://localhost:3000
@RestController
public class Controller {

    final String uri = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}";
    final String api = "[REPLACE STRING WITH YOUR API KEY FROM OPENWEATHER.ORG]";

    @GetMapping(path = "/weather")
    public String findWeather(@RequestParam String city) {

        String apiUrl = uri.replace("{city}", city).replace("{apiKey}", api);

        RestTemplate restTemplate = new RestTemplate();

        try {
            String result = restTemplate.getForObject(apiUrl, String.class);

            if (result != null && !result.isEmpty()) {
                return result;
            } else {
                return "No data available";
            }
        } catch (Exception  e) {
            e.printStackTrace();
            return "No data available!!!";
        }
    }

}
