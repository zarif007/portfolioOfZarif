import Head from "next/head";
import FootBar from "@/components/FootBar";
import Layout from "@/components/Layout";
import { useRecoilState } from "recoil";
import { StatusState } from "@/atoms/StatusStateAtom";
import { Router } from "next/router";
import "simplebar-react/dist/simplebar.min.css";
import { aboutZarif } from "@/libs/codes";
import AboutZarif from "@/components/AboutZarif.Page";
import PersonalityPage from "@/components/Personality.Page";

export default function Home() {
  const [status, setStatus] = useRecoilState(StatusState);

  Router.events.on("routeChangeStart", () => setStatus("Redirecting"));
  Router.events.on("routeChangeError", () =>
    setInterval(() => setStatus("Redirected"), 1500)
  );
  Router.events.on("routeChangeComplete", () =>
    setInterval(() => setStatus("Redirected"), 1500)
  );

  return (
    <div className="bg-[#1e1e1e]">
      <Head>
        <title>Zarif</title>
        <meta name="description" content="About Zarif" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout code={aboutZarif}>
        <AboutZarif />
        <PersonalityPage />
      </Layout>

      <FootBar />
    </div>
  );
}
