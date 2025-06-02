
import { useState, useEffect } from "react";
import { Search, MapPin, Thermometer, Wind, Eye, Droplets, Sun, Cloud, CloudRain, CloudSnow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WeatherMap from "@/components/WeatherMap";
import ForecastCard from "@/components/ForecastCard";
import HourlyForecast from "@/components/HourlyForecast";
import WeatherAlerts from "@/components/WeatherAlerts";

const Index = () => {
  const [currentLocation, setCurrentLocation] = useState("New York, NY");
  const [searchLocation, setSearchLocation] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock weather data - in a real app, this would come from a weather API
  const currentWeather = {
    temperature: 72,
    condition: "Partly Cloudy",
    icon: Cloud,
    humidity: 65,
    windSpeed: 8,
    visibility: 10,
    uvIndex: 6,
    feelsLike: 75,
    pressure: 30.15
  };

  const forecast = [
    { day: "Today", high: 78, low: 62, condition: "Partly Cloudy", icon: Cloud, precipitation: 10 },
    { day: "Tomorrow", high: 82, low: 65, condition: "Sunny", icon: Sun, precipitation: 0 },
    { day: "Wednesday", high: 75, low: 58, condition: "Rainy", icon: CloudRain, precipitation: 80 },
    { day: "Thursday", high: 68, low: 52, condition: "Thunderstorms", icon: Zap, precipitation: 90 },
    { day: "Friday", high: 71, low: 55, condition: "Snow", icon: CloudSnow, precipitation: 70 }
  ];

  const hourlyData = [
    { time: "12 PM", temp: 72, condition: "Partly Cloudy", icon: Cloud },
    { time: "1 PM", temp: 74, condition: "Partly Cloudy", icon: Cloud },
    { time: "2 PM", temp: 76, condition: "Sunny", icon: Sun },
    { time: "3 PM", temp: 78, condition: "Sunny", icon: Sun },
    { time: "4 PM", temp: 77, condition: "Partly Cloudy", icon: Cloud },
    { time: "5 PM", temp: 75, condition: "Cloudy", icon: Cloud }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    if (searchLocation.trim()) {
      setCurrentLocation(searchLocation);
      setSearchLocation("");
    }
  };

  const WeatherIcon = currentWeather.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">WeatherCast Pro</h1>
                <p className="text-blue-100">Professional Weather Broadcasting</p>
              </div>
            </div>
            <div className="text-right text-white">
              <div className="text-2xl font-bold">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="text-blue-100">
                {currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-white" />
                <div className="flex-1 flex space-x-2">
                  <Input
                    placeholder="Search for a city..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                  />
                  <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weather Alerts */}
        <WeatherAlerts />

        {/* Main Weather Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Current Weather */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{currentLocation}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-6xl font-bold text-white mb-2">
                      {currentWeather.temperature}°F
                    </div>
                    <div className="text-xl text-blue-100">{currentWeather.condition}</div>
                    <div className="text-blue-200">Feels like {currentWeather.feelsLike}°F</div>
                  </div>
                  <div className="text-white">
                    <WeatherIcon className="h-24 w-24" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Droplets className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-200 text-sm">Humidity</span>
                    </div>
                    <div className="text-white font-semibold">{currentWeather.humidity}%</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Wind className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-200 text-sm">Wind</span>
                    </div>
                    <div className="text-white font-semibold">{currentWeather.windSpeed} mph</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Eye className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-200 text-sm">Visibility</span>
                    </div>
                    <div className="text-white font-semibold">{currentWeather.visibility} mi</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Sun className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-200 text-sm">UV Index</span>
                    </div>
                    <div className="text-white font-semibold">{currentWeather.uvIndex}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Today's Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Air Pressure</span>
                  <span className="text-white font-semibold">{currentWeather.pressure} in</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Sunrise</span>
                  <span className="text-white font-semibold">6:42 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Sunset</span>
                  <span className="text-white font-semibold">7:28 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Moonrise</span>
                  <span className="text-white font-semibold">8:15 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hourly Forecast */}
        <HourlyForecast data={hourlyData} />

        {/* 5-Day Forecast */}
        <div className="mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">5-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {forecast.map((day, index) => (
                  <ForecastCard key={index} forecast={day} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weather Map */}
        <WeatherMap />
      </div>
    </div>
  );
};

export default Index;
