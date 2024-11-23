import React from "react";

const Footer = () => {
  return (
<footer className="flex w-full justify-center items-center flex-col bg-blue-1 mt-14 text-white">
  <div className="flex flex-wrap w-11/12 py-10 gap-y-6">
    {/* Contacts */}
    <div className="flex flex-col w-full sm:w-6/12 lg:w-3/12 px-4">
      <h1 className="nnf-semi-bold text-xl uppercase">Contacts</h1>
      <ul>
        <li>Phone: +51 123 456 789</li>
        <li>Mail: luissaavedrafalcon23@gmail.com</li>
        <li>Address: Calle 123</li>
      </ul>
    </div>

    {/* Information */}
    <div className="flex flex-col w-full sm:w-6/12 lg:w-3/12 px-4">
      <h1 className="nnf-semi-bold text-xl uppercase">Information</h1>
      <ul>
        <li>Policies</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
    </div>

    {/* Developer by */}
    <div className="flex flex-col w-full sm:w-6/12 lg:w-3/12 px-4">
      <h1 className="nnf-semi-bold text-xl uppercase">Developer by</h1>
      <div className="h-full flex flex-col">
        <h2 className="text-lg">Luis Saavedra Falcon</h2>
        <h2>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/luissaavedradev/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            @luissaavedradev
          </a>
        </h2>
        <h2>
          GitHub:{" "}
          <a
            href="https://github.com/luisdevelop23"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            @luisdevelop23
          </a>
        </h2>
      </div>
    </div>

    {/* Redes */}
    <div className="flex flex-col w-full sm:w-6/12 lg:w-3/12 px-4">
      <h1 className="nnf-semi-bold text-xl uppercase">Redes</h1>
      <div className="flex gap-x-4 py-4">
        <a href="">
          <i className="p-5 icon-[uil--facebook]"></i>
        </a>
        <a href="">
          <i className="p-5 icon-[hugeicons--instagram]"></i>
        </a>
        <a href="">
          <i className="p-5 icon-[fa6-brands--tiktok]"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
