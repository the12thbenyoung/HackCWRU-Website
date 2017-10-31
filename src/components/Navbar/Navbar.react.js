import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_question_answer } from 'react-icons-kit/md/ic_question_answer';
import {ic_person} from 'react-icons-kit/md/ic_person';

import styles from './Navbar.scss';

export default class Navbar extends React.Component {
  //specify the base color/background of the parent container if needed
  render(){
    return(
      <div className = {styles.navbar}>
          <SideNav highlightColor={styles.highlightColor} highlightBgColor={styles.highlightBgColor} defaultSelected={styles.defaultSelected}>
              <Nav id='info'>
                  <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
                  <NavText> Info </NavText>
              </Nav>
              <Nav id='faqs'>
                  <NavIcon><SvgIcon size={20} icon={ic_question_answer}/></NavIcon>
                  <NavText> FAQs </NavText>
              </Nav>
              <Nav id='event'>
                  <NavIcon><SvgIcon size={20} icon={ic_person}/></NavIcon>
                  <NavText> Event </NavText>
              </Nav>
          </SideNav>
      </div>
    )
  }
}
