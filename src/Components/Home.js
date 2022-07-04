import '../homepage.css';
import Bookshelf from "./Bookshelf";
import BookClubs from './BookClubs';


function Home({ wormie }) {


    return (
        <div>
            <div className='siteTitle'><h1>BookWorms</h1>
                <img className='wormie' src={wormie}></img></div>

            <h2 className='userName'>Reader Name</h2>

            <div className='contentConsole'>
                <Bookshelf />
                <BookClubs />
            </div>
        </div>
    )
}

export default Home

