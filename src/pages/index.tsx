/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Dashboard from '@src/containers/Dashboard'
import Head from 'next/head'
import React from 'react'

const description = 'Developer, who makes service and experiences. Still fighting with Refractory Chronic Diseases.'

export default function Index () {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no"/>
      <title>Profile of Haze Lee</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Profile of Haze Lee" />
      <meta property="og:site_name" content="Profile of Haze Lee" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="http://mingdongobba.com/opengraph_thumbnail.png" />
      <meta property="og:url" content="http://mingdongobba.com" />
    </Head>
    <Dashboard />
  </>
}
