import Homecard from "./Homecard"

const Home=({items})=>
{
  return (
    <>
    <div className="homecontainer">
        {items.map((item)=>(
            <Homecard key={item.id} item={item}/>
        ))}
    </div>
    </>
  )
}
export default Home