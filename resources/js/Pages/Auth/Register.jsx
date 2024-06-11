import React, { useEffect } from "react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto min-h-screen bg-black text-white px-3 md:px-10">
                <div className="fixed -top-12 hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden lg:block lg:max-w-[450px] xl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="flex py-6 lg:ml-[680px] xl:ml-[870px]">
                    <div className="w-[370px]">
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-4">
                            <div className="mb-2 text-[26px] font-semibold">
                                Sign Up
                            </div>
                            <p className="text-base leading-7 text-gray-400">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                            <ValidationErrors errors={errors} />
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label forInput="name" value="Full Name" />
                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your fullname..."
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Your Email Address"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label
                                        forInput="password"
                                        value="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Your Password"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label
                                        forInput="password"
                                        value="Confirm Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Your Password"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="my-4 ">
                                <Button
                                    type="submit"
                                    processing={processing}
                                    className="mb-2"
                                >
                                    Sign Up
                                </Button>
                                <Link href={route("login")}>
                                    <Button variant="light-outline">
                                        Sign In to My Account
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
