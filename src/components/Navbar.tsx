'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const servicesColumns = [
    {
      title: 'Public Cloud',
      items: [
        { name: 'Licensing & Cloud Consultation', href: '/' },
        { name: 'Cloud Finops', href: '/' },
        { name: 'Cloud Security', href: '/' },
        { name: 'Serverless & Containerization', href: '/' },
        { name: 'Workflow Automation', href: '/' },
        { name: 'Migrations & Managed Services', href: '/' },
      ]
    },
    {
      title: 'Digital Workspace',
      items: [
        { name: 'Microsoft 365', href: '/' },
        { name: 'Copilot', href: '/' },
        { name: 'Security', href: '/' },
        { name: 'Endpoint Management', href: '/' },
        { name: 'Google Workspace', href: '/' },
        { name: 'Zoho Workplace', href: '/' },
      ]
    },
    {
      title: 'AI',
      items: [
        { name: 'AI Readiness Assessment', href: '/' },
        { name: 'AI Adoption', href: '/' },
        { name: 'Agentic AI', href: '/' },
      ]
    },
    {
      title: 'Managed Services',
      items: [
        { name: 'Resource Augmentation', href: '/' },
        { name: 'AIOps, Cloud & DevOps', href: '/' },
        { name: 'Workplace Collab', href: '/' },
      ]
    },
    {
      title: 'App Development',
      items: [
        { name: 'WebApp Design & Development', href: '/' },
        { name: 'App Modernization & Deployment', href: '/' },
      ]
    },
  ]

  const navigationItems = [
    { name: 'Vision', href: '/vision' },
    { 
      name: 'Services', 
      href: '#',
      hasDropdown: true,
    },
    { name: 'Resources', href: '/resources' },
    { name: 'Training', href: '/training' },
    { name: 'Contact Us', href: '/' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Techcerv Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center text-gray-900 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors duration-200">
                      {item.name}
                      <ChevronDownIcon className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div className={`fixed left-0 right-0 mt-0 transition-all duration-200 ${
                      isServicesOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    style={{ top: '80px' }}>
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-[#1e4a8f] rounded-lg shadow-2xl p-8">
                          <div className="grid grid-cols-5 gap-6">
                            {servicesColumns.map((column, idx) => (
                              <div key={idx} className="space-y-4">
                                <h3 className="text-lg font-semibold text-white border-b border-blue-400 pb-2">
                                  {column.title}
                                </h3>
                                <ul className="space-y-2">
                                  {column.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-gray-200 hover:text-white transition-colors duration-200 block"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-900 hover:text-blue-600 px-4 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/"
              className="bg-[#2b5cb8] hover:bg-[#1e4a8f] text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
            >
              <span>Get Started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2 mb-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-4 space-y-3 transition-all duration-200 ${
                      isServicesOpen ? 'block mt-2' : 'hidden'
                    }`}>
                      {servicesColumns.map((column, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-semibold text-gray-900 mb-1">{column.title}</h4>
                          {column.items.map((serviceItem, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={serviceItem.href}
                              className="block text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-3 py-1.5 rounded-md text-xs transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {serviceItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Get Started Button */}
            <Link
              href="/get-started"
              className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar