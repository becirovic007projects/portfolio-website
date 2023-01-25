import React from 'react'
import { motion } from 'framer-motion'
import { AppWrapper, MotionWrapper } from '../../hoc'
// import { images } from '../../constants'
import './About.scss'

const arr = [
  {
    title: 'Frontend Development',
    description:
      'Interested in frontend development. Creating web apps with custom design, responsive layout, modern look and latest technologies like front-end frameworks.',
    imgUrl: '/react.png',
  },
  {
    title: 'Team player',
    description: ' ',
    imgUrl: '/teamwork.png',
  },
  {
    title: 'Writter',
    description: '',
    imgUrl: '/good-practice.png',
  },
  {
    title: 'Master Of Pharmacy',
    description: '@UnivercityOfTuzla',
    imgUrl: '/pharmacy-logo.png',
  },
]

const About = () => {
  return (
    <div className="about">
      <h2 className="head-text">
        <span></span> <br></br>
      </h2>

      <div className="app__profiles">
        {arr.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt="about" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(About, 'app__about'),
  'about',
  'app__whitebg'
)
