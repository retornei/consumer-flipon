import { HTMLAttributes, useRef, useState } from "react";
import {
  UploadContainer,
  UploadLabel,
  UploadInput,
  Image,
  AddImage,
  RemoveImage
} from "./imageUploadStyles";
import { FiPlus, FiTrash } from "react-icons/fi";

interface ImageUploadProps
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onUpload: (image: File, objectUrl: string) => void;
  onRemove: (filename: string) => void;
  imgSrc?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onUpload,
  onRemove,
  imgSrc = "",
  ref,
  ...props
}) => {
  const [src, setSrc] = useState<string>(imgSrc);
  const inputFile = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImage = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      setSrc(URL.createObjectURL(event.currentTarget.files[0]));
      setFile(event.currentTarget.files[0]);

      onUpload(event.currentTarget.files[0], URL.createObjectURL(event.currentTarget.files[0]));

      event.currentTarget.value = "";
    }
  };

  const handleKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !src) {
      inputFile.current?.click();
    }
  };

  const handleRemove = () => {
    if (imgSrc) {
      onRemove(imgSrc);
      setSrc("");
      setFile(null);
    }
  };

  const handleRemoveKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      if (file) {
        onRemove(file.name);
        setSrc("");
        setFile(null);
      }
    }
  };

  return (
    <UploadContainer tabIndex={0} onKeyPress={handleKeyboard}>
      <UploadLabel>
        <UploadInput
          {...props}
          ref={inputFile}
          type="file"
          onChange={handleImage}
          accept="image/*"
          tabIndex={-1}
        />

        <AddImage>
          <FiPlus />
          <span>Adicionar Imagem</span>
        </AddImage>
      </UploadLabel>
      {src && <Image src={src} alt="" />}
      {src && (
        <RemoveImage
          onClick={handleRemove}
          tabIndex={0}
          onKeyPress={handleRemoveKeyboard}
        >
          <span>Remover</span>
          <FiTrash />
        </RemoveImage>
      )}
    </UploadContainer>
  );
};

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
