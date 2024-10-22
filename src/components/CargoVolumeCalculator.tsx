'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Dimensions {
  length: string;
  width: string;
  height: string;
  pieces: string;
}

interface Units {
  length: string;
  width: string;
  height: string;
}

interface Results {
  volume: string | null;
  totalVolume: string | null;
}

const CargoVolumeCalculator: React.FC = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    length: '', width: '', height: '', pieces: '1'
  });
  const [units, setUnits] = useState<Units>({
    length: 'm', width: 'm', height: 'm'
  });
  const [results, setResults] = useState<Results>({
    volume: null, totalVolume: null
  });

  const convertToMeters = (value: string, unit: string): number => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return 0;
    switch (unit) {
      case 'mm': return numValue / 1000;
      case 'cm': return numValue / 100;
      case 'm': return numValue;
      default: return numValue;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDimensions(prev => ({ ...prev, [name]: value }));
  };

  const handleUnitChange = (name: keyof Units, value: string) => {
    setUnits(prev => ({ ...prev, [name]: value }));
  };

  const calculateVolume = () => {
    const l = convertToMeters(dimensions.length, units.length);
    const w = convertToMeters(dimensions.width, units.width);
    const h = convertToMeters(dimensions.height, units.height);
    const p = parseInt(dimensions.pieces, 10) || 1;

    if (l > 0 && w > 0 && h > 0) {
      const singleVolume = l * w * h;
      const totalVol = singleVolume * p;
      setResults({
        volume: singleVolume.toFixed(2),
        totalVolume: totalVol.toFixed(2)
      });
    } else {
      alert('Please enter valid positive numbers for all dimensions.');
    }
  };

  const renderInputGroup = (label: string, name: keyof Dimensions) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex space-x-2">
        <input
          type="number"
          id={name}
          name={name}
          value={dimensions[name]}
          onChange={handleInputChange}
          placeholder={`Enter ${label.toLowerCase()}`}
          className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#042d62] focus:border-[#042d62]"
        />
        {name !== 'pieces' && (
          <select
            value={units[name as keyof Units]}
            onChange={(e) => handleUnitChange(name as keyof Units, e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#042d62] focus:border-[#042d62]"
          >
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
          </select>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-center mb-4">
          <Image
            src="/LoadSure.png"
            alt="LoadSure Logo"
            width={150}
            height={60}
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-[#042d62] mb-6">Cargo Volume Calculator</h2>
        <div className="space-y-6">
          {renderInputGroup('Length', 'length')}
          {renderInputGroup('Width', 'width')}
          {renderInputGroup('Height', 'height')}
          {renderInputGroup('Number of Pieces', 'pieces')}
        </div>
        <div className="mt-6">
          <button
            onClick={calculateVolume}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#042d62] hover:bg-[#031d3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#042d62]"
          >
            Calculate Volume
          </button>
        </div>
        {results.volume !== null && results.totalVolume !== null && (
          <div className="mt-6 text-center bg-gray-100 p-4 rounded-md space-y-2">
            <p className="text-lg font-semibold text-gray-900">
              Volume per piece: {results.volume} m³
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Total volume: {results.totalVolume} m³
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CargoVolumeCalculator;