import {
  faReact,
  faNodeJs,
  faDocker,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Categories() {
  return (
    <div className="flex justify-between text-xl">
      <span className="">
        <FontAwesomeIcon className="mr-1" icon={faReact} />
        Web Dev
      </span>
      <span className="">
        <FontAwesomeIcon className="mr-1" icon={faNodeJs} />
        Backend
      </span>
      <span className="">
        <FontAwesomeIcon className="mr-1" icon={faDocker} />
        DevOps
      </span>
      <span className="">
        <FontAwesomeIcon className="mr-1" icon={faLinux} />
        Linux
      </span>
    </div>
  );
}
