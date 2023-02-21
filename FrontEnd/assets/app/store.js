import { configureStore } from "@reduxjs/toolkit/dist";
import { View, Text } from 'react-native'
import React from 'react'
import siteslice from '../features/SiteSlice'
import UsernameAndPasswordSlice from "../features/UsernameAndPasswordSlice";

export const store = configureStore({
    reducer:{
        site:siteslice,
        namePass:UsernameAndPasswordSlice,
    },
})


