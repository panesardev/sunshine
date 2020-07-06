export interface CurrentWeatherData {
	coord: { 
		lon: number, 
		lat: number 
	};
	weather: [{ 
		id: number, 
		main: string, 
		description: string, 
		icon: string 
	}];
	base: string;
	main: { 
		temp: number, 
		feels_like: number, 
		temp_min: number, 
		temp_max: number, 
		pressure: number, 
		humidity: number
	};
	wind: { 
		speed: number, 
		deg: number ,
		gust: number
	};
	clouds: {
		all: number
	};
	dt: bigint;
	sys: {
		type: number,
		id: number,
		message: string,
		country: string,
		sunrise: bigint,
		sunset: bigint
	};
	timezone: number;
	id: bigint;
	name: string;
	cod: number;
}