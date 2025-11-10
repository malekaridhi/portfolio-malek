import React from "react";
import TitelHeader from "../components/TitelHeader";
import { stackIcons } from "../constants";
import GlowCard from "../components/GlowCard";
const Testamonials = () => {
  return (
    <section id="tech" className="flex-center section-padding">
      <div className="x-full h-full md:px-10 px-5">
        <TitelHeader
          Title="My Preferd Teck Stack"
          sub="⭐ Technologies Highlights"
        />
        <div className="lg:columns-6 md:columns-4 columns-3 mt-16">
          {stackIcons.map((tech) => (
            <GlowCard card="">
              <div className="flex items-center gap-3">
                <div>
                  <img src={tech.imgPath} alt={tech.name} />
                </div>
                <p className="font-bold">{tech.name}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testamonials;
