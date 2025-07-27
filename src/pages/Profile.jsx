import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("userData"));

  const defaultUserData = {
    name: "",
    email: "",
    phone: "",
    role: "employee",
    avatar: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    businessName: "",
    started: "",
    joined: "",
    shift: "",
    supervisor: ""
  };

  const userData = storedUser || defaultUserData;
  const userType = userData.role;

  const [formData, setFormData] = useState(userData);
  const [profileImg, setProfileImg] = useState(userData.avatar);

  useEffect(() => {
    setFormData(userData);
    setProfileImg(userData.avatar);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    console.log("Updated Data:", formData, profileImg);
    alert("Profile updated successfully!");
    // Optionally save back to localStorage
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...formData, avatar: profileImg })
    );
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-img-wrapper">
          <img src={profileImg} alt="Profile" className="profile-avatar" />
          <label className="upload-btn">
            Upload
            <input type="file" onChange={handleImageUpload} hidden />
          </label>
        </div>

        <div className="profile-form">
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={formData.role}
              disabled
            />
          </label>

          {userType === "owner" && (
            <>
              <label>
                Business Name:
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Active Since:
                <input
                  type="text"
                  name="started"
                  value={formData.started}
                  onChange={handleChange}
                />
              </label>
            </>
          )}

          {userType === "employee" && (
            <>
              <label>
                Joined On:
                <input
                  type="text"
                  name="joined"
                  value={formData.joined}
                  onChange={handleChange}
                />
              </label>
              <label>
                Shift:
                <input
                  type="text"
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                />
              </label>
              <label>
                Supervisor:
                <input
                  type="text"
                  name="supervisor"
                  value={formData.supervisor}
                  onChange={handleChange}
                />
              </label>
            </>
          )}

          <button className="save-btn" onClick={handleSubmit}>
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
