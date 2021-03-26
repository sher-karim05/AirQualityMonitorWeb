import Head from "next/head";
import BrandBox from "../components/BrandBox";
import CityBox from "../components/CityBox";

export default function Home() {
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
              <CityBox title="Mumbai" aqi={172.56} />
              <CityBox title="Mumbai" aqi={172.56} />
              <CityBox title="Mumbai" aqi={172.56} />
              <CityBox title="Mumbai" aqi={172.56} />
              <CityBox title="Mumbai" aqi={172.56} />
              <CityBox title="Mumbai" aqi={172.56} />
              <CityBox title="Mumbai" aqi={172.56} />
              <CityBox title="Mumbai" aqi={172.56} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
