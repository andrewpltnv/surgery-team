import { Button } from "./ui/button"

export default function ContactUs() {
  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Need Assistance?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team is here to help you find the right care for your needs.
            </p>
          </div>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

// or this
{
  /* <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Emergency? We&apos;re Here to Help
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our emergency surgery team is available 24/7. Don&apos;t hesitate to call if you need immediate assistance.
        </p>
      </div>
      <Button className="inline-flex items-center" size="lg">
        <Phone className="mr-2 h-4 w-4" /> Call Emergency Line
      </Button>
    </div>
  </div>
</section> */
}
