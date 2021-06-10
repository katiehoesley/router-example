const Home = (props) => {
    const stories = props.stories.map(story => {
        return(<div id={story.id}>
            <h2>{story.title}</h2>
            <p>{story.article}</p>
        </div>)
    })
    return (
        <div>
            <h1> My Profile Page </h1>
            <h2>News Articles I Care About:</h2>
            <div>{stories}</div>
        </div>
    )
}

export default Home; 