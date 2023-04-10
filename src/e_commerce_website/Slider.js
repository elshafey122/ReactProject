import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpeg'
import './Slider.css'
function Slider()
{
    return (
        <>
        <div id="carouselExampleControls" Class="carousel slide" data-bs-ride="carousel">
  <div Class="carousel-inner">
    <div Class="carousel-item active">
      <img src={image3} Class="d-block w-100 height-300" alt="..."/>
    </div>
    <div Class="carousel-item">
      <img src={image2} Class="d-block w-100 height-300" alt="..."/>
    </div>
    <div Class="carousel-item">
      <img src={image1} Class="d-block w-100 height-300" alt="..."/>
    </div>
  </div>
  <button Class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span Class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span Class="visually-hidden">Previous</span>
  </button>
  <button Class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span Class="carousel-control-next-icon" aria-hidden="true"></span>
    <span Class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Slider;