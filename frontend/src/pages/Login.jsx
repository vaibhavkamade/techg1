import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth/auth";
import { toast } from "react-toastify";

const URL = "https://techg1-4.onrender.com/api/auth/login"

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
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
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const res_data = await response.json();
            if (response.ok) {
                // const res_data = await response.json();

                setUser({ email: "", password: "" });
                navigate("/");
                toast.success("Login successful");
                // alert("Login successful");
                storeTokenInLS(res_data.token);
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                // alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("Invalid credential");
                console.log("login form", response)
            }
        } catch (error) {
            console.log(error);
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
                                    src="/src/assets/images/login.jpg"
                                    alt="a boy is trying to do registeration"
                                    width="700px"
                                    height="500px"
                                />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
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
                                    <button type="submit" className="btn btn-submit">Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};