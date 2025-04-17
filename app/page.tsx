"use client";

import { useState } from "react";
import DoctorDirectory from "@/components/doctor-directory";
import AppointmentsSummary from "@/components/appointments-summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Appointment, Doctor } from "@/lib/types";
import { doctors } from "@/lib/data";

export default function Home() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleConfirmAppointment = (appointment: Appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Healthcare Appointment Booking
      </h1>

      <Tabs defaultValue="doctors" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="doctors">Find Doctors</TabsTrigger>
          <TabsTrigger value="appointments">My Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="doctors">
          <DoctorDirectory
            doctors={doctors}
            onBookAppointment={handleBookAppointment}
            isModalOpen={isModalOpen}
            selectedDoctor={selectedDoctor}
            onCloseModal={handleCloseModal}
            onConfirmAppointment={handleConfirmAppointment}
          />
        </TabsContent>

        <TabsContent value="appointments">
          <AppointmentsSummary appointments={appointments} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
