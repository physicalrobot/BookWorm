import '../homepage.css';
import CurrentBook from './CurrentBook';
import BookClubFeed from './BookClubFeed';
import UserReviews from './UserReviews';
import UserRead from './UserRead';
import UserDnf from './UserDnf';
import Books from './Books';
import BookClubInvite from './BookClubInvite';
import ChapterUpdates from './ChapterUpdates';
import Bookshelf from "./Bookshelf";
import BookClubs from './BookClubs';
import {
    BrowserRouter, Routes,
    Link,
    Outlet,
    Route,
    Router
} from "react-router-dom"


function Home({ wormie }) {


    return (
        <div >
            <div className='siteHeader'>

                <div className='siteTitle'>
                    <img alt='sitelogo' className='wormie' src={wormie}></img>
                    <h1>BookWorms</h1>
                </div>

                <div className='headerOptions'>
                    <Books />
                    <BookClubInvite />
                </div>

                <h2 className='userName'>Reader Name</h2>
            </div>

            <div className='homecontainer'>




                <div className='currentBookandChapterUpdates'>
                    <CurrentBook />
                    <ChapterUpdates />

                </div>
                <div className='Bookshelf'>

                    <Bookshelf />

                </div>
                <div className='Bookclubs'>
                    <BookClubs />

                </div>
                <div className='BookclubFeed'>
                    <BookClubFeed />

                </div>
                <div className='UserReviews'>

                    <UserReviews />
                </div>
            </div>
        </div>
    )
}

export default Home

