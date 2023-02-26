import LandingPageLayout from 'components/layouts/LandingPageLayout/LandingPageLayout';
import React from 'react';
import Bubbles from './components/Bubbles/Bubbles'
import Contact from './components/Contact/Contact';
import MainPage from './components/MainPage/MainPage';

function Content() {
  return (
    <LandingPageLayout title="Noktos TotalPlay">
      <div style={{margin:"30px 0"}}>

        <MainPage />
        <Bubbles />
        <Contact />
      </div>
        {/* <div>Contet</div> */}
    </LandingPageLayout>
  )
}

export default Content