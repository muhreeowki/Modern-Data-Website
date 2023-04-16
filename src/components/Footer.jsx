import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaDribbble,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-14 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aspernatur, repellat fugiat maiores consequatur, expedita quae
          blanditiis fugit ipsa natus sunt quia voluptatibus obcaecati magnam?
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaGithub size={30} />
          <FaTwitter size={30} />
          <FaInstagram size={30} />
          <FaDribbble size={30} />
          <FaFacebook size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h5 className="font-medium text-gray-400">Solutions</h5>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Support</h5>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Company</h5>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Legal</h5>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
