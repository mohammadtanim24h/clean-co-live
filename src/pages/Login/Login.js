import React from "react";

const Login = () => {
    return (
        <div className="bg-accent h-screen flex justify-center items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-primary text-center text-3xl font-medium">Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="password"
                            className="input input-bordered"
                        />
                        <label className="label">
                            <a href="#" className="text-sm link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-glass hover:btn-primary duration-200">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
