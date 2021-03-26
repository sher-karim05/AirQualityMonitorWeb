import Head from "next/head";
import BrandBox from "../components/BrandBox";
import CityBox from "../components/CityBox";
import CardContainer from "../containers/CardContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Air Quality Monitor</title>
      </Head>

      <main className="rounded-md">
        <div className="flex relative pl-10">
          <BrandBox />

          <div className="bg-gray-200 flex-1 p-10 pl-20">
            <div className="flex flex-wrap">
              <CityBox title="Mumbai" />
              <CityBox title="Mumbai" />
              <CityBox title="Mumbai" />
              <CityBox title="Mumbai" />
              <CityBox title="Mumbai" />
              <CityBox title="Mumbai" />
              <CityBox title="Mumbai" />
              <CityBox title="Mumbai" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
