import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/react";

export default function Register() {
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto min-h-screen bg-black text-white px-3 md:px-10">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden lg:block lg:max-w-[450px] xl:max-w-[640px]"
                        alt="Sign Up"
                    />
                </div>
                <div className="flex py-24 lg:ml-[680px] xl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="Moonton" />
                        <div className="my-[70px]">
                            <div className="mb-3 text-[26px] font-semibold">
                                Sign Up
                            </div>
                            <p className="text-base leading-7 text-gray-400">
                                Explore our new movies and get <br />a better
                                insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        htmlFor="fullname"
                                        value="Full Name"
                                    />
                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                        defaultValue="Angga React"
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        defaultValue="anggaforreact@fb.com"
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
                                        placeholder="Your Password"
                                        defaultValue="eeeeeeeeeeeeeee"
                                        className="mt-1 block w-full"
                                    />
                                </div>
                            </div>
                            <div className="mt-[30px] grid space-y-[14px]">
                                <Link href={route("prototype.dashboard")}>
                                    <Button>
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </Button>
                                </Link>
                                <Link href={route("prototype.login")}>
                                    <Button variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
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
