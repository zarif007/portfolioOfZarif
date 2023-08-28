import React from "react";
import Head from "next/head";
import FootBar from "../../components/FootBar";
import Layout from "@/components/Layout";
import { personality, skillsTechnology } from "@/libs/codes";
import PersonalityPage from "@/components/Personality.Page";

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
        <div className="py-8">
          <PersonalityPage withDetails={true} />
        </div>
      </Layout>

      <FootBar />
    </div>
  );
};

export default Personality;
