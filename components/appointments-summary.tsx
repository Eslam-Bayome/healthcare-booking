import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Appointment } from "@/lib/types"
import { format } from "date-fns"
import { Calendar, Clock, MapPin } from "lucide-react"

interface AppointmentsSummaryProps {
  appointments: Appointment[]
}

export default function AppointmentsSummary({ appointments }: AppointmentsSummaryProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Appointments</h2>

      {appointments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">You don't have any appointments scheduled.</p>
          <p className="text-gray-500 mt-2">Book an appointment from the Find Doctors tab.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold">Dr. {appointment.doctorName}</h3>
                <p className="text-gray-500">{appointment.specialty}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" aria-hidden="true" />
                    <span className="text-sm">{format(new Date(appointment.date), "EEEE, MMMM d, yyyy")}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" aria-hidden="true" />
                    <span className="text-sm">{format(new Date(appointment.date), "h:mm a")}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" aria-hidden="true" />
                    <span className="text-sm">{appointment.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
