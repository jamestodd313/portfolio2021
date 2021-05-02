import React from 'react'

export const ExternalLinks = ({links}) => {
    return (
        <section className="links">
            {links && links.map(link=>{
                return <a key={link.name} href={link.url} target="_blank" className="big-link reverse">{link.name}</a>
            })}
        </section>
    )
}
