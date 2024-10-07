export default function CategoryBanner({ title, description }: { title: string; description: string }) {
  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">{title}</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
