import React from 'react';
import Link from 'next/link'; // Next.js Link import karein
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm mb-4">
            © {new Date().getFullYear()} {"Beauty & Wellness Blog by Tahira. All rights reserved."}
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61561036515275"
            target='_blank'
             passHref>
              <div className="hover:text-blue-500 cursor-pointer">
                <FaFacebook size={24} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/tahira-rajput-983aa82b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzubVj7PURw60j%2FIg0DvwMw%3D%3D"
            target='_blank'
            passHref>
              <div className="hover:text-blue-400 cursor-pointer">
                <FaLinkedin size={24} />
              </div>
            </Link>
            <Link href="https://github.com/tahiralatif" target='_blank' passHref>
              <div className="hover:text-gray-400 cursor-pointer">
                <FaGithub size={24} />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
