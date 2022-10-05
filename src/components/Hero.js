import grid from '../images/photo-grid.png'
function Hero(){
  return(
    <section className="hero-container">
      <img className='hero-photo' src={grid} alt="gridphoto"></img>
      <div className='hero-title'>Online Experiences</div>
      <div className='hero-subtitle'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
    </section >
  )
}

export default Hero