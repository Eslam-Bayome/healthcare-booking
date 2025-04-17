"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Doctor } from "@/lib/types"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"

interface DoctorCardProps {
  doctor: Doctor
  onBookAppointment: (doctor: Doctor) => void
}

export default function DoctorCard({ doctor, onBookAppointment }: DoctorCardProps) {
  const { name, photo, specialty, rating, location, availableSlots } = doctor

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            <Image
              src={photo || "/placeholder.svg"}
              alt={`Dr. ${name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Dr. {name}</h2>
            <p className="text-gray-500">{specialty}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 mr-1" aria-hidden="true" />
          <span className="text-sm">{rating} Rating</span>
        </div>
        <div className="flex items-start mb-2">
          <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-0.5" aria-hidden="true" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="mt-2">
          <p className="text-sm font-medium">
            {availableSlots.length > 0 ? `${availableSlots.length} time slots available` : "No availability"}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => onBookAppointment(doctor)}
          className="w-full"
          disabled={availableSlots.length === 0}
          aria-label={`Book appointment with Dr. ${name}`}
        >
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  )
}
