import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LocationMapProps {
  latitude: number;
  longitude: number;
  hasCoordinates: boolean;
  imageUrl?: string;
  address?: string;
  city?: string;
  country?: string;
}

export function LocationMap({ 
  latitude, 
  longitude, 
  hasCoordinates,
  imageUrl,
  address,
  city,
  country
}: LocationMapProps) {
  // Default to a central location if no coordinates
  const center = hasCoordinates ? [latitude, longitude] : [0, 0];
  const zoom = hasCoordinates ? 13 : 2;

  return (
    <div className="relative h-full">
      <MapContainer
        center={center as [number, number]}
        zoom={zoom}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {hasCoordinates && (
          <Marker position={[latitude, longitude]}>
            <Popup className="custom-popup" maxWidth={300}>
              <div className="p-2">
                {imageUrl && (
                  <div className="mb-3">
                    <img
                      src={imageUrl}
                      alt="Photo location"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900">
                    {city}, {country}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {address}
                  </p>
                  <p className="text-xs text-gray-500">
                    {latitude.toFixed(6)}°, {longitude.toFixed(6)}°
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
      
      {!hasCoordinates && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p className="text-lg font-medium">No location data available</p>
            <p className="text-sm">This photo doesn't contain GPS coordinates</p>
          </div>
        </div>
      )}
    </div>
  );
}