"use client";

import { useState } from "react";
import DoctorCard from "./doctor-card";
import BookingModal from "./booking-modal";
import FilterComponent from "./filter-component";
import type { Appointment, Doctor } from "@/lib/types";

interface DoctorDirectoryProps {
  doctors: Doctor[];
  onBookAppointment: (doctor: Doctor) => void;
  isModalOpen: boolean;
  selectedDoctor: Doctor | null;
  onCloseModal: () => void;
  onConfirmAppointment: (appointment: Appointment) => void;
}

export default function DoctorDirectory({
  doctors,
  onBookAppointment,
  isModalOpen,
  selectedDoctor,
  onCloseModal,
  onConfirmAppointment,
}: DoctorDirectoryProps) {
  const [specialty, setSpecialty] = useState<string>("all");
  const [availability, setAvailability] = useState<string>("all");

  const specialties = [
    "all",
    ...new Set(doctors.map((doctor) => doctor.specialty)),
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty =
      specialty === "all" || doctor.specialty === specialty;
    const matchesAvailability =
      availability === "all" ||
      (availability === "available" && doctor.availableSlots.length > 0);
    return matchesSpecialty && matchesAvailability;
  });

  return (
    <div>
      <FilterComponent
        specialties={specialties}
        specialty={specialty}
        availability={availability}
        onSpecialtyChange={setSpecialty}
        onAvailabilityChange={setAvailability}
      />

      {filteredDoctors.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-500">
            No doctors match your filters. Please try different criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={onBookAppointment}
            />
          ))}
        </div>
      )}

      {isModalOpen && selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          isOpen={isModalOpen}
          onClose={onCloseModal}
          onConfirm={onConfirmAppointment}
        />
      )}
    </div>
  );
}
