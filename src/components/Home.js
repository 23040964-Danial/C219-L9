import featImg from "../assets/img-main.jpg";

export default function Home() {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red30 Tech conference attendees on a laptop"
      />

      <h1>Welcome</h1>
      <p>
      Are you passionate about technology and eager to dive into the world of innovation? At RP School of Infocomm, we invite you to
      explore your hidden technical skills while nurturing your creative digital aspirations.
      </p>

      <p>We offer a diverse range of diploma
      programs designed to equip you with the knowledge and skills needed to thrive in today's fast-paced digital landscape.
      Whether you're interested in software development, data analytics, cybersecurity, or emerging technologies, we have something for
      everyone. Our experienced faculty and hands-on learning approach will empower you to tackle real-world challenges and prepare you
      for a successful career in infocomm.
      </p>

      <p>So, what are you waiting for? Explore our website now to find the course that best fits your ambitions and take the first
        step toward a rewarding career in infocomm! This version maintains an engaging tone while omitting specific program details. 
        If you need any further changes or additions, just let me know!
        </p>
      
    </div>
  );
}
