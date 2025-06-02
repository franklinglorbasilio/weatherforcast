
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info } from "lucide-react";

const WeatherAlerts = () => {
  const alerts = [
    {
      type: "warning",
      title: "Heat Advisory",
      description: "Excessive heat warning in effect until 8 PM today. Stay hydrated and avoid prolonged outdoor activities.",
      severity: "moderate",
      icon: AlertTriangle
    },
    {
      type: "info",
      title: "Air Quality Alert",
      description: "Moderate air quality conditions expected. Sensitive individuals should limit outdoor activities.",
      severity: "low",
      icon: Info
    }
  ];

  if (alerts.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="space-y-4">
        {alerts.map((alert, index) => {
          const AlertIcon = alert.icon;
          return (
            <Card
              key={index}
              className={`border-l-4 ${
                alert.type === "warning"
                  ? "border-l-yellow-400 bg-yellow-500/10"
                  : "border-l-blue-400 bg-blue-500/10"
              } backdrop-blur-md border-white/20`}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <AlertIcon
                    className={`h-5 w-5 mt-0.5 ${
                      alert.type === "warning" ? "text-yellow-400" : "text-blue-400"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-white font-semibold">{alert.title}</h3>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          alert.severity === "high"
                            ? "bg-red-600 text-white"
                            : alert.severity === "moderate"
                            ? "bg-yellow-600 text-white"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-blue-100 text-sm">{alert.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherAlerts;
