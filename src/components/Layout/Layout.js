import React from "react"
import LayoutStyle from "./Layout.module.css"

const Layout = (props) => (
    <>
        <p>toolbar , sidebar , backdrop</p>
        <main className={LayoutStyle.content}>
            {props.children}
        </main>
    </>
)

export default Layout;