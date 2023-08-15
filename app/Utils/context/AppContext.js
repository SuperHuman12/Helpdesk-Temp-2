"use client"
import React, { createContext, useReducer } from "react";

// Initialize a default state for our app
const initialState = {
  documentData: null,
  workspaceData:null, 
  loadingData: true, 
  category: [], 
  Ncategory: [],
  SET_DESIGN:null,
  selectedCategory: null,
  error: null,
  view: 'categories'
};

// Create our context
export const AppContext = createContext(initialState);

/// Create the Provider as a component
export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_DOCUMENT_DATA":
        return { ...state, documentData: action.payload, loadingData: false };
      case "SET_DESIGN":
        return { ...state, SET_DESIGN: action.payload };
      case "SET_LOADING_DATA":
        return { ...state, loadingData: action.payload };
      case "SET_CATEGORY":
        return { ...state, category: action.payload };
      case "SET_NCATEGORY":
        return { ...state, Ncategory: action.payload };
      case "SET_SELECTED_CATEGORY":
        return { ...state, selectedCategory: action.payload };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      case "SET_VIEW":
        return { ...state, view: action.payload };
      case "SET_WORKSPACE_DATA": // add this line
        return { ...state, workspaceData: action.payload }; // handle the action here
      default:
        return state;
    }
  }, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};