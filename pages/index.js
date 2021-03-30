import Head from "next/head";
import { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";
import BrandBox from "../components/BrandBox";
import CityBox from "../components/CityBox";
import Loader from "../components/Loader";
import { updateCitiesArray } from "../utils";

const client = new w3cwebsocket("wss://city-ws.herokuapp.com");

export default function Home() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    client.onmessage = ({ data }) =>
      setCities(updateCitiesArray(cities, JSON.parse(data)));
  });

  const selectForCompare = (city) => {
    console.log("Er");
    cities.map((c) => {
      if (c.city == city) {
        c.selected = !c.selected;
      }
    });

    setCities(cities);
  };

  console.log(cities);

  return (
    <div>
      <Head>
        <title>Air Quality Monitor</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/logo.png"
        />
      </Head>

      <main className="rounded-md">
        <div className="md:flex relative pl-10">
          <BrandBox />

          <div className="bg-gray-200 flex-1 p-5 min-h-screen">
            {cities.length <= 0 ? (
              <Loader className="mt-10" />
            ) : (
              <div className="lg:flex flex-wrap">
                {cities.map((city, index) => (
                  <CityBox
                    key={index}
                    {...city}
                    selectForCompare={selectForCompare}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
