import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Auto From</h1>
            </div>{children}
        </main>
    )
}

export default Layout;