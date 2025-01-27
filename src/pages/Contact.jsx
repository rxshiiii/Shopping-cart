import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Have questions, feedback, or need assistance? We’re here to help!
        Reach out to us using the details below:
      </p>
      <div className="mt-8">
        <p className="text-gray-700 text-lg">
          <strong>Email:</strong> support@ecommerce.com
        </p>
        <p className="text-gray-700 text-lg mt-2">
          <strong>Phone:</strong> +91 12345 67890
        </p>
        <p className="text-gray-700 text-lg mt-2">
          <strong>Address:</strong> 123, E-commerce Street, Mumbai, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
