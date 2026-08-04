function PageHeader() {
    return(
        <div className="Header flex flex-row justify-between px-20 pt-15 mb-10">
            <h3 className="text-2xl text-accent font-bold">Vaibhav Saravanan</h3>

        <div className="Buttons flex flex-row gap-5">
            <a><h3>Home</h3></a>
            <a><h3>About</h3></a>
            <a><h3>Projects</h3></a>
            <a><h3>Contact</h3></a>
        </div>
        </div>
    )
}

export default PageHeader;