import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex flex-col flex-center">
      <h1 className="heading text-center">Find and share<br className="max-md:hidden" /><span className="text-center">AI powered prompts</span></h1>
      <p className="description text-center font-wix">Fuel ChatGPT with endless creative prompts. Join the nexus of imagination and inspire AI-generated conversations.</p>
      <Feed />
    </section>
  )
}

export default Home;