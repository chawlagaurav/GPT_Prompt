// import React from 'react' In nextjs we no longer need to specify this
import Feed from "@/components/Feed"
const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Explore and Contibute
                <br className="max-md:hidden" />
                <span className="three_gradient text-center">Prompts for AI</span>
            </h1>
            <p className="desc text-center">
                GPT Prompt is an open-source AI prompting tool for modern world to discover, create and share creative prompts
            </p>

            <Feed/>
        </section>
    )
}

export default Home