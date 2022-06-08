import PatternDivider from '../assets/svg/pattern-divider-desktop.svg'
import dice from '../assets/svg/icon-dice.svg'

type AdviceInfo = {
    id: number,
    description: string,
    getAdvice(): void
}

const AdviceBox = (adviceInfo: AdviceInfo) => {
  return (
    <div className="w-11/12 md:w-[37vw] bg-dark-grayish-blue rounded-xl px-10 pt-8 pb-16 grid place-items-center gap-4 absolute">
        <p className="text-neon-green font-extrabold tracking-[0.3em] text-sm">ADVICE #{adviceInfo.id}</p>
        <p className="text-center text-light-cyan advice-quote font-extrabold">"{adviceInfo.description}"</p>
        <span className="text-center">
          <img className="pattern-divider" src={PatternDivider} alt="Pattern Divider" />
        </span>
      <div className="absolute h-16 w-16 rounded-full bg-neon-green random-btn grid place-items-center transition duration-300 ease-in-out" onClick={adviceInfo.getAdvice}>
        <img src={dice} alt="Dice icon" width="22px" height="auto" />
      </div>
    </div>
  )
}

export default AdviceBox