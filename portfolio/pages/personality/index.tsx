import React from "react";
import Head from "next/head";
import FootBar from "../../components/FootBar";
import Layout from "@/components/Layout";
import { personality } from "@/libs/codes";

const Personality = () => {
  return (
    <div className="bg-[#1e1e1e]">
      <Head>
        <title>Zarif</title>
        <meta name="description" content="About Zarif" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout code={personality}>
        <div className=" text-gray-200 text-sm mt-12">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at
        </div>
      </Layout>

      <FootBar />
    </div>
  );
};

export default Personality;
