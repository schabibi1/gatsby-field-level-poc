import * as React from "react"
import { storyblokEditable } from "gatsby-source-storyblok";

const InternalLinks = ({ blok }) => {
  console.log(blok)
  return (
    <div {...storyblokEditable(blok)}>
    <p>{blok.link} </p>
      <p>Internal links: {blok.lang_switcher.cached_url}</p>
    </div>
  )
}

export default InternalLinks