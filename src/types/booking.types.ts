export interface BookingEnquiryData {
  guestName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number | string;
  rooms: number | string;
  phone?: string;
  additionalRequirements?: string;
}

export interface BookingContextType {
  isOpen: boolean;
  selectedRoom: string;
  openBooking: (roomName?: string) => void;
  closeBooking: () => void;
}

