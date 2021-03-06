import React from 'react'
import { useStaticQuery } from 'gatsby';
import { strictEqual } from 'assert';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return(
        <footer>
            <p>Created by {data.site.siteMetadata.author}, Copyright 2019</p>
        </footer>
    )
}

export default Footer