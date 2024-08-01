import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth/auth";
import { toast } from "react-toastify";
import './Register.css';

const URL = "https://techg1-4.onrender.com/api/auth/register"

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            //   console.log("response data : ", response);

            const res_data = await response.json();
            console.log("res from server", res_data.extraDetails);

            if (response.ok) {

                // store token in localhost
                storeTokenInLS(res_data.token);
                setUser({ username: "", email: "", phone: "", password: "" });
                navigate("/login");
                toast.success("Registration successful");
                // alert("registration successful");
                // storeTokenInLS(res_data.token);
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                // alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                // console.log("error inside response ", "error");
            }
        } catch (error) {
            console.log("register", error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registeration">
                        <div className="container grid grid-two-cols">
                            <div className="registeration-image">
                                <img
                                    src="/src/assets/images/registration-removebg-preview.png"
                                    alt="a boy is trying to do registeration"
                                    width="700px"
                                    height="500px"
                                />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">registeration form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input type="text"
                                            name="username"
                                            placeholder="username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email"
                                            name="email"
                                            placeholder="enter your email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input type="number"
                                            name="phone"
                                            placeholder="phone"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password"
                                            name="password"
                                            placeholder="password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};