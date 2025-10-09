import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
            <Navbar />
            <div className="w-screen flex container mx-auto bg-transparent" style={{ height: 'calc(100vh - 56px)' }}>
                <div className="w-[220px] bg-transparent">
                    <Sidebar />
                </div>
                <div className="flex-1 bg-transparent">
                    <div className="flex bg-transparent">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
