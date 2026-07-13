import Banner from "@/components/Banner";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <section className="container py-3">
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 col-md-5 col-sm-6 col-12 mb-2">
            <div className={styles.sectionImgesSet}>
              <img className="img-fluid rounded-3" src="/assets/img/1 (1).png"></img>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6 col-12">
            <h2>Cranberry Roar Choco</h2>
            <p>A tangy cranberry jelly wrapped in silky milk chocolate, made for little dino lovers who like their treats with a wild, fruity kick. Bold, brave, and deliciously daring!</p>
          </div>
        </div>
      </section>
      <section className="container mb-3">
        <div className="row m-0 align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-6 col-12">
            <h2>Berry Chirpy Choco</h2>
            <p>Strawberry jelly meets mellow milk chocolate in this cheerful combo. As chirpy as your favourite sunshine chick—this treat brings a smile with every bite.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-end mb-2 d-flex justify-content-end align-items-center">
            <div className={`${styles.sectionImgesSet}`}>
              <img className="img-fluid rounded-3" src="/assets/img/3.png"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-3">
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
            <div className={styles.sectionImgesSet}>
              <img className="img-fluid rounded-3" src="/assets/img/4.png"></img>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 col-12">
            <h2>Currant Cuddle Choco</h2>
            <p>Blackcurrant jelly hugged by milk chocolate—rich, comforting, and oh-so-huggable. Just like a warm bear cuddle on a cozy day.</p>
          </div>
        </div>
      </section>
      <section className="container mb-3">
        <div className="row m-0 align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-6 col-12">
            <h2>Zesty Snap Choco</h2>
            <p>Bright orange jelly with a snap of zest, balanced perfectly with sweet milk chocolate. This croc’s got crunch, charm, and citrusy confidence.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-end mb-2 d-flex justify-content-end align-items-center">
            <div className={styles.sectionImgesSet}>
              <img className="img-fluid rounded-3" src="/assets/img/1a.png"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-3 ">
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-2">
            <div className={styles.sectionImgesSet}>
              <img className="img-fluid rounded-3" src="/assets/img/2.png"></img>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 col-12">
            <h2>Blueberry Hop Choco</h2>
            <p>Hop into happiness with sweet blueberry jelly tucked in smooth chocolate. A bunny’s favourite treat—soft, sweet, and berry bouncy.</p>
          </div>
        </div>
      </section>
      <section className="container-fulid py-3 overflow-hidden">
        <div className={`position-relative ${styles.customImgesHeghtSmall} `}>
          <img className="img-fluid" src="/assets/img/home-bottom.jpeg"></img>
          <div className={`pt-3 px-2 ${styles.postionHome}`}>
            <h4 className="fw-bold text-white py-3">Vegan Fruit Jelly Enrobed in Milk Chocolate</h4>
            <p className="fs-6 text-white">A tumble of joy in every bite! Each Tumble Treat starts with a juicy, vegan-friendly fruit jelly centre—bursting with bold fruit flavour—and is lovingly coated in creamy milk chocolate. Meet our adorable gang of flavour-packed buddies—each one as sweet, quirky, and choco-fruity as can be!</p>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
