import * as React from "react"
import { storyblokEditable } from "gatsby-source-storyblok";

const InternalLinks = ({ blok }) => {
  console.log(blok)
  return (
    <div {...storyblokEditable(blok)}>
      <p>{blok.links.cached_url}</p>
    </div>
  )
}

export default InternalLinks