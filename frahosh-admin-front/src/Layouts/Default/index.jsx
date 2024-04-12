import { Suspense } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar/"
import * as Styled from "./styled"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <Styled.Layout>
      <Sidebar />
      <div className="all-pages">
        <Header />
        <Suspense >
          <Outlet />
        </Suspense>
      </div>
    </Styled.Layout>
  )
}

export default DefaultLayout