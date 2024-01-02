import React from "react";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="container d-flex flex-column align-items-center mt-3">
            <div className="d-flex flex-column align-items-center">
                <img
                    src="https://i.pinimg.com/564x/ba/1f/6a/ba1f6a999cf51c2a98b1ba7a4511e95e.jpg"
                    alt=""
                    width={300}
                    className="rounded-circle"
                />
                <h5>Welcome, {user.fname}</h5>
            </div>

            <div className="text-center mt-5">
                <h6>Personal Information</h6>
                <p>Name: {user.fname + " " + user.lname}<br></br>
                Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;