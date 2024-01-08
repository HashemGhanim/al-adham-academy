import React, {Fragment, useEffect, useState} from 'react';
import {Dialog , Transition} from "@headlessui/react";
import Swal from "sweetalert2";
import image1 from '../../GlobalTools/avatarLogo/9439685.jpg';
import image2 from '../../GlobalTools/avatarLogo/9439775.jpg';
import image3 from '../../GlobalTools/avatarLogo/9434619.jpg';
import image4 from '../../GlobalTools/avatarLogo/9439682.jpg';
import image5 from '../../GlobalTools/avatarLogo/9439726.jpg';
import image6 from '../../GlobalTools/avatarLogo/9439729.jpg';
import uuid from "react-uuid";

function previewImage({previewUrl, setPreviewUrl}){
    return (
      <div className={"flex items-center justify-between w-full"}>
          <img src={previewUrl} className="h-28 w-28 my-2 rounded-lg"/>
          <button
              type="button"
              className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-[#dc3545] px-4 py-2 text-sm font-medium text-white hover:bg-[#e35c6a] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={()=> {
                  setPreviewUrl('')
              }}
          >
              Clear
          </button>
      </div>
    );
}

function uploadImage({handleImageChange , previewUrl, setPreviewUrl}){
    return (
        previewUrl? previewImage({previewUrl , setPreviewUrl}):
        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file"
                   className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                        className="font-semibold">Click to upload</span> or drag and
                        drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG,
                        JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden"  onChange={handleImageChange} />
            </label>
        </div>
    )
}



function ImageModal({openModal, setOpenModal, setProfileImage}) {
    const [images , setImages] = useState([
        image1 , image2 , image3 , image4 , image5 , image6
    ]);
    const [image, setImage] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const  handleImg = (e)=>{
        if(e.target.src.toString().includes('static/media'))
            setPreviewUrl(e.target.src);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(previewUrl != '' && !previewUrl.startsWith('blob')){
            setProfileImage(previewUrl);
            setTimeout(()=>{
                setOpenModal(false);
                setPreviewUrl('');
                setImage('');
            } , 1);
        }
        else if(image.type != null && image.type.includes("image")){
            const public_id = uuid();
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'jpmydw4x'); // Replace with your preset
            formData.append('cloud_name', 'dqerx3w4l'); // Replace with your cloud name
            formData.append('public_id', public_id);

            try {
                const response = await fetch(`https://api.cloudinary.com/v1_1/dqerx3w4l/image/upload`, {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                setProfileImage(data.url);
            } catch (error) {
                console.error('Error:', error);
            }

            setTimeout(()=>{
                setOpenModal(false);
                setPreviewUrl('');
                setImage('');
            } , 1);
        }else if(image.type){
            Swal.fire({
                title: "This Is Not Image !",
                text: "Please you should upload an image !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, upload again !"
            }).then((result)=>{
                if(result.isConfirmed){
                    Swal.fire({
                        title: "You need to clear the files !",
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result)=>{
                        if(result.isConfirmed) {
                            setImage('');
                            setPreviewUrl('');
                        }
                    })
                }
            });
        }else{
            Swal.fire({
                title: "Upload an Image please.",
                text: "Please you should upload an image !",
                icon: "error",
                showCancelButton: true,
            });
        }

    };



    return (
        <>
            <Transition appear show={openModal} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={()=> setOpenModal(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        {uploadImage({handleImageChange, previewUrl, setPreviewUrl})}
                                        <div className="mt-2">
                                            <div className="grid grid-cols-3 grid-rows-2 gap-1">
                                                {
                                                    images.map((image)=>(
                                                            <div className="h-[130px] w-[130px] rounded-lg">
                                                                <img src={image} className="object-cover object-center rounded-lg h-full w-full cursor-pointer transition transition-all duration-300 hover:scale-95" onClick={handleImg}/>
                                                            </div>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={handleSubmit}
                                            >
                                                Change
                                            </button>
                                            <button
                                                type="button"
                                                className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-[#dc3545] px-4 py-2 text-sm font-medium text-white hover:bg-[#e35c6a] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={()=> {
                                                    setOpenModal(false);
                                                    setImage('');
                                                    setPreviewUrl('')
                                                }}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
        </>
    );
}

export default ImageModal;