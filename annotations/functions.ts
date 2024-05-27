const add = (a: number, b: number): number => a + b;

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const printOrThrow = (message: string): void => {
  if (!message) {
    throw new Error("Message is empty");
  }
  console.log(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
