"use client";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Calendar } from "@/components/ui/calendar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex flex-col gap-y-1.5">
          <SidebarTrigger className="fixed top-0" />
          <ModeToggle />
          <h1 className="text-3xl font-bold pl-8 mt-10 border-b">
            My shadcn project
          </h1>
          <div className="w-full flex flex-row justify-around items-center py-5 border-b flex-wrap gap-1">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Open the accordion and see some pretty random stuff...
                </AccordionTrigger>
                <AccordionContent>Typed Stuff</AccordionContent>
                <AccordionContent>Stuff that's typed</AccordionContent>
                <AccordionContent>
                  It's the third accordion item and its looong... 😁😁😁
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              footer={<em>Today is what you want it to be.</em>}
            />
          </div>
          <h2 className="text-2xl ml-8 mt-10">
            And here is a chart for Desktop and mobile users
          </h2>
          <ChartContainer config={chartConfig} className="min-h-10 h-80 w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={true} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
          <div className="flex flex-row my-5 justify-around flex-wrap">
            <div className="border w-fit px-5 py-1 m-1">
              <h2 className="ml-2 border-b mt-3">Some skeleton loader</h2>
              <div className="flex flex-row gap-x-1 items-center p-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-24 h-8 rounded-full" />
              </div>
            </div>
            <div className="border w-fit px-5 py-1 m-1">
              <h2 className="ml-2 border-b mt-3">skeleton loader 2</h2>
              <div className="flex flex-row gap-x-1 items-center p-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-24 h-8 rounded-full" />
              </div>
            </div>
            <div className="border w-fit px-5 py-1 m-1">
              <h2 className="ml-2 border-b mt-3">skeleton loader 3</h2>
              <div className="flex flex-row gap-x-1 items-center p-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-24 h-8 rounded-full" />
              </div>
            </div>
            <div className="border w-fit px-5 py-1 m-1">
              <h2 className="ml-2 border-b mt-3">skeleton loader 4</h2>
              <div className="flex flex-row gap-x-1 items-center p-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-24 h-8 rounded-full" />
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
