import exifr from 'exifr';

async function getLocationInfo(latitude: number, longitude: number) {
  try {
    // Add a delay before making the API request
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
      {
        headers: {
          'User-Agent': 'PhotoExifViewer/1.0',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data = await response.json();
    
    // Extract city name from address components with more detailed logging
    const cityComponents = [
      data.address?.city,
      data.address?.district,
      data.address?.town,
      data.address?.village,
      data.address?.municipality,
      data.address?.suburb,
      data.address?.neighbourhood
    ].filter(Boolean);

    console.log('Available location components:', data.address);
    console.log('Filtered city components:', cityComponents);

    // Use the first available city component
    const city = cityComponents[0] || data.address?.county || 'Not available';
    console.log('Selected city:', city);
    
    return {
      city: city,
      state: data.address?.state || data.address?.county || 'Not available',
      country: data.address?.country || 'Not available',
      address: data.display_name || 'Location information not available'
    };
  } catch (error) {
    console.error('Error fetching location info:', error);
    return {
      city: 'Not available',
      state: 'Not available',
      country: 'Not available',
      address: 'Location information not available'
    };
  }
}

export async function parseExifData(file: File): Promise<any> {
  try {
    // Parse all EXIF data including GPS
    const exif = await exifr.parse(file, true);
    
    // Get image dimensions
    const img = new Image();
    const imgUrl = URL.createObjectURL(file);
    await new Promise((resolve) => {
      img.onload = resolve;
      img.src = imgUrl;
    });
    URL.revokeObjectURL(imgUrl);
    
    // Convert GPS coordinates if available
    let latitude = null;
    let longitude = null;
    let coordinates = '';
    let locationInfo = {
      city: 'Not available',
      state: 'Not available',
      country: 'Not available',
      address: 'Location information not available'
    };
    
    if (exif?.latitude && exif?.longitude) {
      latitude = exif.latitude;
      longitude = exif.longitude;
      coordinates = `${Math.abs(latitude).toFixed(6)}° ${latitude >= 0 ? 'N' : 'S'}, ${Math.abs(longitude).toFixed(6)}° ${longitude >= 0 ? 'E' : 'W'}`;
      locationInfo = await getLocationInfo(latitude, longitude);
    }

    // Format exposure time
    const exposureTime = exif?.ExposureTime ? 
      `1/${Math.round(1/exif.ExposureTime)}` : undefined;

    // Format date and time
    let dateTimeOriginal = new Date();
    if (exif?.DateTimeOriginal) {
      dateTimeOriginal = new Date(exif.DateTimeOriginal);
    }

    return {
      // Camera Information
      make: exif?.Make || 'Unknown',
      model: exif?.Model || 'Unknown',
      exposureTime,
      fNumber: exif?.FNumber,
      flash: exif?.Flash !== undefined ? (exif.Flash === 0 ? 'Not Used' : 'Used') : 'Unknown',
      focalLength: exif?.FocalLength ? `${exif.FocalLength}mm` : undefined,
      iso: exif?.ISO,
      colorSpace: exif?.ColorSpace === 1 ? 'sRGB' : exif?.ColorSpace,
      lensInfo: exif?.LensModel,

      // File Information
      fileName: file.name,
      imageSize: `${img.naturalWidth} × ${img.naturalHeight} pixels`,
      uniqueId: exif?.ImageUniqueID || 'Not available',
      mimeType: file.type,
      resolution: exif?.XResolution && exif?.YResolution ? 
        `${Math.round(exif.XResolution)} × ${Math.round(exif.YResolution)}` : 
        'Unknown',
      dotsPerInch: exif?.ResolutionUnit === 2 ? '72 DPI' : 'Unknown',

      // Date & Time
      date: dateTimeOriginal.toLocaleDateString(),
      time: dateTimeOriginal.toLocaleTimeString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,

      // GPS Information
      latitude,
      longitude,
      latRef: latitude >= 0 ? 'N' : 'S',
      longRef: longitude >= 0 ? 'E' : 'W',
      coordinates,
      altitude: exif?.GPSAltitude ? Math.round(exif.GPSAltitude) : 0,
      direction: exif?.GPSImgDirection,
      directionRef: exif?.GPSImgDirectionRef,
      pointing: exif?.GPSDestBearing,

      // Location Information
      ...locationInfo
    };
  } catch (error) {
    console.error('Error parsing EXIF data:', error);
    throw new Error('Failed to parse image EXIF data');
  }
}