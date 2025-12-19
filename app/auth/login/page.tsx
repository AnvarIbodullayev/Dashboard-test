"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { LoginFormValues, loginSchema } from "@/lib/auth-validator";
import { useRouter } from "next/navigation";

function page() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        console.log("data ", data);
        router.push("/dashboard/clients")
    }

    return (
        <form className="w-[25%]" onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Login to your account.
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-6">

                    {/* EMAIL */}
                    <div className="grid gap-3">
                        <Label>Email</Label>
                        <Input
                            placeholder="email@example.com"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label>Password</Label>
                            <Link
                                href="/forgotpassword"
                                className="ml-auto text-sm underline-offset-4 hover:underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>

                        <Input
                            type="password"
                            {...register("password")}
                        />

                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </CardContent>

                <CardFooter>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Loading..." : "Sign In"}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default page