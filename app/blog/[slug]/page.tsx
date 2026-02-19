import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { blogPosts, getBlogPost } from "@/lib/blog-data"
import { BlogContent } from "@/components/blog/blog-content"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Recess Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <PageWrapper>
      <article className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-6">
          <FadeInSection>
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full text-foreground border border-border/40 mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight leading-tight text-balance">
              {post.title}
            </h1>

            {/* Author + Date */}
            <div className="flex items-center gap-4 mt-6 mb-8">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {post.author.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.author.role} &middot;{" "}
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Cover Image */}
            <div className="rounded-xl overflow-hidden border border-border/40 mb-12">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeInSection>

          {/* Article Content */}
          <FadeInSection>
            <BlogContent content={post.content} />
          </FadeInSection>

          {/* CTA */}
          <FadeInSection>
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-foreground text-background text-center">
              <h3 className="font-serif text-xl md:text-2xl font-bold">
                Ready to move from burnout management to trauma load stabilization?
              </h3>
              <p className="mt-3 text-sm text-background/70 max-w-md mx-auto">
                Learn how Recess helps organizations in healthcare, education, and public safety protect their workforce at the nervous system level.
              </p>
              <Button
                asChild
                className="mt-6 rounded-full font-serif font-semibold px-8 bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/get-started">Schedule Free Strategy Call</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
    </PageWrapper>
  )
}
