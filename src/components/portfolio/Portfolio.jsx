import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Gadgets Store",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: " Successfully designed and implemented a fully functional e-commerce website using the MERN stack. Utilized TypeScript to enhance code readability, maintainability, and scalability, ensuring a robust and type-safe codebase throughout the project’s development lifecycle. Implemented efficient state management using Redux Toolkit and React Redux. Integrated Firebase authentication to secure user data and enable secure sign-up, login. Successfully integrated Stripe for payment processing, ensuring a smooth and secure online transaction experience for users.",
    link: "https://e-commerce-frontend-opal.vercel.app/",
  },
  {
    id: 2,
    title: "Video Streaming Web Application",
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Used React.js for front end part where used React Hooks to use states and lifecycle methods inside functional components. Utilized MongoDB to store and manage user profiles, video meta data and user generated content. Integrated Firebase to store videos and images uploaded by user. Used JWT to protect the routes where user authentication is necessary.",
    link: "https://youtubebackend.onrender.com/",
  },
  {
    id: 3,
    title: "Box Office Web Application",
    img: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: " A web application which helps user to search their favorite shows and actors. Designed multiple pages with different functions using React.js and used React-Router to navigate through pages with user-friendly flow when switching. Used TV MAZE API to fetch the data of shows and actors. Used Local Storage to store the bookmarked items so that data will not be lost.",
    link: "https://ashutoshvashisht007.github.io/Box-Office-App./#/#/",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    img: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRpYyUyMHRhYyUyMHRvZXxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Built using React and styled with SCSS, this Tic Tac Toe game offers a classic gaming experience with a modern twist. Players can enjoy the timeless fun of Tic Tac Toe while also keeping track of their moves throughout the game. The game features a responsive design, making it accessible on both desktop and mobile devices.",
    link: "https://tic-toegame.surge.sh/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  // console.log(item.link);
  const handleClick = (e,link)=> {
    e.preventDefault();
    window.location.href = link;
  }

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={(e)=> handleClick(e,item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
