import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { specialties } from "../Category/constants"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

export default function SurgicalSpecialties() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Наші Хірургічні Спеціальності</h1>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {specialties.map((specialty, index) => (
          <Sheet key={index}>
            <SheetTrigger>
              <Card className={`cursor-pointer transition-all`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <specialty.icon className="mr-2 h-6 w-6" />
                    {specialty.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{specialty.procedures.length} процедур</p>
                </CardContent>
              </Card>
            </SheetTrigger>
            <SheetContent side={"bottom"} className="mt-8">
              <h2 className="mb-4 text-2xl font-semibold">{specialties[index].name}</h2>
              <Accordion type="single" collapsible className="w-full">
                {specialties[index].procedures.map((procedure, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{procedure}</AccordionTrigger>
                    <AccordionContent>
                      Детальна інформація про процедуру {procedure} буде додана незабаром. Будь ласка, зв&apos;яжіться з
                      нами для отримання додаткової інформації.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  )
}
