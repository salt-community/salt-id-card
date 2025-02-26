import "./log-in.css";
import {LogInLeft} from "./log-in-left";
import {LogInRight} from "./log-in-right";


export const LogIn = () => {
  return (
      <div className="logged-out-container">
        <LogInLeft />
        <LogInRight />
      </div>
  );
};