import katy from '../images/katy.png'
import star from '../images/star.png'
function Card(){
  return(
    <section className="card-container">
      <div className="card">
          <img  className="card-img" src={katy} alt="katy"></img>
          <div className='card-stats'>
            <img src={star} alt="star" ></img>
            <span>5.0</span>
            <span className='card-review'>(6) • USA</span>
          </div>
          <p>
            Life lessons with Katie Zaferes
          </p>
          <p>
            <span className='card-price'>From $136 /</span> person
          </p>
      </div>

    </section>

  )
}

export default Card