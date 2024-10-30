'use client';

import React, { useState } from 'react';

interface Dimensions {
  length: string;
  width: string;
  height: string;
  pieces: string;
  weight: string;
}

interface Units {
  length: string;
  width: string;
  height: string;
  weight: string;
}

interface Results {
  totalArea: string | null;
  totalVolume: string | null;
  totalWeight: string | null;
}

const CargoCalculator: React.FC = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    length: '',
    width: '',
    height: '',
    pieces: '1',
    weight: ''
  });
  
  const [units, setUnits] = useState<Units>({
    length: 'm',
    width: 'm',
    height: 'm',
    weight: 'kg'
  });
  
  const [results, setResults] = useState<Results>({
    totalArea: null,
    totalVolume: null,
    totalWeight: null
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

  const convertToKilograms = (value: string, unit: string): number => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return 0;
    switch (unit) {
      case 'g': return numValue / 1000;
      case 'kg': return numValue;
      case 't': return numValue * 1000;
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

  const calculate = () => {
    const l = convertToMeters(dimensions.length, units.length);
    const w = convertToMeters(dimensions.width, units.width);
    const h = convertToMeters(dimensions.height, units.height);
    const p = parseInt(dimensions.pieces, 10) || 1;
    const weightPerItem = convertToKilograms(dimensions.weight, units.weight);

    if (l > 0 && w > 0) {
      const totalArea = l * w * p;
      
      if (h > 0) {
        const totalVolume = l * w * h * p;
        const totalWeight = weightPerItem * p;
        
        setResults({
          totalArea: totalArea.toFixed(2),
          totalVolume: totalVolume.toFixed(2),
          totalWeight: totalWeight.toFixed(0)
        });
      } else {
        setResults({
          totalArea: totalArea.toFixed(2),
          totalVolume: null,
          totalWeight: weightPerItem > 0 ? (weightPerItem * p).toFixed(0) : null
        });
      }
    } else {
      alert('Please enter valid positive numbers for at least length and width.');
    }
  };

  const renderInputGroup = (
    label: string,
    name: keyof Dimensions,
    required: boolean = true,
    unitOptions?: string[]
  ) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
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
        {name !== 'pieces' && unitOptions && (
          <select
            value={units[name as keyof Units]}
            onChange={(e) => handleUnitChange(name as keyof Units, e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#042d62] focus:border-[#042d62]"
          >
            {unitOptions.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-center mb-4">
          <img
            src="/LoadSure.png"
            alt="LoadSure Logo"
            className="h-[60px] w-[150px] object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-[#042d62] mb-6">Cargo Calculator</h2>
        <div className="space-y-6">
          {renderInputGroup('Length', 'length', true, ['mm', 'cm', 'm'])}
          {renderInputGroup('Width', 'width', true, ['mm', 'cm', 'm'])}
          {renderInputGroup('Height', 'height', false, ['mm', 'cm', 'm'])}
          {renderInputGroup('Weight per Item', 'weight', false, ['g', 'kg', 't'])}
          {renderInputGroup('Number of Pieces', 'pieces')}
        </div>
        <div className="mt-6">
          <button
            onClick={calculate}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#042d62] hover:bg-[#031d3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#042d62]"
          >
            Calculate
          </button>
        </div>
        {(results.totalArea !== null || results.totalVolume !== null || results.totalWeight !== null) && (
          <div className="mt-6 text-center bg-gray-100 p-4 rounded-md space-y-2">
            {results.totalArea !== null && (
              <p className="text-lg font-semibold text-gray-900">
                Total area: {results.totalArea} m²
              </p>
            )}
            {results.totalVolume !== null && (
              <p className="text-lg font-semibold text-gray-900">
                Total volume: {results.totalVolume} m³
              </p>
            )}
            {results.totalWeight !== null && (
              <p className="text-lg font-semibold text-gray-900">
                Total weight: {results.totalWeight} kg
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CargoCalculator;