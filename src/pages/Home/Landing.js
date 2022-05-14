import React from "react";
import bucketGirl from '../../assets/images/bucketgirl.png';

const Landing = () => {
    return (
        <div>
            <div class="hero h-screen lg:h-[60vh] bg-accent">
                <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="h-[60vh] shrink-0">
                        <img
                            src={bucketGirl}
                            class="w-80 md:h-full md:w-auto"
                            alt="bucket-girl"
                        />
                    </div>
                    <div>
                        <p className="text-xl ms-1">Best Quality</p>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-xl">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* Free Estimate */}
            <div className="shadow-lg p-10 w-3/4 mx-auto bg-base-200 mt-[-60px] relative z-99 rounded-xl">
                <h1 className="text-3xl mb-6">Get Free Estimate</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
            </div>
        </div>
    );
};

export default Landing;
