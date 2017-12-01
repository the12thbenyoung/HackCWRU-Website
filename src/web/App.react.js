import Button from 'components/Button/Button.react';
import Header from 'components/Header/Header.react';
import Logo from 'components/Logo/Logo.react';
import Navbar from 'components/Navbar/Navbar.react';
import React from 'react';
import styles from 'web/App.scss';
import Summary from 'components/Summary/Summary.react';
import Section from 'components/Section/Section.react.js'
import Event from 'components/Event/Event.react';
import Tracks from 'components/Tracks/Tracks.react';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {ic_aspect_ratio} from 'react-icons-kit/md/ic_aspect_ratio';
import {ic_question_answer} from 'react-icons-kit/md/ic_question_answer';
import {ic_person} from 'react-icons-kit/md/ic_person';

export default class App extends React.Component {

  render() {
    let isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };

    let test;
    if(isMobile.any()){
      test = <h1>"You are using a mobile device"</h1>
    }
    else {
      let test = <h1>"You are using a desktop/laptop"</h1>
    }
    return (
      <div>
      <div>
        {test}
      </div>
      <div className = {styles.navbar}>
        <Navbar
          sections = {[
            {
              text:"About",
              sectionID:"about",
              icon:{ic_person}
            },
            {
              text:"Registration",
              sectionID:"register",
              icon:{ic_person}
            },
            {
              text:"FAQs",
              sectionID:"faq",
              icon:{ic_person}
            },
            {
              text:"Event",
              sectionID:"event",
              icon:{ic_person}
            },
            {
              text:"Project Tracks",
              sectionID:"tracks",
              icon:{ic_person}
            }
          ]}
          />
      </div>
      <div className={styles.landingPageContent}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Section scrollID="about"/>
          <div className={styles.summary}>
            <Header>February 16th - 18th</Header>
            <Summary />
          </div>
          <Section scrollID="register"/>
          <div className={styles.callToActions}>
            <Button
             title="Register"
             externalLink="https://dashboard.hackry.io/register?hackathonId=NQZBtoIMDJ"
             color="darkBlue" />
            <Button
             title="Sponsor"
             externalLink="/sponsorship"
             color="red" />
            <div>
             <info/>
             <Section scrollID = "faq"/>
             <faq/>
           </div>
          </div>
          <Section scrollID="event"/>
          <div className={styles.event}>
            <Event
                name = {"HackCWRU V"}
                when = {"February 16-18, 2018"}
                where = {"Case Western Reserve University"}
                about = {"HackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation. Hosted at Case Western Reserve University, over 500 students will spend 36 hours bringing their imagination into the real world. Attendees will work with peers and mentors to create projects in one of six project tracks in the famous 7 story Sears Think[box] makerspace. Stay tuned for more on our track system! Don't be intimidated, however. You don't have to know what you are planning on doing to attend. If you are new to hackathons, we look forward to introducing you to a world of creation."}
             />
          </div>
          <Section scrollID="tracks"/>
          <div className={styles.tracks}>
            <h1>Project Tracks</h1>
            <Tracks
                title = {"Civic"}
                image = {<img src="/assets/track_civic.png" />}
                description = {"The Civic track looks at the all levels of connected devices, from local IoT networks to municipal systems and civic datasets. Create a new device for your smart home, or create something that benefits the community.  "} />
            <Tracks
                title = {"Healthcare"}
                image = {<img src="/assets/track_healthcare.png" />}
                description = {"The healthcare track enables hackers to tackle problems relating to medicine, healthcare, and public health. Whether it is using public health data to analyze population wellness or using mobile technology to improve patient quality of and access to care, there has never been a better opportunity to match engineering solutions with real healthcare problems. If your background is in medicine or public health, partner with an engineer and inform the science behind your project!"} />
            <Tracks
                title = {"Fintech"}
                image = {<img src="/assets/track_fin1.png" />}
                description = {"The Fintech track is for hackers interested in the market and marketplace. Create a tool to help people make better financial decisions, or make a new algorithm to dominate the stock markets. Or finally figure out what “blockchain” is and what you can do with it. If you have a background in finance, work with an engineer and tackle an interesting problem together! "} />
            <Tracks
                title = {"Maker"}
                image = {<img src="/assets/track_maker.png" />}
                description = {"The Maker track enables hackers to unleash their inner maker. Invent something new, or just tinker with a thing to make it do something different. The only requirement is that you Did It Yourself--with your team of 4, of course. "} />
          </div>
        </div>
      </div>
      </div>
    );
  }

}
