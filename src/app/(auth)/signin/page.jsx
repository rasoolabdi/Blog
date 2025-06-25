"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { signinApi } from "@/services/authService";
import { useRouter } from "next/navigation";

const schema = yup.object({
    email: yup.string().email("لطفا ایمیل معتبر وارد نمایید").required("لطفا ایمیل را وارد نمایید"),
    password: yup.string().min(8 , "کلمه عبور حداقل 8 کاراکتر باید باشد").required("لطفا کلمه عبور را وارد نمایید")
}).required();

function Signin() {
    const router = useRouter();
    const { register , handleSubmit , formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    });
    

    const onSubmit = async (values) => {
        try{
            const { message } = await signinApi(values);
            toast.success(message);
            router.push("/profile");
        }
        catch(error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">ورود</h1>
            <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField
                    name="email"
                    label="ایمیل"
                    register={register}
                    required
                    dir="ltr"
                    errors={errors}
                />
                <RHFTextField
                    name="password"
                    label="کلمه عبور"
                    register={register}
                    required
                    dir="ltr"
                    errors={errors}
                /> 
                <Button className="btn btn--primary w-full">تایید</Button>
            </form>
            <Link href="/signup" className="text-secondary-500 mt-6 text-center">ثبت نام</Link>
        </div>
    )
};
export default Signin;