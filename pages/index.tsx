import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import React from "react";
import CardList from "../components/Card/CardList";
import config from "../config";

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>Friends</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CardList list={config} />
  </Layout>
);

export default Home;
