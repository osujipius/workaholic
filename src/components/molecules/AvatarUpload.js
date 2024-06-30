import React, { useCallback, useState } from "react";
import axios from "axios";
import { Avatar, Badge, Stack, Typography } from "@mui/material";
import camera from "../../assets/blog-logo.jpg";

const AvatarUpload = ({
  onSuccessfulUpload,
  removeImage,
  onError,
  ctaText = "Change image",
  url,
  noText,
  showButtons,
}) => {
  const [imagePreview, setImagePreview] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = React.createRef();

  const openFileDialog = () => {
    if (isLoading) return;
    fileInputRef.current.click();
  };

  const handleAvatarUpload = useCallback(
    (evt) => {
      setIsLoading(true);
      const data = new FormData();
      data.append("file", evt.target.files[0]);
      data.append("upload_preset", "avatar");
      data.append("cloud_name", "workaholic-team");
      axios("https://api.cloudinary.com/v1_1/workaholic-team/image/upload", {
        method: "post",
        data,
      })
        .then((res) => {
          setImagePreview(res.data.secure_url);
          onSuccessfulUpload(res.data.secure_url);
          setIsLoading(false);
        })
        .catch(() => {
          onError("Unable to upload image. Please try again.");
          setIsLoading(false);
        });
    },
    [onError, onSuccessfulUpload]
  );

  return (
    <>
      <label
        htmlFor="photo"
        className="block text-sm font-medium leading-6 text-slate-900"
      >
        Photo
      </label>
      <div className="flex items-center gap-5">
        <Stack
          onClick={openFileDialog}
          direction="row"
          gap={2}
          alignItems={"center"}
          justifyContent={noText && "center"}
        >
          <Avatar
            alt="User Avatar"
            name="avatarUrl"
            src={imagePreview || url}
          />
          <input
            type="file"
            id="avatarUpload"
            onChange={handleAvatarUpload}
            className="hidden"
            ref={fileInputRef}
          />

          <h2 className="block px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm pointer-events-none text-slate-900 ring-1 ring-inset ring-slate-300 peer-hover:bg-slate-50 peer-focus:ring-2 peer-focus:ring-blue-600">
            Change
          </h2>
        </Stack>
        <Stack flexGrow={1} gap={1}>
          <button onClick={removeImage} className="w-fit">
            Remove
          </button>
        </Stack>
      </div>
    </>
  );
};

export default AvatarUpload;
