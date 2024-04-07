// margin top is not applying on each div

import Robot from '../assets/Robot';

const AboutUs = () => {
  return (
    <div className="bg-aboutUsGradient">
      <div className="flex max-w-7xl mx-auto justify-between">
        <Robot />
        <div className="flex w-8/12 flex-col mt-44 gap-6">
          <div className="text-primary font-medium text-xl ">ABOUT US</div>
          <div className="text-5xl font-bold ">
            We Bring <span className="text-primary">Creative</span> Ideas To
            Life.
          </div>
          <div className="w-24 border-solid border-2 border-white"></div>
          <div className=" font-normal text-base text-primary">
            we Love Creating
          </div>
          <div className="font-light text-xl ">
            Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit NeDque porro Lorem ipsum Neque porro
            Neque porro
            <br />
            <br />
            Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,
            Lorem ipsum Neque quis ipsum
          </div>
          <div className="w-44 h-12 font-normal text-lg border-solid border-2 border-primary flex items-center justify-center">
            READ MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;