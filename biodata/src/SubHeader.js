import React, { Component } from "react";
import fotobcg from "./image/IMG_9902.JPG";
import fotoku from "./image/_MG_0864.JPG";
import fb from "./image/fb.png";
import twitter from "./image/twitter.png";
import ig from "./image/ig.png";
import youtube from "./image/youtube.png";

class SubHeader extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <img src={fotobcg} weight="650" height="650" />
        </div>

        <section id="About" class="about">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-4">
              <br />
              <br />
              <br />
              <br />
              <img src={fotoku} weight="500" height="500" />
            </div>
            <div className="col-4 text-md-left">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>
                <font face="Blenda Script" size="7">
                  About Me
                </font>
              </h1>
              <br />
              <p>
                <font face="Bernard MT Condensed" size="3"></font>AFIFAH
                MILLATINA NUGRAHENI
                <br />
                afifahnugraheni5@gmail
              </p>
              <br />
              <br />
              <br />
              <p>
                <font face="Adobe Garamond Pro Bold">
                  Hallo!!!
                  <br /> Saya biasa di panggil Afifah. <br />
                  Dari kelas TI-3G, jurusan D4-Tenkik Informatika, program studi
                  Teknologi Informasi.
                </font>
              </p>
              <br />
              <br />
              <br />
              <a href="https://www.facebook.com/afifah.m.nh">
                <img src={fb} weight="40" height="40" />
              </a>
              <a href="https://twitter.com/afifhmn">
                <img src={twitter} weight="50" height="50" />
              </a>
              <a href="https://www.instagram.com/afifhmn/">
                <img src={ig} weight="40" height="40" />
              </a>
              <a href="https://www.youtube.com/channel/UC8ld1ojTLjHow3k3t0WQFyg?view_as=subscriber">
                <img src={youtube} weight="30" height="35" />
              </a>
              <br />
              <br />
              <br />
            </div>
            <div class="col-2"></div>

            <div className="footer">
              <p className="copy">
                <font face="Blenda Script">
                  --- Pemrograman Berbasis Framework ---
                </font>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SubHeader;
