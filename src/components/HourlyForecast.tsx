
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HourlyData {
  time: string;
  temp: number;
  condition: string;
  icon: any;
}

interface HourlyForecastProps {
  data: HourlyData[];
}

const HourlyForecast = ({ data }: HourlyForecastProps) => {
  return (
    <div className="mb-8">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Hourly Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full">
            <div className="flex space-x-4 pb-4">
              {data.map((hour, index) => {
                const WeatherIcon = hour.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white/10 p-4 rounded-lg text-center min-w-[100px] hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-blue-200 text-sm mb-2">{hour.time}</div>
                    <div className="mb-2">
                      <WeatherIcon className="h-6 w-6 text-white mx-auto" />
                    </div>
                    <div className="text-white font-semibold">{hour.temp}°</div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default HourlyForecast;
