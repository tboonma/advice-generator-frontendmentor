import spinner from '../assets/svg/Spinner.svg'

const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <img src={spinner} alt="loading"></img>
    </div>
  )
}

export default LoadingScreen