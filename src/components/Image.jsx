import image3 from '../assets/image3.jpg'

const Image = () => {
  return (
    <div>
      <img src={image3} height={200} width={300}></img>
      <br />
      <img src='/src/assets/image3.jpg' height={200} width={300}></img>
    </div>
  )
}

export default Image
