import Head from "next/head";
import { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";
import BrandBox from "../components/BrandBox";
import CityBox from "../components/CityBox";

const client = new w3cwebsocket("ws://city-ws.herokuapp.com");

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.onopen = () => {
      console.log("connected!");
    };
    client.onmessage = ({ data }) => setData(JSON.parse(data));
  });

  return (
    <div>
      <Head>
        <title>Air Quality Monitor</title>
      </Head>

      <main className="rounded-md">
        <div className="flex relative pl-10">
          <BrandBox />

          <div className="bg-gray-200 flex-1 p-10 ">
            <div className="flex flex-wrap">
              {data.map(({ city, aqi }, index) => (
                <CityBox key={index} title={city} aqi={aqi.toFixed(2)} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
