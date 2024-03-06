import React from "react";
import styles from "./Footerr.module.css";
import techgicus from "../../Assets/tech_logof.png";
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
  
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.textSection}>
          <div>
            <img src={techgicus} alt="Logo" className={styles.logoImage} />
          </div>
          <p>Top Learning Experience that Creates More Talent in the World</p>
          <p className={styles.text}>
            Address: 12 Mitra vihar, near shivshankar lawn, Nagpur, Maharashtra,
            India 440034
          </p>
        </div>
        <div className={styles.subFooter}>
          <div className={styles.productSection}>
            <h3>Products</h3>
            <ul>
              <li>Learning</li>
              <li>Features</li>
            </ul>
          </div>
          <div className={styles.companySection}>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Our services</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={styles.socialSection}>
            <h3>Social</h3>
            <ul>
              <li>Instragram</li>
              <li>LinkedIn</li>
              <li>Github</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className={styles.legalSection}>
            <h3>Legal</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
       
        <div className={styles.footerLogos}>
          <i>
            <FaLinkedin />
          </i>
          <i>
            <FaGithub />
          </i>
          <i>
            <FaInstagram />
          </i>
          <i>
            <FaFacebook />
          </i>
        </div>
        <div className={styles.copyrightSection}>
          <p>© 2023 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
