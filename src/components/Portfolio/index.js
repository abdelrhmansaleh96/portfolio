import './index.scss'
import portfolioData from '../../data/portfolio.json'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div key={idx} className="image-box">
              <img src={port.cover} alt="cover" className="portfolio-image" />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="btn"
                  onClick={() => {
                    window.open(port.url)
                  }}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            strArray={'Portfolio'.split('')}
            letterClass={letterClass}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
