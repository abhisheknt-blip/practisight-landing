'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col p-6 space-y-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="self-end p-2 text-gray-700 hover:text-gray-900"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Menu Items */}
          <Link
            href="/contact"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={onClose}
          >
            Contact
          </Link>

          <a
            href="https://app.practisight.com/login"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={onClose}
          >
            Sign In
          </a>

          <a
            href="https://app.practisight.com/signup"
            className="block w-full py-3 px-6 text-center rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            onClick={onClose}
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}
