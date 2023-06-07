import React, { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const UpLoadImage = () => {
  const [imgageList, setImageList] = useState([]);

  const handleOnChange = (e) => {
    const fileImage = e.target.files[0];

    if (!fileImage) return;

    const storages = storage;
    const imgRefs = ref(storage, `image/${fileImage.name}`);
    uploadBytes(imgRefs, fileImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList([...imgageList, url]);
        console.log("đây là ảnh phải ko", url);
      });
    });
  };

  return (
    <div>
      <input type="file" onChange={handleOnChange} multiple ></input>
      {imgageList && imgageList.map((img) => <img src={img}/>)}
    </div>
  );
};

export default UpLoadImage;
