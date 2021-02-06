import styles from "../styles/Common.module.css";
import Introstyles from "../styles/Intro.module.css";
import Winnerstyles from "../styles/PastWinners.module.css";
import Image from "next/image";
import Card from "../components/Card";

export default function PastWinners() {
  return (
    <main className={Winnerstyles.main}>
      <section>
        <h1 className={styles.title}>Past Winners</h1>
        <div className={Winnerstyles.grid}>
          <div className={Winnerstyles.cell}>
            <p className={Winnerstyles.text}>
              <b>Here are the 2019 BioHack Winners!</b> Hover over the polaroids
              to learn more about each project.
            </p>
          </div>
          <div className={Winnerstyles.cell}>
            <Card
              picture="/pastwinners/1.JPG"
              title="Remembrall"
              caption="Overall 1st Place"
              doodle="/pastwinners/website_brain_cropped_trans.png"
              description="Remembrall is a companion app that was created for those suffering from Alzheimer's and Dementia. Rememberall helps users remember important details of their life by using real time user entered data. The user can input their thoughts, memories, pictures and important information about themselves to aid throughout their daily lives."
            />
          </div>
          <div className={Winnerstyles.cell}>
            <Card
              picture="/pastwinners/2.JPG"
              title="Skancare"
              caption="Best Google Hack"
              doodle="/pastwinners/website_hand_cropped_trans.png"
              description="Skancare aims to bring awareness to skin ailments by utilizing machine learning to classify skin lesions. This program takes a close-up image of the skin and analyzes it to identify the lesion type. Skancare aims to make lesion diagnoses easier to identify."
            />
          </div>
          <div className={Winnerstyles.cell}>
            <Card
              picture="/pastwinners/3.JPG"
              title="Sleep-Stone Bridge"
              caption="Best Beginner Hack"
              doodle="/pastwinners/website_sun_cropped_trans.png"
              description="Sleep-Stone Bridge is a device that monitors the amount of excess light the user is exposed to. Excess light can cause a person’s regular 24-hour Circadian Rhythm to be disrupted and lead health risks such as lack of sleep. This project alerts the user with light sensors during evening hours to lower light levels to preserve the Circadian Rhythm."
            />
          </div>
          <div className={Winnerstyles.cell}>
            <Card
              picture="/pastwinners/4.JPG"
              title="EpiTech"
              caption="Best Hardware Hack"
              doodle="/pastwinners/website_check_cropped_trans.png"
              description="EpiTech is a device that monitors skin blemishes to accurately determine the effectiveness of the product you are using. It utilizes a micro spectrometer and cloud services to deliver real time data to patients andphysicians while, determining the effectiveness of your acne treatment."
            />
          </div>
          <div className={Winnerstyles.cell}>
            <Card
              picture="/pastwinners/5.JPG"
              title="Air Quality Index Map"
              caption="Best Humanitarian Hack"
              doodle="/pastwinners/website_cloud_cropped_trans.png"
              description="Air Quality Index Map allows environmentally conscious people to monitor current air quality indices (AQI) in their area. The AQI map displays the current air conditions for any location through Google Maps so that users may know the air quality of places they plan to visit."
            />
          </div>
          <div className={Winnerstyles.cell}>
            <Card
              picture="/pastwinners/6.JPG"
              title="Drowsy Drivers"
              caption="Best Startup"
              doodle="/pastwinners/website_car_cropped_trans.png"
              description="A novel system to promote safer driving habits through facial recognition and image analysis. The program detects user awareness through images taken of the driver's face. MATLAB then isolates the eyes in the photo and determines whether the user's eyes are open or closed. The program will then notify the user that their eyes are closed."
            />
          </div>
          <div className={Winnerstyles.cell}>
            <div className={Winnerstyles.phage}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
