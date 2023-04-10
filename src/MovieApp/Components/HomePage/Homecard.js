import logo from "../images/home1.jpg"//../images/home1.jpg

const Homecard =({item:{id,cover,name,rating,time,desc,starring,genres,tgs,video}})=>
{
    return (
        <div className="box">
            <div className="coverimage">
            <img src={cover} alt=""/>
            </div>
            <div className="content flex">
            <div className="details-row flex">
                <h1>{name}</h1>
            </div>
            <div className="rating flex">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
            </div>
            <label>{rating}</label>
            <label>GB</label>
            <label>{time}</label>
            <p>{desc}</p>

            <div className="cast">
                <h4>
                    <span>starring</span>
                    {genres}
                </h4>
                <h4>
                    <span>span</span>
                    {tgs}
                </h4>
            </div>
            <button className="primary-btn">
                <i className="fas fa-play"></i> play now
            </button>

            <div className="button row">
                <link to={`./singlepge/${id}`}></link>
                <button>
                    <div className="img"></div>
                </button>
            </div>
            

        </div>
        </div>

        
    )
    
}
export default Homecard;