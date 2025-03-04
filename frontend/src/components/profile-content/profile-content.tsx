import "./profile-content.css";
import { ProfileHeader } from "./profile-content-header";
import { ProfileBody } from "./profile-content-body";
import { ProfileFooter } from "./profile-content-footer";

export const ProfileContent = () => {
  return (
    <>
      <div className="validate">
        <section className="validate__content">
          <ProfileHeader />
          <ProfileBody />
        </section>
        <ProfileFooter />
      </div>
    </>
  );
};
