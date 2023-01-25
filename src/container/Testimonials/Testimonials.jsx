import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { AppWrapper, MotionWrapper } from '../../hoc'
import { images } from '../../constants'
import './Testimonials.scss'

const Testimonials = () => {
  const testimonialsArr = [
    {
      id: 1,
      name: 'Haris Becirovic',
      url: images.programer1,
      feedback:
        ' " Highly motivated, every day learning web developer in progress, but able and willing to quickly adapt to any technology stack. Over the time I figured out that software development is my passion. Im not afraid of any challenge, and ready to build the future line by line" ',
      company: 'Junior Frontend Developer',
    },
    {
      id: 2,
      name: 'Haris Becirovic',
      url: images.teamwork,
      feedback:
        '"It is not about the ball, it is about the reason to follow. In the game of your life, your are nothing without your team"',
      company: 'Team player',
    },
    {
      id: 3,
      name: 'Haris Becirovic',
      url: images.pharmacy,
      feedback:
        ' "Master Of Pharmacy @UniversityOfTuzla very soon. I have my thesis to do, but this is not where I feel passion about, that is why I turned into web development" ',
      company: 'Faculty Of Pharmacy',
    },
    {
      id: 4,
      name: 'Haris Becirovic',
      url: images.artphoto,
      feedback:
        ' "When dreams comes true, it is just another day. It is not somewhere in our non-existing future mind perceptions. It is today. It is ours tomorrow."',
      company: 'Writter',
    },
    {
      id: 5,
      name: 'Haris Becirovic',
      url: images.yes,
      feedback:
        ' "I will be as short as possible. My name is Haris Becirovic, and I m coming from Bosnia and Herzegovina. Throught this portfolio website I tried to present myself not just as junior developer, but also as person who I em. I have implemented parts of my personality into this website. Idea is to get as close as possible to me from distance. Hope you have created opinion that I wanted. I m responsible person, who is always dedicated to obligation. I fit in easily into every society, thanks to my good relationship with people. And last maybe I do not fill out all of yours expectations in technology stack, but with given chance I certainly will. Be sure that trust shown I wont let down. I will appreciate the oportunity, and put all of me into it.  "',
      company:
        'Thank you for your time Scandiweb. Hope you will choose me. Best regards from Bosnia :) ',
    },
  ]

  const brandsArr = [
    { id: 1, url: images.nb, name: 'new balance' },
    { id: 2, url: images.skype, name: 'skype' },
    { id: 3, url: images.bolt, name: 'bolt' },
    { id: 4, url: images.spotify, name: 'spotify' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState([])
  const [brands, setBrands] = useState([])

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    setBrands(brandsArr)
    setTestimonials(testimonialsArr)
  }, [])

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].url} alt={testimonials.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text bold-text">
                  {testimonials[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              role={'button'}
              tabIndex={0}
              onKeyDown={handleClick}
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              role={'button'}
              tabIndex={0}
              onKeyDown={handleClick}
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.id}
          >
            <img src={brand.url} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Testimonials, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
)
