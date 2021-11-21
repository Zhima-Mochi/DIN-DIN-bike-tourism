export default function IntroTitle({ title_1, title_2 }) {
    return (
        <>
            <h2 className="intro-h2 mx-auto w-3/4 lg:w-1/2">{title_1}</h2>
            <h1 className="intro-h1 mx-auto w-3/4 lg:w-1/2">{title_2}</h1>
        </>
    )
}