import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { func } from 'joi';
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";

export default function HomepageFeatures() {
  //alert("Hello, I am currently improving performance, images are not present, except in the printable section of the chassis")
  return (
    <div>
      <div className="container margin-vert--xs" style={{ margin: '0px 2.5%', maxWidth: '95%' }}>
        <div className="row">
          <Tester />
          <div className="col col--8" >
            <div className="text--center">
              <div style={{ textAlign: 'center' }}><img src={require("/static/media/Logos/Everybot118.webp").default}></img></div>
              <br></br>
              <h1>Welcome to the Everybot Documentation Site</h1>
              <br>
              </br>
              <p>For the 2025 FRC manual use the <a href="https://robonauts-everybot.github.io/Everybot-Docs/manual/the-everybot">2025 Everybot Documentation Tab</a></p>
              <p>For a translated version please see our <a href="https://docs.google.com/document/d/10iMX5CHhDT6XGOxzTSVr5Q2kzvpQWDvjO8g7mc4HeaM/edit?tab=t.0">Google Doc version</a></p>
              <br></br><br></br><br></br><br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tester() {
  const [test, setText] = useState("Error");

  useEffect(() => {
    blogs();
  }, [])

  const blogs = async () => {
    const response = await fetch('https://robonauts-everybot.github.io/Everybot-Docs/blog/feed.json');
    let text = await response.json();
    setText(text.items);
  }

  //getText();

  if (test == "Error") {
    return <aside className="col col--2"></aside>
  }

  let firstBlog = "/Everybot-Docs" + test[0].id.match(/\/blog\/.*/);
  let secondBlog = "/Everybot-Docs" + test[1].id.match(/\/blog\/.*/);
  let thirdBlog = "/Everybot-Docs" + test[2].id.match(/\/blog\/.*/);

  return (
    <aside className="col col--2"><nav className="sidebar_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module thin-scrollbar" aria-label="Blog recent posts navigation" style={{
      top: "calc(var(--ifm-navbar-height) + 2rem)", position: "sticky", maxHeight: "calc(100vh - (var(--ifm-navbar-height) + 2rem))", overflowY: "auto"
    }}><h3 className={styles.updates}>Recent Updates</h3><ul className="sidebarItemList_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module clean-list"><li className="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module" style={{ margin: "0px 0" }}><a className={styles.details} href={firstBlog}>{test[0].title}</a></li><br /><li className="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module" style={{ margin: "0px 0" }}><a className={styles.details} href={secondBlog}>{test[1].title}</a></li><br /><li className="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module" style={{ margin: "0px 0" }}><a className={styles.details} href={thirdBlog}>{test[2].title}</a></li></ul></nav></aside >
  );
}

//let test;