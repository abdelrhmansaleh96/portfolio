import Loader from 'react-loaders'
import { useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact = () => {
  const refForm = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_zb3ual4',
        'template_3xc4hgl',
        refForm.current,
        '5NMq3a5wM9B7Iq-OB'
      )
      .then(
        () => {
          alert('Message has been Sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed to sent the message,please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Abdelrhman Saleh,
          <br />
          Egypt,
          <br />
          6 ElMasala street,Msr Elgdeda,
          <br />
          Cairo
          <br />
          <span>abdelrhmansaleh25@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[30.09213, 31.324728]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[30.09213, 31.324728]}>
              <Popup>
                Abdelrhman lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
