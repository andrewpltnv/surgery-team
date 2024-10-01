"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { specialties } from "./constants";

export default function SurgicalSpecialties() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Наші Хірургічні Спеціальності
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {specialties.map((specialty, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all ${
              activeTab === index ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                <specialty.icon className="w-6 h-6 mr-2" />
                {specialty.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {specialty.procedures.length} процедур
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          {specialties[activeTab].name}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {specialties[activeTab].procedures.map((procedure, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{procedure}</AccordionTrigger>
              <AccordionContent>
                Детальна інформація про процедуру {procedure} буде додана
                незабаром. Будь ласка, зв&apos;яжіться з нами для отримання
                додаткової інформації.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
