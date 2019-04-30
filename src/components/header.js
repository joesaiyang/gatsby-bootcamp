import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link className={headerStyles.logo}  to="/">{data.site.siteMetadata.title}</Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName={headerStyles.active}>About</Link>
                    </li>
                    <li>
                        <Link to="/blog" activeClassName={headerStyles.active}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName={headerStyles.active}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header