document.addEventListener('DOMContentLoaded', function() {
    // Populate recent activities
    const activities = [
        "Planted 100 acres of corn - 2 days ago",
        "Applied fertilizer to soybean fields - 1 week ago",
        "Harvested 200 acres of wheat - 2 weeks ago",
        "Repaired irrigation system - 3 weeks ago",
        "Attended agricultural workshop - 1 month ago"
    ];

    const activityList = document.getElementById('activity-list');
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activityList.appendChild(li);
    });

    // Simulate weather forecast
    const weatherContainer = document.getElementById('weather-container');
    const weatherForecast = [
        { day: "Today", temp: "75°F", condition: "Sunny" },
        { day: "Tomorrow", temp: "72°F", condition: "Partly Cloudy" },
        { day: "Day 3", temp: "68°F", condition: "Chance of Rain" },
        { day: "Day 4", temp: "70°F", condition: "Sunny" },
        { day: "Day 5", temp: "73°F", condition: "Clear" }
    ];

    weatherForecast.forEach(forecast => {
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-item');
        forecastDiv.innerHTML = `
            <h3>${forecast.day}</h3>
            <p>${forecast.temp}</p>
            <p>${forecast.condition}</p>
        `;
        weatherContainer.appendChild(forecastDiv);
    });
});