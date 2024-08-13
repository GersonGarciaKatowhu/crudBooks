import { Star } from "./Icons"
function Stars({ rating }) {
  let stars = []
  const totalStars = 5
  for(let i = 1; i <= totalStars; i++) {
    if(i <= rating){
      stars.push(<Star filled={true} key={i}/>)
    } else {
      stars.push(<Star filled={false} key={i}/>)
    }
  }
  return (
    <>
      {stars}
    </>
  )
}

export default Stars
