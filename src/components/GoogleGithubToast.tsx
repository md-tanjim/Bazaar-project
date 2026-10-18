'use client';

import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const GoogleGithubToast = () => {

    useEffect(()=>{ 

        if (sessionStorage.getItem("showGoogleToast")) {
            sessionStorage.removeItem("showGoogleToast");
            toast.success("আপনাকে স্বাগতম।");
        }

    },[]);
    return null;
};

export default GoogleGithubToast;