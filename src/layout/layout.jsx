import React from "react"
import Header from "./header"

export default function Layout({ children, title }) {
  return (
    <>
      <Header title={ title } />
      <main role="main" class="container">
      	{ children }
      </main>
    </>
  )
}