"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup.object({
    name: yup.string().min(3 , "نام و نام خانوادگی حداقل 3 کاراکتر باید باشد").max(40 , "نام و نام خانوادگی حداکثر 40 کاراکتر میتواند باشد").required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().min(8 , "کلمه عبور حداقل باید 8 کاراکتر باشد").required("کلمه عبور الزامی است")
}).required();

function Signup() {
    const {register , handleSubmit , formState: {errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    });

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">ثبت نام</h1>
            <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField 
                    name="name"
                    label= "نام و نام خانوادگی"
                    register={register}
                    required
                    errors={errors}
                />
                <RHFTextField 
                    name="email"
                    label= "ایمیل"
                    register={register}
                    required
                    dir="ltr"
                    type="email"
                    errors={errors}
                />
                <RHFTextField
                    name="password"
                    label= "رمز عبور"
                    register={register}
                    required
                    dir="ltr"
                    type="password"
                    errors={errors}
                />
                <Button className="w-full" variant="primary" type="submit">ثبت نام</Button>
            </form>
        </div>
    )
};
export default Signup;