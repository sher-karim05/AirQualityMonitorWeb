import Head from "next/head";
import CardContainer from "../containers/CardContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Air Quality Monitor</title>
      </Head>

      <main className="bg-white rounded-md">
        <div className="w-1/3">
          <CardContainer className="bg-primary rounded-t-none rounded-bl-none rounded-br-lg text-white p-10 pt-3 pl-3">
            <div className="text-4xl">
              Air Quality
              <br /> Monitor
            </div>
          </CardContainer>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}
