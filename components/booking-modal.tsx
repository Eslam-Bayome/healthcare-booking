"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Appointment, Doctor, TimeSlot } from "@/lib/types"
import { format } from "date-fns"

interface BookingModalProps {
  doctor: Doctor
  isOpen: boolean
  onClose: () => void
  onConfirm: (appointment: Appointment) => void
}

export default function BookingModal({ doctor, isOpen, onClose, onConfirm }: BookingModalProps) {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)

  const handleConfirm = () => {
    if (selectedSlot) {
      const appointment: Appointment = {
        id: `appointment-${Date.now()}`,
        doctorId: doctor.id,
        doctorName: doctor.name,
        specialty: doctor.specialty,
        location: doctor.location,
        timeSlot: selectedSlot,
        date: new Date(selectedSlot.date),
      }
      onConfirm(appointment)
    }
  }

  // Group time slots by date
  const slotsByDate = doctor.availableSlots.reduce(
    (acc, slot) => {
      const dateStr = format(new Date(slot.date), "EEEE, MMMM d, yyyy")
      if (!acc[dateStr]) {
        acc[dateStr] = []
      }
      acc[dateStr].push(slot)
      return acc
    },
    {} as Record<string, TimeSlot[]>,
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" aria-labelledby="booking-modal-title">
        <DialogHeader>
          <DialogTitle id="booking-modal-title">Book Appointment with Dr. {doctor.name}</DialogTitle>
        </DialogHeader>

        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2">
          {Object.entries(slotsByDate).length > 0 ? (
            <RadioGroup
              value={selectedSlot?.id}
              onValueChange={(value) => {
                const slot = doctor.availableSlots.find((s) => s.id === value)
                setSelectedSlot(slot || null)
              }}
            >
              {Object.entries(slotsByDate).map(([date, slots]) => (
                <div key={date} className="mb-6">
                  <h3 className="text-sm font-medium mb-2">{date}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {slots.map((slot) => (
                      <div key={slot.id} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={slot.id}
                          id={slot.id}
                          aria-label={`${format(new Date(slot.date), "h:mm a")}`}
                        />
                        <Label htmlFor={slot.id} className="cursor-pointer">
                          {format(new Date(slot.date), "h:mm a")}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <p className="text-center py-4 text-gray-500">No available time slots</p>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={!selectedSlot} aria-label="Confirm appointment booking">
            Confirm Booking
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
