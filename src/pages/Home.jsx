import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
    <>
    { /*
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Bienvenus sur le Github Finder ! La seule application au
              monde a proposer une recherche d'utilisateur Github, croyez-nous !
            </p>
          </div>
        </div>
      </div>
      */}

      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home