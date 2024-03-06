import React from "react";
import styles from "./MobileApplication.module.css";
import swift from "../../Assets/swiftt.png";
import coco from "../../Assets/CoCoapods.png";
import realm from "../../Assets/oldrealm.png";
import object from "../../Assets/objective-c.png";
import android from "../../Assets/androidst.png";
import Kotlin from "../../Assets/kotlin.png";
import codex from "../../Assets/codex.png";
import core from "../../Assets/Datacore.png";
import firebase from "../../Assets/firebase.png";
import Gradle from "../../Assets/cgradle.png";


const technologies = {
  ios: [
    { name: "Swift", src: swift, alt: "Swift Logo" },
    { name: "CocoaPods", src: coco, alt: "Coco Logo" },
    { name: "Realm", src: realm, alt: "Real Logo" },
    { name: "Objective-C", src: object, alt: "Objective Logo" },
    { name: "Xcode", src: codex, alt: "Xcode Logo" },
    { name: "CoreData", src: core, alt: "CoreData" },
  ],
  android: [
    { name: "Kotlin", src: Kotlin, alt: "Android Kotlin Logo" },
    { name: "Android Studio", src: android, alt: "Android  Logo" },
    { name: "Firebase", src: firebase, alt: "firebase" },
    { name: "Gradle", src: Gradle, alt: "gradle" },
  ],
};


function Card() {
  return (
    <div className={styles.app}>
      <h1>Mobile App Development</h1>
      <h2>choose our plan</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>Ios Development</h3>
          {technologies.ios.map((tech, index) => (
            <div className={styles.logo} key={index}>
              <img src={tech.src} alt={tech.alt} />
              <p>{tech.name}</p>
            </div>
          ))}

        </div>
        <hr className={styles.line} />
        <div className={styles.card}>
          <h3>Mobile Development</h3>
          {technologies.android.map((tech, index) => (
            <div className={styles.logo} key={index}>
              <img src={tech.src} alt={tech.alt} />
              <p>{tech.name}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;




