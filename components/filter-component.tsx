"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterComponentProps {
  specialties: string[]
  specialty: string
  availability: string
  onSpecialtyChange: (value: string) => void
  onAvailabilityChange: (value: string) => void
}

export default function FilterComponent({
  specialties,
  specialty,
  availability,
  onSpecialtyChange,
  onAvailabilityChange,
}: FilterComponentProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
      <div className="w-full md:w-1/2">
        <Label htmlFor="specialty-filter" className="mb-2 block">
          Specialty
        </Label>
        <Select value={specialty} onValueChange={onSpecialtyChange}>
          <SelectTrigger id="specialty-filter" aria-label="Filter by specialty">
            <SelectValue placeholder="Select specialty" />
          </SelectTrigger>
          <SelectContent>
            {specialties.map((s) => (
              <SelectItem key={s} value={s}>
                {s === "all" ? "All Specialties" : s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-1/2">
        <Label htmlFor="availability-filter" className="mb-2 block">
          Availability
        </Label>
        <Select value={availability} onValueChange={onAvailabilityChange}>
          <SelectTrigger id="availability-filter" aria-label="Filter by availability">
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Doctors</SelectItem>
            <SelectItem value="available">Available Only</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
