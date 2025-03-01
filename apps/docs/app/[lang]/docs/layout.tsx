import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { ReactNode } from "react"

export default async function Layout({ children, params }: {
  params: Promise<{
    lang: string
  }>
  children: ReactNode
}) {
  const { lang } = await params;
  return (
    <DocsLayout 
      tree={source.pageTree[lang]} 
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  )
}