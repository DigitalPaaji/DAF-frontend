"use client"
import { Provider } from "react-redux"
import { store } from "./components/Store/store"
import { ToastContainer } from "react-toastify"




const LayoutCompo =({children})=>{



    return(
        <Provider store={store}>
           <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

        {children}
        
      

        </Provider>
    )
}

export default LayoutCompo