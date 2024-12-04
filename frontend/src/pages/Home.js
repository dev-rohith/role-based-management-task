import '../styles/Home.css'

export default function Home() {
    return (
        <div className="landing-page">
            <header>
                <h1>MarketPlace</h1>
                <p>Where Buyers Meet Sellers</p>
            </header>
 
            <main>
                <section className="hero">
                    <div className="animated-card">
                        <h2>Buy & Sell</h2>
                        <p>Your One-Stop Marketplace Solution</p>
                    </div>
                </section>
 
                <section className="features">
                    <div className="feature bounce-in">
                        <h3>Secure Transactions</h3>
                    </div>
                    <div className="feature bounce-in-delay-1">
                        <h3>Verified Users</h3>
                    </div>
                    <div className="feature bounce-in-delay-2">
                        <h3>24/7 Support</h3>
                    </div>
                </section>
            </main>
 
            <footer>
                <p>© 2024 MarketPlace. All rights reserved.</p>
            </footer>
        </div>
    )
 }