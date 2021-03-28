# Air Quality Monitor
A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  

AQM is a single-page [web application](https://air-quality-monitor-pt.herokuapp.com/) to display live air quality monitoring data of a few cities in India.

## Motivation
I built this project as an assignment for a job interview. Did I get it? Well, I will let you know ;)
 
## Screenshots
> Linked to full size images :)

<a href="./samples/home.png">
  <img align="center" src="./samples/home.png" width="45%" />
</a>

<a href="./samples/modal.png">
  <img align="center" src="./samples/modal.png" width="45%" />
</a>

## Techs
**Built with**
- ReactJS + NextJs

**Dependencies**
|Library|Description|
|-|-|
|[react-apexcharts](https://apexcharts.com/docs/react-charts/)|Generate and show AQI history as line graph|
|[clsx](https://github.com/lukeed/clsx#readme)|Easy naming classes|
|[react-awesome-modal](https://github.com/shibe97/react-awesome-modal)|Show single city in a pop-up modal|
|[react-time-ago](https://gitlab.com/catamphetamine/react-time-ago#readme)|Show time as text like *few seconds ago*|
|[sass](https://github.com/sass/node-sass)|Easy writing css classes|
|websocket|Connect and listen to *city-ws* web socket|
  
  
**DevDependencies**
|Library|Description|
|-|-|
|[tailwind](https://tailwindcss.com/)|CSS utils library for quick designing|


## Features
- Real-time Updates
- Simple UI
- Fully responsive
- Neat Graphs
- Color based status

## Installation
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits
- WS: wss://city-ws.herokuapp.com | Test [here](https://www.websocket.org/echo.html)
