export interface ExifData {
  // Camera Information
  make?: string;
  model?: string;
  exposureTime?: string;
  fNumber?: number;
  flash?: string;
  focalLength?: string;
  iso?: number;
  colorSpace?: string;
  lensInfo?: string;

  // File Information
  fileName?: string;
  imageSize?: string;
  uniqueId?: string;
  mimeType?: string;
  resolution?: string;
  dotsPerInch?: string;

  // Date & Time
  date?: string;
  time?: string;
  timeZone?: string;
  dateTime?: string;

  // GPS Information
  latitude?: number;
  longitude?: number;
  latRef?: string;
  longRef?: string;
  coordinates?: string;
  altitude?: number;
  direction?: string;
  directionRef?: string;
  pointing?: string;

  // Location Information
  city?: string;
  state?: string;
  country?: string;
  address?: string;
}