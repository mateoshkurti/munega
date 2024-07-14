import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeadlineCards from '../components/HeadlineCards'
import TopRated from '../components/TopRated'
import Category from '../components/Category'

export function HOME() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <TopRated />
        <Category />
    </div>
  );
}


