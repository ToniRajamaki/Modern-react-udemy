import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistant</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard
                title='Alexa'
                handle='@alexa99'
                image={AlexaImage}
                alt='asd'
                description='Alexa is really cool, but it tries to make u buy amazon stuff!'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title='Siri'
                handle='@siri212'
                image={SiriImage}
                description='Siri is the one that is super popular in US.'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title='Cortana'
                handle='@cortanaCool'
                image={CortanaImage}
                description='Cortana is the one in microsoft, nobody uses'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default App
