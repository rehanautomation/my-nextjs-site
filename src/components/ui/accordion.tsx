"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

const AccordionOpenContext = React.createContext<{ openItems: string[]; setOpenItems: (v: string[]) => void }>({ openItems: [], setOpenItems: () => {} });

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  const [openItems, setOpenItems] = React.useState<string[]>([]);
  return (
    <AccordionOpenContext.Provider value={{ openItems, setOpenItems }}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        onValueChange={(v: string | string[]) => setOpenItems(Array.isArray(v) ? v : v ? [v] : [])}
        {...props}
      />
    </AccordionOpenContext.Provider>
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const { openItems } = React.useContext(AccordionOpenContext);
  // Get the value prop from the parent AccordionPrimitive.Item
  const itemValue = (props as any)["data-state"] ? undefined : (props as any)["value"];
  // Fallback: try to get value from parent
  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!itemValue && ref.current) {
      // Try to get value from parent node
      const parent = ref.current.closest('[data-state]');
      if (parent) {
        (props as any)["value"] = parent.getAttribute("data-value");
      }
    }
  }, [itemValue, props]);
  // Determine open state
  const value = (props as any)["value"];
  const open = value && openItems.includes(value);
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        ref={ref}
        aria-expanded={open}
        {...props}
      >
        {children}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5"
        >
          <ChevronDownIcon />
        </motion.span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const { openItems } = React.useContext(AccordionOpenContext);
  const value = (props as any)["value"];
  const open = value && openItems.includes(value);
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm"
      {...props}
    >
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn("pt-0 pb-4", className)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
