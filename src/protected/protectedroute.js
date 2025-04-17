import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UseProductContext } from '../usecontext/usecontext';

const ProtectedRoute = ({ children }) => {
    const {isAdmin}=UseProductContext()
    console.log('isAdmin:', isAdmin)
  if (isAdmin === null) {
    return <div>Loading...</div>; // Show a loading state until authentication is checked
  }

  return isAdmin ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
