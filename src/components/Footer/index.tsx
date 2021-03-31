import React from "react"
import Link from "../Link"

interface LinkItem {
  text:string,
  href:string
}

interface FooterLinks {
  text:string,
  href?:string,
  subsections: LinkItem[]
}

const getLinks = (sourcePath: string): FooterLinks[] => [
  {
    text: "Learn",
    href: "/learn/",
    subsections: [
      { text: "Introduction", href: "/learn/" },
      { text: "Query Language", href: "/learn/queries/" },
      { text: "Type System", href: "/learn/schema/" },
      { text: "Execution", href: "/learn/execution/" },
      { text: "Best Practices", href: "/learn/best-practices/" },
    ],
  },
  {
    text: "Spec and Code",
    href: "/code",
    subsections: [
      { text: "Specification", href: "https://spec.graphql.org" },
      { text: "Languages", href: "/code/#languages" },
      { text: "Tools", href: "/code/#tools" },
      { text: "Services", href: "/code/#services" },
      {
        text: "Edit this page ✎",
        href:
          "https://github.com/graphql/graphql.github.io/edit/source/" +
          sourcePath,
      },
    ],
  },
  {
    text: "Community",
    href: "/community",
    subsections: [
      { text: "Code of Conduct", href: "/codeofconduct/" },
      { text: "GitHub", href: "https://github.com/graphql" },
      {
        text: "Stack Overflow",
        href: "http://stackoverflow.com/questions/tagged/graphql",
      },
      {
        text: "Facebook Group",
        href: "https://www.facebook.com/groups/graphql.community/",
      },
      { text: "Twitter", href: "https://twitter.com/GraphQL" },
      { text: "Upcoming Events", href: "/community/upcoming-events/" },
    ],
  },
  {
    text: "GraphQL Foundation",
    subsections: [
      { text: "About", href: "/foundation/" },
      { text: "Join", href: "/foundation/join/" },
      { text: "Current members", href: "/foundation/members/" },
      { text: "Landscape", href: "https://landscape.graphql.org" },
      { text: "Artwork", href: "https://github.com/graphql/artwork" },
      { text: "Contact", href: "/foundation/contact/" },
    ],
  },
]

const Footer = ({sourcePath}: { sourcePath: string }) => {
  return (
    <div>
      <footer>
        <section className="sitemap">
          <Link href="/" className="nav-home" aria-label="Homepage" />
          {getLinks(sourcePath).map((section, i) => (
            <div key={i}>
              <h5>
                {section.href ? (
                  <Link href={section.href}>{section.text}</Link>
                ) : (
                  section.text
                )}
              </h5>
              {section.subsections.map((subsection: any, i) => (
                <Link key={i} href={subsection.href}>
                  {subsection.text}
                </Link>
              ))}
            </div>
          ))}
        </section>
        <section className="copyright">
          Copyright © {`${new Date().getFullYear()}`} The GraphQL Foundation.
          All rights reserved. The Linux Foundation has registered trademarks
          and uses trademarks. For a list of trademarks of The Linux Foundation,
          please see our{" "}
          <a href="https://www.linuxfoundation.org/trademark-usage">
            Trademark Usage
          </a>{" "}
          page. Linux is a registered trademark of Linus Torvalds.{" "}
          <a href="http://www.linuxfoundation.org/privacy">Privacy Policy</a>{" "}
          and <a href="http://www.linuxfoundation.org/terms">Terms of Use</a>.
        </section>
      </footer>

    </div>
  )
}

export default Footer
