import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../services/Authentication';

import SignIn from '../components/SignIn';
import Home from '../components/Home';
import Users from '../components/Users';
import Accounts from '../components/Accounts';
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    
    return !isLoggedIn ? <Navigate to="/" replace /> : children;
};

const NotLoggedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to="/home" replace /> : children;
};

export default function Router() {
    return (
        <Routes>
            <Route index element={<NotLoggedRoute><SignIn /></NotLoggedRoute>} />
            <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
            <Route path="accounts" element={<ProtectedRoute><Accounts /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
