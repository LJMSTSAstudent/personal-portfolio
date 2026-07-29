import './App.css'

function App() {

  return (
    <>
      <div className="Splash-Page Intro">
        <h3 className="text-lg text-accent font-bold">Hi, I'm</h3>
        <h1 className="text-5xl text-primary font-extrabold">Vaibhav Saravanan</h1>
        <h3 className="text-lg text-accent font-bold">Student Developer</h3>
        <p className="text-sm text-secondary text">
          I'm passionate about building software that helps those around the
          world as well as learning new things.
        </p>
        <button className="bg-accent rounded-xl">Learn More</button>
      </div>

      <div className="Splash-Page Interests">
        <h1 className="text-2xl font-bold text-primary">Interests</h1>

        <div className="Splash-Page-Cards">
          <div className="Splash-Page-Card">
            <p className="text-card">Image</p>
            <p className="text-primary">Web Development</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card">
            <p className="text-card">Image</p>
            <p className="text-primary">App Development</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card">
            <p className="text-card">Image</p>
            <p className="text-primary">Problem Solving</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card">
            <p className="text-card">Image</p>
            <p className="text-primary">Cooking</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card">
            <p className="text-card">Image</p>
            <p className="text-primary">Content Creation</p>
            <p className="text-secondary">Description</p>
          </div>
        </div>
      </div>

      <div className="Splash-Page Future-Projects">
        <h1 className="text-2xl font-bold text-primary">My Projects</h1>
        <p className="text-secondary">Feel free to check out some of my cool projects!.</p>
        <button className="text-accent">View Projects</button>
      </div>
    </>
  )
}

export default App