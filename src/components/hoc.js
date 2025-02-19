'use client'
import React, { useState, useEffect } from 'react';

const withSplashScreen = (WrappedComponent) => {
  return function WithSplashScreen(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    if (loading) {
      return <div className='bg-red-500 h-100vh'>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withSplashScreen;
