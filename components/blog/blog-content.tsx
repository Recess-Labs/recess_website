"use client"

import React from "react"

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  const regex = /\*\*(.+?)\*\*/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-foreground">
        {match[1]}
      </strong>
    )
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

function renderBlock(block: string, index: number): React.ReactNode {
  // Heading 2
  if (block.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="font-serif text-xl md:text-2xl font-bold text-foreground mt-12 mb-4"
      >
        {block.slice(3)}
      </h2>
    )
  }

  // Divider
  if (block === "---") {
    return <hr key={index} className="my-8 border-border" />
  }

  // Unordered list
  if (block.startsWith("- ")) {
    const items = block.split("\n").map((line) => line.replace(/^- /, ""))
    return (
      <ul key={index} className="my-4 space-y-2 pl-5">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-base text-muted-foreground leading-relaxed list-disc"
          >
            {renderInlineMarkdown(item)}
          </li>
        ))}
      </ul>
    )
  }

  // Bold heading paragraph (e.g. "**1. Early Detection**\nDescription")
  if (block.startsWith("**") && block.includes("\n")) {
    const [heading, ...rest] = block.split("\n")
    return (
      <div key={index} className="my-4">
        <p className="text-base text-foreground leading-relaxed font-semibold">
          {renderInlineMarkdown(heading)}
        </p>
        {rest.map((line, i) => (
          <p
            key={i}
            className="text-base text-muted-foreground leading-relaxed mt-1"
          >
            {renderInlineMarkdown(line)}
          </p>
        ))}
      </div>
    )
  }

  // Regular paragraph
  return (
    <p
      key={index}
      className="text-base text-muted-foreground leading-relaxed my-4"
    >
      {renderInlineMarkdown(block)}
    </p>
  )
}

export function BlogContent({ content }: { content: string[] }) {
  return (
    <div className="prose-recess">{content.map(renderBlock)}</div>
  )
}
