import { useState, useEffect } from "react";
import { uploadFile, ipfsAddressResolver, ipfsUrlResolver } from "../lib";

const useImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [fileAddress, setFileAddress] = useState("");

  useEffect(() => {
    if (file) {
      setImageUrl(window.URL.createObjectURL(file));
      setIsUploading(true);
      const upload = async () => {
        try {
          const fileCid = await uploadFile(file);
          setImageUrl(ipfsUrlResolver(fileCid));
          setFileAddress(ipfsAddressResolver(fileCid));
          setIsUploading(false);
        } catch (err) {
          console.log(err);
          setIsUploading(false);
        }
      };

      upload();
    }
  }, [file]);

  const selectImage = (e) => {
    if (e.target.files[0]) {
      if (file) {
        remove();
      }
      setFile(e.target.files[0]);
    }
  };

  const remove = () => {
    setFile(null);
    setImageUrl("");
    setIsUploading(false);
    setFileAddress("");
  };

  return {
    imageUrl,
    file,
    isUploading,
    selectImage,
    remove,
    fileAddress,
  };
};

export default useImageUpload;
