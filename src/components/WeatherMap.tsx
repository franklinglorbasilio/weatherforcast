
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Layers, Satellite, Cloud, CloudRain, Zap } from "lucide-react";
import { useState } from "react";

const WeatherMap = () => {
  const [activeLayer, setActiveLayer] = useState("radar");

  const mapLayers = [
    { id: "radar", name: "Radar", icon: Cloud },
    { id: "satellite", name: "Satellite", icon: Satellite },
    { id: "precipitation", name: "Precipitation", icon: CloudRain },
    { id: "temperature", name: "Temperature", icon: Layers },
    { id: "storms", name: "Storms", icon: Zap }
  ];

  const weatherMarkers = [
    { city: "New York", temp: 72, condition: "Partly Cloudy", x: 60, y: 30 },
    { city: "Los Angeles", temp: 78, condition: "Sunny", x: 15, y: 65 },
    { city: "Chicago", temp: 68, condition: "Cloudy", x: 50, y: 35 },
    { city: "Miami", temp: 85, condition: "Thunderstorms", x: 75, y: 80 },
    { city: "Seattle", temp: 62, condition: "Rainy", x: 10, y: 15 }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Interactive Weather Map</span>
          </CardTitle>
          <div className="flex space-x-2">
            {mapLayers.map((layer) => {
              const LayerIcon = layer.icon;
              return (
                <Button
                  key={layer.id}
                  variant={activeLayer === layer.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveLayer(layer.id)}
                  className={`${
                    activeLayer === layer.id
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                  }`}
                >
                  <LayerIcon className="h-4 w-4 mr-1" />
                  {layer.name}
                </Button>
              );
            })}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg h-96 overflow-hidden">
          {/* Simulated map background */}
          <div className="absolute inset-0 opacity-50">
            <div className="w-full h-full bg-gradient-to-br from-green-800/30 to-blue-900/30"></div>
          </div>
          
          {/* Weather overlay based on active layer */}
          <div className="absolute inset-0">
            {activeLayer === "radar" && (
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/30 rounded-full blur-sm"></div>
                <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-500/40 rounded-full blur-sm"></div>
                <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-red-500/50 rounded-full blur-sm"></div>
              </div>
            )}
            {activeLayer === "precipitation" && (
              <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-500/40 rounded-full blur-md"></div>
                <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-purple-500/30 rounded-full blur-md"></div>
              </div>
            )}
          </div>

          {/* City markers */}
          {weatherMarkers.map((marker, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg group-hover:scale-110 transition-transform">
                <div className="text-center">
                  <div className="font-semibold text-gray-800 text-sm">{marker.city}</div>
                  <div className="text-blue-600 font-bold">{marker.temp}°</div>
                </div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Badge variant="secondary" className="text-xs whitespace-nowrap">
                  {marker.condition}
                </Badge>
              </div>
            </div>
          ))}

          {/* Map legend */}
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3">
            <div className="text-white text-sm font-semibold mb-2">
              {mapLayers.find(l => l.id === activeLayer)?.name} Layer
            </div>
            <div className="space-y-1 text-xs text-blue-200">
              {activeLayer === "radar" && (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Light</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Moderate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Heavy</span>
                  </div>
                </>
              )}
              {activeLayer === "temperature" && (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Cold</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Mild</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Hot</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherMap;
