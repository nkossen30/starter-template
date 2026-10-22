"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"
// This is the home page. Add your own components inside the section.
export default function PageOne() {
  return (
    <div>
      <img

        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzNzQ-TQ6UbBejipUlGz1C4u3NAeKfYGA8fn-qTZo75h48_CRF1hvljQ&s=10.png"
        alt="3D Printing Setup"
        width="200"
        className="ml-auto block"
        mt-1000="true"
      />


      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          3D Printing FAQ & Guide
        </h1>
        <p className="text-muted-foreground">
          Find answers to common questions about 3D printing, troubleshooting, and material choices.
        </p>

        <Accordion defaultValue={["downloading"]} className="max-w-lg">
          <AccordionItem value="downloading">
            <AccordionTrigger>Where do I find things to 3D print?</AccordionTrigger>
            <AccordionContent>
              Popular repositories for free and paid 3D models include:
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><strong>Thingiverse:</strong> Massive library of community-uploaded STL files.</li>
                <li><strong>Printables:</strong> High-quality, curated models with rewards for contributors.</li>
                <li><strong>Thangs:</strong> A search engine for 3D models across multiple websites.</li>
                <li><strong>MakerWorld:</strong> Modern library optimized for easy slicing and multi-color prints.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="slicing">
            <AccordionTrigger>What software do I need before printing?</AccordionTrigger>
            <AccordionContent>
              You need a <strong>Slicer</strong> program to convert 3D models (.STL or .3MF) into G-code that the printer understands. Popular slicers include <em>Bambu Studio, PrusaSlicer, Cura, and OrcaSlicer</em>. In the slicer, you adjust settings like layer height, infill density, and print speed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="filaments">
            <AccordionTrigger>Which filament type should I use?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>PLA:</strong> Beginner-friendly, easy to print, great for decorative items.</li>
                <li><strong>PETG:</strong> Stronger, heat-resistant, ideal for functional parts.</li>
                <li><strong>ABS/ASA:</strong> Very durable and heat-resistant, but requires an enclosure and good ventilation due to fumes.</li>
                <li><strong>TPU:</strong> Flexible, rubber-like material for gaskets or squishy parts.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="troubleshooting">
            <AccordionTrigger>Why did my print fall off the bed?</AccordionTrigger>
            <AccordionContent>
              Bed adhesion issues are usually caused by:
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Dirty print bed (clean with warm water & dish soap or isopropyl alcohol).</li>
                <li>Incorrect bed temperature (50–65°C is recommended for PLA).</li>
                <li>Improper nozzle height / Z-offset (too far from the bed on the first layer).</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adhesion">
            <AccordionTrigger>Why does my 3D print keep falling apart?</AccordionTrigger>
            <AccordionContent>
              Most prints fail structurally due to:
              <ol className="mt-1 list-decimal pl-5 space-y-1">
                <li><strong>Poor layer adhesion:</strong> Print temperature may be too low or cooling fan speed too high.</li>
                <li><strong>Under-extrusion:</strong> Partially clogged nozzle or incorrect flow rate settings.</li>
                <li><strong>Wet filament:</strong> Moisture causes popping/stringing; dry your spool in a filament dryer.</li>
                <li><strong>Weak orientation:</strong> 3D prints are weakest along layer lines. Re-orient the object so stress runs parallel to layers.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="post-processing">
            <AccordionTrigger>How do I smooth or finish my prints?</AccordionTrigger>
            <AccordionContent>
              You can improve the surface finish by removing support structures with pliers, sanding starting from 200 grit up to 1000+ grit, applying filler primer, and painting with acrylic paints. For ABS prints, acetone vapor smoothing can give a high-gloss finish.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ettiquette">
            <AccordionTrigger>How do I claim a 3D printer in a shared space?</AccordionTrigger>
            <AccordionContent>
              Write your name, estimated print completion time, and contact info on the whiteboard near the 3D printer. Always clear completed prints promptly so others can use the machine.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
const component  = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/docs">Docs</Link>} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
function ListItem({
  title,
  children,
  href,
  ...props
}) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
        <div className="leading-none font-medium">{title}</div>
        <div className="line-clamp-2 text-muted-foreground">{children}</div>
      </div></Link>} />
    </li>
  )
}