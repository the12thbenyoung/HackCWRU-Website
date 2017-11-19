import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import Scroll, {Link, Element} from 'react-scroll'
let scroller = Scroll.scroller;
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_question_answer } from 'react-icons-kit/md/ic_question_answer';
import {ic_person} from 'react-icons-kit/md/ic_person';

import styles from './Navbar.scss';
import globals from "stylesheets/globals.scss";

export default class Navbar extends React.Component {
  //specify the base color/background of the parent container if needed
  render(){
    return(
      <div className = {styles.navbar}>
          <SideNav
            highlightBgColor='#8EEEFF'
            highlightColor='black'
            onItemSelection={ (id, parent) =>
              {
                scroller.scrollTo(this.props.sections.find(section => section.text === id).sectionID,
                {
                  duration: 800,
                  delay: 0,
                }
                );
              }
            }
          >
            {this.props.sections.map((section) =>
                <Nav id={section.text} key={section.sectionID}>
                  <NavText> {section.text} </NavText>
                </Nav>
            )}
          </SideNav>
      </div>
    )
  }
}
