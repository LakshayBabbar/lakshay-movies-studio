"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useSend from "@/hooks/useSend";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { fetchData, isError, loading, error } = useSend();
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetchData("/api/login", "POST", data);
    setData({
      username: "",
      password: "",
    });
    console.log(res);
  };
  function dataHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="flex flex-col p-10 w-full sm:w-[25rem] rounded-xl sm:shadow-xl sm:border gap-4"
        onSubmit={submitHandler}
      >
        <h1 className="text-center text-3xl font-bold py-4">Admin Login</h1>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={dataHandler}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={dataHandler}
          required
        />
        <Button disabled={loading}>{loading ? "Please wait!" : "Login"}</Button>
        <p className="text-red-500">{isError && error}</p>
      </form>
    </div>
  );
};

export default Login;
