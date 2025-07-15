"use client";

import { useCategories } from "@/hooks/useCategories";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import SpinnerMini from "@/ui/SpinnerMini";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import useCreatePost from "./useCreatePost";
import { useRouter } from "next/navigation";

const schema = yup.object({
    title: yup.string().min(5 , "عنوان پست حداقل 5 کاراکتر باید باشد").required("لطفا عنوان پست را وارد نمایید"),
    briefText: yup.string().min(5 , "توضیحات کوتاه متن باید حداقل 5 کاراکتر باشد").required("لطفا توضیحات کوتاه متن را وارد نمایید"),
    text: yup.string().min(10 , "توضیحات متن حداقل 10 کاراکتر باید باشد").required("لطفا توضیحات کامل متن را وارد نمایید"),
    slug: yup.string().required("لطفا اسلاگ را وارد نمایید"),
    readingTime: yup.number().positive().integer().required("لطفا زمان مطالعه را وارد نمایید").typeError("یک عدد را باید وارد کنید"),
    category: yup.string().required("لطفا دسته بندی را وارد نمایید"),
}).required();

function CreatePostForm() {
    const { categories } = useCategories();
    const [coverImageUrl , setCoverImageUrl] = useState(null);
    const {isCreating , createPost} = useCreatePost();
    const router = useRouter();

    const { register , formState: {errors} , handleSubmit , reset, control , setValue} = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        const formData = new FormData();
        for(const key in data) {
            formData.append(key , data[key]);
        };
        createPost(formData , {
            onSuccess: () => {
                router.push("/profile/posts")
            }
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <RHFTextField 
                label="عنوان"
                name="title"
                register={register}
                required
                errors={errors}
            />
            <RHFTextField 
                label="متن کوتاه"
                name="briefText"
                register={register}
                required
                errors={errors}
            />
            <RHFTextField 
                label="متن"
                name="text"
                register={register}
                required
                errors={errors}
            />
            <RHFTextField 
                label="اسلاگ"
                name="slug"
                register={register}
                required
                errors={errors}
            />
            <RHFTextField 
                label="زمان مطالعه"
                name="readingTime"
                register={register}
                required
                errors={errors}
            />
            <RHFSelect 
                name="category"
                label="دسته بندی"
                regsiter={register}
                required
                errors={errors}
                options={categories}
            />
            <Controller 
                name="coverImage"
                control={control}
                rules={{ required: "تصویر پست الزامی است" }}
                render={({ field : {value , onChange , ...rest} }) => {
                    return (
                        <FileInput 
                            { ...rest }
                            type="file"
                            label="تصویر پست"
                            name="coverImage"
                            isRequired
                            errors={errors}
                            value={value?.filename}
                            onChange={(event) => {
                                const file = event.target.files[0];
                                onChange(file);
                                setCoverImageUrl(URL.createObjectURL(file));
                                event.target.value = null;
                            }}
                        />
                    )
                }}
            />
            {coverImageUrl && (
                <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                        fill
                        alt="cover-image"
                        src={coverImageUrl}
                        className="object-cover object-center"
                    />
                    <ButtonIcon
                    onClick={() => {
                        setCoverImageUrl(null);
                        setValue("coverImage" , null);
                    }}
                        variant="red"
                        className="w-6 h-6 absolute left-4 top-4"
                    >
                        <XMarkIcon />
                    </ButtonIcon>
                </div>
            )
            }

            <div>
                {isCreating ? (<SpinnerMini />) : (
                    <Button variant="primary" type="submit" className="w-full">تایید</Button>
                )}
            </div>
        </form>
    )
};
export default CreatePostForm;