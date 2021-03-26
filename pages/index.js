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
        <div id="background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div>
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
