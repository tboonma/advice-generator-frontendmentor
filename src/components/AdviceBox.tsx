type AdviceInfo = {
    id: number,
    description: string
}

const AdviceBox = (adviceInfo: AdviceInfo) => {
  return (
    <div className="w-1/3 bg-dark-grayish-blue rounded-xl px-10 py-8 grid place-items-center gap-2">
        <h1 className="text-neon-green">Advice #{adviceInfo.id}</h1>
        <p className="text-center text-light-cyan advice-quote">"{adviceInfo.description}"</p>
    </div>
  )
}

export default AdviceBox