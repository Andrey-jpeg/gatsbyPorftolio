import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const aboutPage = ({data}) => {

    return(
        <Layout>
            <div>
                <h1>
                    you are on the about page.
                </h1>
            </div>
        </Layout>
    )
}

export default aboutPage