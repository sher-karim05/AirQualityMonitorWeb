import React from "react";

function SocialLink({ link, image, title }) {
  return (
    <a href={link} target="_blank">
      <img
        src={image}
        className="w-7 h-7 object-cover rounded-full object-top mr-2"
        title={title}
      />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex">
      <SocialLink
        link="https://github.com/u-barnwal/AirQualityMonitorWeb"
        image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        title="View on GitHub"
      />

      <SocialLink
        link="https://utsavbarnwal.me"
        image="https://utsavbarnwal.me/images/user.jpeg"
        title="Developer"
      />
    </div>
  );
}

export default SocialLinks;
