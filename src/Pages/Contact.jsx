import React from 'react';
import ContactBody from '../Components/Organism/ContactBody';
import ContactHeader from '../Components/Organism/ContactHeader';

export default function Contact() {
  return (
    <section className="text-gray-400 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <ContactHeader
          title="Contact Me"
          subtitle="If you'd like to know more about my work or experience feel free to get
        in touch. See Yaa 🖐"
        />
        <ContactBody />
      </div>
    </section>
  );
}
