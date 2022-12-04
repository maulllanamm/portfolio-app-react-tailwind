import React from 'react';
import DescriptionProject from '../Atoms/DescriptionProject';
import ImageProject from '../Atoms/ImageProject';

export default function ProjectBox() {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <ImageProject />
      <DescriptionProject
        title="Clothing Project"
        desc="This website created by Vue JS. The website has 3 pages of content. the first one is page for the men's categorty, the second one is page for the women category, and the last one the page for except the both of them. this website use public api for cloting api."
      />
    </div>
  );
}
