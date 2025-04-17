export interface TimeSlot {
  id: string
  date: string // ISO string
}

export interface Doctor {
  id: string
  name: string
  photo: string
  specialty: string
  rating: number
  location: string
  availableSlots: TimeSlot[]
}

export interface Appointment {
  id: string
  doctorId: string
  doctorName: string
  specialty: string
  location: string
  timeSlot: TimeSlot
  date: Date
}
