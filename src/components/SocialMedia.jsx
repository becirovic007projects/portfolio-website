import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/harisbecirovic/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/becirovic007projects"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/haris.becirovic.3/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  </div>
)

export default SocialMedia
