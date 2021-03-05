/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
	address: "0.0.0.0",	
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-Dynamic-Modules",
		},
		{
        		module: 'MMM-Remote-Control',
        		// uncomment the following line to show the URL of the remote control on the mirror
        	 	//position: 'bottom_left',
        		// you can hide this module afterwards from the remote control itself
        		config: {
            		apiKey: '17eb14172fef4181b6eaf84b5bddf614'
        	}
    		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "San Marcos",
				locationID: "5392368", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "3208ffd4dc704a52d1eafb6947ab1114",
				units: "imperial"
				
			}
		},
		{
			module: "MMM-Traffic",
			position: "top_left",
			config: {
				accessToken: "pk.eyJ1IjoiaW1oYWxmYmxhY2siLCJhIjoiY2tsdm9tdzQ2MTA3MjJubzVyMGxoN2dwdSJ9.KWyS9yEk8ExXVrxWkxKzcQ",
				originCoords: "-117.1820333442633,33.16113710330957",
				destinationCoords: "-117.19808785960664,33.13353530839873",
				firstLine: "{duration} mins",
				secondLine: "Work"
				}
		},	
		{
			  module: "MMM-NowPlayingOnSpotify",
			  position: "bottom_left",
  			  config: {
    			clientID: "0d15a85a71864e88becd674ac5acfb97",
    			clientSecret: "eea19f8763854b768dc2b674cbdbed4f",
    			accessToken: "BQBZlpJEE_HqVQOPdSSObPZJOgfAVIZyxrpMGBbL-ZihZbVJJP2BZw4BZObdbqXafDYrMOaMKo5dMarPJh9hPCyMFLufLHKyt83mBWz2ce6EU9jelKlpr4-3XNZ2XLYOm31tDC-yPr6MqYW7tjF7AaHaQQ",
    			refreshToken: "AQDDce__4-u_RNYy1bXVMxLMhrlchSnjcx328QQ8r9mEZYpN-HzlQV8S5mHeWUOSIr5rS0bTXtWgD9f3Sd7SvQmYnK4ZH41bzBR8eBuRj5w18707QCF1ux8hYjYxn6dlkCI"
  		}
		},
		{
			module: "weatherforecast",
			position: "bottom_right",
			header: "Weather Forecast",
			config: {
				location: "San Marcos",
				locationID: "5392368", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "3208ffd4dc704a52d1eafb6947ab1114",
				units: "imperial"
				
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
