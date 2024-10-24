

import { useSelector } from 'react-redux'
import TweetForm from '../../Components/TweetForm'
import TweetList from '../../Components/TweetList'
import Navbar from './Navbar'
import { RootState } from '../../Redux/Store' //dari redux yang kita buat 

const LandingPage = () => {
    //ambil daftar tweets dari redux
    const tweets = useSelector((state: RootState) => state.tweets.tweets)


    return (
        <div className='bg-zinc-300 min-h-screen'>
            <Navbar />

            <div className='container mx-auto p-4'>

                {/* Header */}
                <header className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-blue-900'>Welcome To My App</h1>
                    <p className='text-gray-500 mt-2'>Share Your Thoughts</p>
                </header>

                {/* Tweet Form */}
                <section>
                    <TweetForm />
                </section>

                {/* Tweet List */}
                <section>
                    <h2>Your Tweets</h2>
                    <TweetList tweets={tweets} />
                </section>

            </div>

        </div>
    )
}

export default LandingPage