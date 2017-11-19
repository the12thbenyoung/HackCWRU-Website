import Button from 'components/Button/Button.react';
import Header from 'components/Header/Header.react';
import Logo from 'components/Logo/Logo.react';
import Navbar from 'components/Navbar/Navbar.react';
import Section from 'components/Section/Section.react'
import React from 'react';
import styles from 'web/App.scss';
import Summary from 'components/Summary/Summary.react';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_question_answer } from 'react-icons-kit/md/ic_question_answer';
import {ic_person} from 'react-icons-kit/md/ic_person';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div className = {styles.navbar}>
          <Navbar
            sections = {[
              {
                text:"About",
                sectionID:"summary",
                icon:{ic_question_answer}
              },
              {
                text:"Registration",
                sectionID:"register",
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
            <Section
              scrollID="summary"
            />
            <div className={styles.summary}>
              <Header>February 16th - 18th</Header>
              <Summary />
            </div>
            <Section
              scrollID="register"
            />
            <div className={styles.callToActions}>
              <Button
               title="Register"
               externalLink="https://dashboard.hackry.io/register?hackathonId=NQZBtoIMDJ"
               color="darkBlue" />
              <Button
               title="Sponsor"
               externalLink="/sponsorship"
               color="red" />
            </div>
            <img src = "https://images.urbanoutfitters.com/is/image/UrbanOutfitters/30968168_001_s"
              height={700}
              style={{marginTop: 50, marginBottom: 50}}
            />

          </div>
        </div>
      </div>
    );
  }

}
