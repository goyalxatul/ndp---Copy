import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Contacts = () => {
  return (
    <div className="p-10">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }} // Initial opacity for fade-in effect
        animate={{ opacity: 1 }} // Animate to full opacity
        transition={{ duration: 1 }} // Animation duration
      >
        <h1 className="text-4xl font-bold">Contacts</h1>
        <p className="mt-4 text-lg">
          Feel free to reach out to us through any of the methods below!
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6"
        initial={{ opacity: 0, y: 20 }} // Start slightly lower and transparent
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
        transition={{ duration: 1 }} // Animation duration
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} // Slide in from the left
            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and neutral position
            transition={{ duration: 0.5, delay: 0.3 }} // Delay for staggering effect
          >
            <h2 className="text-2xl font-bold mb-4">Site Address</h2>
            <p className="text-gray-700 mb-6">
              Nature Delight Foundation<br />
              S. No:132/2A/2, ShubhashreeVilla <br />
              Near Ishan Nagari, Warje<br />
              Pune-411058<br />
              Maharashtra
            </p>

            <h2 className="text-2xl font-bold mb-4">Phone Number</h2>
            <p className="text-gray-700 mb-6">
              (+91) 8087608729
            </p>

            <h2 className="text-2xl font-bold mb-4">Email Addresses</h2>
            <p className="text-gray-700">
              <strong>General inquiries: naturedelightfoundation@gmail.com</strong> <br />
            </p>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} // Slide in from the right
            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and neutral position
            transition={{ duration: 0.5, delay: 0.5 }} // Delay for staggering effect
          >
            <h2 className="text-2xl font-bold mb-4">Registration Number</h2>
            <p className="text-gray-700 mb-6">
              8906060598594040
            </p>

            <h2 className="text-2xl font-bold mb-4">Pune Office</h2>
            <p className="text-gray-700 mb-6">
              S. No: 132/2A/2, ShubhashreeVilla<br />
              Near Ishan Nagari, Warje, Pune 411058<br />
              Maharashtra
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact for Grievances</h2>
            <p className="text-gray-700">
              <strong>Email:</strong> naturedelightfoundation@gmail.com<br />
              <strong>Phone:</strong> (+91) 921177845
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacts;
