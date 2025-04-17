import type { Doctor } from "./types"
import { addDays, setHours, setMinutes } from "date-fns"

// Helper function to create time slots for the next 7 days
const createTimeSlots = (daysAhead = 7, slotsPerDay = 8, startHour = 9) => {
  const slots = []
  const today = new Date()

  for (let day = 0; day < daysAhead; day++) {
    const date = addDays(today, day)

    for (let slot = 0; slot < slotsPerDay; slot++) {
      const hour = startHour + Math.floor(slot / 2)
      const minute = (slot % 2) * 30

      const slotDate = setMinutes(setHours(date, hour), minute)

      slots.push({
        id: `slot-${day}-${slot}`,
        date: slotDate.toISOString(),
      })
    }
  }

  return slots
}

// Create a set of time slots
const allTimeSlots = createTimeSlots()

// Randomly select a subset of slots for each doctor
const getRandomSlots = (min = 0, max = allTimeSlots.length) => {
  const numSlots = Math.floor(Math.random() * (max - min)) + min
  const shuffled = [...allTimeSlots].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, numSlots)
}

export const doctors: Doctor[] = [
  {
    id: "doctor-1",
    name: "Sarah Johnson",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Cardiology",
    rating: 4.8,
    location: "New York Medical Center",
    availableSlots: getRandomSlots(5, 12),
  },
  {
    id: "doctor-2",
    name: "Michael Chen",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Dermatology",
    rating: 4.7,
    location: "Downtown Health Clinic",
    availableSlots: getRandomSlots(3, 10),
  },
  {
    id: "doctor-3",
    name: "Emily Rodriguez",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Pediatrics",
    rating: 4.9,
    location: "Children's Hospital",
    availableSlots: getRandomSlots(8, 15),
  },
  {
    id: "doctor-4",
    name: "David Kim",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Orthopedics",
    rating: 4.6,
    location: "Sports Medicine Center",
    availableSlots: getRandomSlots(4, 9),
  },
  {
    id: "doctor-5",
    name: "Jessica Patel",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Neurology",
    rating: 4.8,
    location: "Neurological Institute",
    availableSlots: getRandomSlots(2, 7),
  },
  {
    id: "doctor-6",
    name: "Robert Wilson",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Psychiatry",
    rating: 4.5,
    location: "Mental Health Clinic",
    availableSlots: getRandomSlots(6, 11),
  },
  {
    id: "doctor-7",
    name: "Lisa Thompson",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Ophthalmology",
    rating: 4.7,
    location: "Vision Care Center",
    availableSlots: getRandomSlots(0, 0), // No availability
  },
  {
    id: "doctor-8",
    name: "James Martinez",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Cardiology",
    rating: 4.6,
    location: "Heart & Vascular Institute",
    availableSlots: getRandomSlots(7, 14),
  },
  {
    id: "doctor-9",
    name: "Sophia Lee",
    photo: "/placeholder.svg?height=200&width=200",
    specialty: "Dermatology",
    rating: 4.9,
    location: "Skin Care Clinic",
    availableSlots: getRandomSlots(5, 10),
  },
]
