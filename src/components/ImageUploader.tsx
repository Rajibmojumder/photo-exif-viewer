import React from 'react';
import { Upload, Image as ImageIcon, FileWarning } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  return (
    <div id="upload" className="mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Upload Your Photo
        </h2>
        <p className="text-gray-600">
          Discover the story behind your photos with detailed EXIF data and location information
        </p>
      </div>
      
      <label className="flex flex-col items-center justify-center w-full h-72 border-2 border-dashed 
                      border-indigo-300 rounded-xl cursor-pointer glass-effect hover:border-indigo-500 
                      transition-all duration-300 group">
        <div className="flex flex-col items-center justify-center px-4 py-6 text-center">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-full mb-4 
                        group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
            <Upload className="w-10 h-10 text-indigo-600" />
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Drop your photo here or click to upload
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Supports JPEG images with EXIF data
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <ImageIcon className="w-4 h-4 mr-2" />
              <span>JPEG, JPG</span>
            </div>
            <div className="flex items-center">
              <FileWarning className="w-4 h-4 mr-2" />
              <span>Max 10MB</span>
            </div>
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/jpeg,image/jpg"
          onChange={onImageUpload}
        />
      </label>
    </div>
  );
}