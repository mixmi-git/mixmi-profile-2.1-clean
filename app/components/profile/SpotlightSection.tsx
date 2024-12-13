'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  link?: string
}

interface SpotlightSectionProps {
  projects: Project[]
  onProjectChange: (index: number, field: keyof Project, value: string) => void
  onAddProject: () => void
  onRemoveProject: (index: number) => void
  onImageChange?: (index: number, file: File | null) => void
}

export function SpotlightSection({ 
  projects, 
  onProjectChange,
  onAddProject,
  onRemoveProject,
  onImageChange
}: SpotlightSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold">Spotlight</h3>
        <p className="text-sm text-gray-400 mt-2">
          Share your projects, collaborations, and featured work
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {projects.map((project, index) => (
          <AccordionItem key={project.id} value={`project-${index}`}>
            <AccordionTrigger className="text-left">
              {project.title || 'New Item'}
            </AccordionTrigger>
            <AccordionContent>
              <Card className="p-4 space-y-4 bg-gray-700">
                <div>
                  <Label htmlFor={`project-title-${index}`}>Title</Label>
                  <Input
                    id={`project-title-${index}`}
                    value={project.title}
                    onChange={(e) => onProjectChange(index, 'title', e.target.value)}
                    placeholder="Item Title"
                  />
                </div>
                <div>
                  <Label htmlFor={`project-description-${index}`}>Description</Label>
                  <Input
                    id={`project-description-${index}`}
                    value={project.description}
                    onChange={(e) => onProjectChange(index, 'description', e.target.value)}
                    placeholder="Project Description"
                  />
                </div>
                <div>
                  <Label htmlFor={`project-link-${index}`}>Link (Optional)</Label>
                  <Input
                    id={`project-link-${index}`}
                    value={project.link || ''}
                    onChange={(e) => onProjectChange(index, 'link', e.target.value)}
                    placeholder="https://"
                  />
                </div>
                <div>
                  <Label>Image</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const files = e.target.files
                      if (files && files.length > 0) {
                        onImageChange?.(index, files[0])
                      }
                    }}
                  />
                </div>
                <Button 
                  type="button" 
                  variant="destructive" 
                  onClick={() => onRemoveProject(index)}
                >
                  <Trash2 className="w-4 h-4 mr-2" /> Remove Item
                </Button>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button type="button" onClick={onAddProject}>
        <Plus className="w-4 h-4 mr-2" /> Add Item
      </Button>
    </div>
  )
} 