import React, { useEffect } from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto min-h-screen bg-black text-white px-3 md:px-10">
                <div className="fixed -top-12 hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden lg:block lg:max-w-[450px] xl:max-w-[640px]"
                        alt="Signup"
                    />
                </div>
                <div className="flex py-24 lg:ml-[680px] xl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="Moonton" />
                        <div className="my-16">
                            <div className="mb-3 text-[26px] font-semibold">
                                Welcome Back
                            </div>
                            <p className="text-base leading-7 text-gray-400">
                                Explore our new movies and get <br />a better
                                insight for your life
                            </p>
                            <ValidationErrors errors={errors} />
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        htmlFor="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={data.email}
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="password"
                                        value="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={data.password}
                                        handleChange={onHandleChange}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid mt-7 space-y-3.5">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    processing={processing}
                                >
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </Button>
                                <Link href={route("register")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
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
