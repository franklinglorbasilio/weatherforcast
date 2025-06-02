
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ForecastProps {
  forecast: {
    day: string;
    high: number;
    low: number;
    condition: string;
    icon: any;
    precipitation: number;
  };
}

const ForecastCard = ({ forecast }: ForecastProps) => {
  const WeatherIcon = forecast.icon;

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
      <CardContent className="p-4 text-center">
        <div className="text-white font-semibold mb-2">{forecast.day}</div>
        <div className="mb-3">
          <WeatherIcon className="h-8 w-8 text-white mx-auto" />
        </div>
        <div className="text-white text-sm mb-2">{forecast.condition}</div>
        <div className="flex justify-between text-white text-sm mb-2">
          <span className="font-semibold">{forecast.high}°</span>
          <span className="text-blue-200">{forecast.low}°</span>
        </div>
        {forecast.precipitation > 0 && (
          <Badge variant="secondary" className="bg-blue-600/50 text-white text-xs">
            {forecast.precipitation}% rain
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
