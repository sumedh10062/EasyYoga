import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import BookingList from '../../Component/bookingList/BookingList';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Navbar from '../../Component/navbar/Navbar';
import httpCommon from '../../http-common';
import useAuthorizedGetFetch from '../../hooks/useAuthorizedGetFetch';

const CustomerHomePage = () => {
  const navigate = Navigate;
  const { user , dispatch} = useContext(AuthContext);
  
  
  if (user=== undefined || user === null) {
    navigate("/")
  }
  const config = {
    headers: { Authorization: `Bearer ${ user.jwt}` }
};
  // const bookingList = httpCommon.get(`/customers/${user.id}/bookings`, config).data;

  const {data, loading } = useAuthorizedGetFetch(`/customers/${user.id}/bookings`, config);

  return (
    user? 
    (<div>
        <Navbar loc = "customerHomePage"></Navbar>
        {
          loading ?
            "Data is loading" :
            <BookingList bookings={data} />
        }
      </div>) : 
    navigate("/signin")
  );
};

export default CustomerHomePage;
