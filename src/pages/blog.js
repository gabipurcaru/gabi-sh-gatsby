import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Blog() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Contact"
            />
            <div>
                <p>todo</p>
            </div>
        </Layout >
    );
}

export default Blog;