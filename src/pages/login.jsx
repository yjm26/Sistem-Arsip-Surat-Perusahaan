import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/dashboard");
  }

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 relative flex flex-col justify-center items-center bg-gradient-to-bl from-[#0575E6] via-[#02298A] to-[#021B79] text-white p-8 overflow-hidden">
      <div className="absolute w-[585px] h-[634px] rounded-full border-2 border-blue-300 opacity-30 bottom-[-650px] left-7 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[673px] h-[661px] rounded-full border-2 border-blue-300 opacity-30 bottom-[-750px] left-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <h1 className="text-5xl font-bold mb-2">Mata Aer Makmurindo</h1>
        <p className="text-lg">Trusted parking professional</p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">

        <div>
        <div className="flex-col ">
        <h2 className="text-[26px] font-bold mb-4">Hello Again!</h2>
        <p className=" mb-6">Welcome Back</p>
        </div>

        <div className="flex flex-col w-[332px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="default" className="w-full">
              Login
            </Button>
          </form>
        </Form>
        <p className="text-sm text-gray-500 mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password
          </a>
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;