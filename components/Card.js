import Image from "next/image";

import Cardstyles from "../styles/Card.module.css";

export default function Card({ picture, caption, title, description, doodle }) {
  return (
    <div className={`${Cardstyles.flipContainer} ${Cardstyles.first}`}>
      <div className={Cardstyles.flipper}>
        <div className={Cardstyles.front}>
          <Image src={picture} alt={caption} width={1000} height={700} />
          <h2 className={Cardstyles.frontTitle}>{title}</h2>
          <h3 className={Cardstyles.caption}>{caption}</h3>
        </div>
        <div className={Cardstyles.back}>
          <div className={Cardstyles.doodle}>
        <Image src={doodle} alt={caption} width={200} height={200} />
        </div>
          <h3 className={Cardstyles.backTitle}>{title}</h3>
          <p className={Cardstyles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
