"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";

// export const metadata = {
//     title: "ثبت نام"
// };


function Signup() {
    const {register , handleSubmit , formState={ errors} } = useForm();

    const onSubmit = (data) => {

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
                    validationSchema={{
                        name: {
                            required: "لطفا نام و نام خانوادگی را وارد نمایید",
                            minLength: {
                                value: 30,
                                message: "نام و نام خانوادگی بیشتر از 30 کاراکتر نمیتواند باشد"
                            }
                            
                        }
                    }}
                />
                <RHFTextField 
                    name="email"
                    label= "ایمیل"
                    register={register}
                    required
                    dir="ltr"
                    type="email"
                    errors={errors}
                    validationSchema={{
                        email: {
                            required: "لطفا ایمیل معتبر را وارد نمایید",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "ایمیل معتبر نمی باشد"
                            }
                        }
                    }}
                />
                <RHFTextField 
                    name="password"
                    label= "رمز عبور"
                    register={register}
                    required
                    dir="ltr"
                    type="password"
                    // errors={errors}
                    validationSchema={{
                        password: {
                            required: "لطفا رمز عبور را وارد نمایید",
                            minLength: {
                                value: 8,
                                message: "رمز عبور حداقل 8 کاراکتر باید باشد"
                            }
                        }
                    }}
                    className="font-sans"
                />
                <Button className="w-full" variant="primary" type="submit">ثبت نام</Button>
            </form>
        </div>  
    )
};
export default Signup;