import '../styles/Admindashbord.css'

export default function Dashboard() {   
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h3>Admin Panel</h3>
                </div>
                <nav>
                    <div className="nav-item">Overview</div>
                    <div className="nav-item">Users</div>
                    <div className="nav-item">Products</div>
                    <div className="nav-item">Orders</div>
                    <div className="nav-item">Analytics</div>
                </nav>
            </aside>
 
            <main className="main-content">
                <header className="dashboard-header">
                    <h2>Dashboard Overview</h2>
                </header>
 
                <div className="stats-grid">
                    <div className="stat-card">
                        <h4>Total Users</h4>
                        <p className="stat-number">1,234</p>
                    </div>
                    <div className="stat-card">
                        <h4>Active Orders</h4>
                        <p className="stat-number">56</p>
                    </div>
                    <div className="stat-card">
                        <h4>Revenue</h4>
                        <p className="stat-number">$45,678</p>
                    </div>
                    <div className="stat-card">
                        <h4>Products</h4>
                        <p className="stat-number">789</p>
                    </div>
                </div>
            </main>
        </div>
    )
 }