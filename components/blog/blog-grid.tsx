"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, BLOG_CATEGORIES } from "@/lib/blog-data"

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Category Filters */}
      <div className="mb-12">
        <p className="text-sm font-medium text-foreground mb-4">
          Explore by Topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 text-sm rounded-full border transition-colors ${
              activeCategory === "All"
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No posts in this category yet. Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border overflow-hidden bg-background hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full text-foreground border border-border/40">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-5 flex items-center gap-3">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
